/* ============================================================
   MINDMAP.JS — Motor de Mapa Mental Interativo (v2)
   Hub MQCT · SENAI Bahia
   Reaproveitável por TODAS as áreas (Itinerário Nacional e DR-BA)

   USO (igual à v1 — nada muda nas páginas de área):

     const data = MindMap.fromOfficialUC(ucOficial);
     MindMap.render('mm-mount', data, { accent: '#00695C' });

   NOVIDADES NESTA VERSÃO:
   - Layout radial por peso de subárvore (não quebra mais quando
     há só 1 ramo principal — caso real do mapa de UC única).
   - Categorias (Subfunções/Conhecimentos/Habilidades/Atitudes)
     começam RECOLHIDAS — clique para revelar (antes vinha tudo
     aberto de uma vez, lotando a tela).
   - Botão "Tela cheia" (Fullscreen API nativa do navegador).
   - Botão "Nova aba" — abre o mesmo mapa em assets/mindmap-viewer.html.
   - Botão "Baixar HTML" — gera um .html autônomo (CSS+JS+dados
     embutidos), funciona offline, sem precisar do Hub.
   ============================================================ */
(function () {
  'use strict';

  // ---------- Localização deste próprio script (pra achar mindmap.css/viewer) ----------
  var SELF_SRC = (document.currentScript && document.currentScript.src) || (function () {
    var ss = document.getElementsByTagName('script');
    for (var i = ss.length - 1; i >= 0; i--) { if (/mindmap\.js(?:[?#].*)?$/.test(ss[i].src)) return ss[i].src; }
    return '';
  })();
  var MM_BASE = SELF_SRC.replace(/mindmap\.js(?:[?#].*)?$/, '');

  // ---------- Paleta vibrante (uma cor por ramo principal / UC) ----------
  var PALETTE = ['#FF6B6B', '#4ECDC4', '#A78BFA', '#FF9F45', '#2EC4B6',
                 '#F472B6', '#60A5FA', '#84CC16', '#FB923C', '#22D3EE'];

  function shade(hex, pct) {
    var f = parseInt(hex.slice(1), 16), t = pct < 0 ? 0 : 255, p = Math.abs(pct);
    var R = f >> 16, G = (f >> 8) & 255, B = f & 255;
    return '#' + (0x1000000 + (Math.round((t - R) * p) + R) * 0x10000 +
      (Math.round((t - G) * p) + G) * 0x100 + (Math.round((t - B) * p) + B)).toString(16).slice(1);
  }
  function esc(s) { var d = document.createElement('div'); d.textContent = s == null ? '' : String(s); return d.innerHTML; }

  var SHELL =
    '<div class="mm-toolbar">' +
      '<h1 class="mm-title"></h1>' +
      '<span class="mm-sub"></span>' +
      '<button type="button" class="mm-btn" data-act="expand">＋ Expandir tudo</button>' +
      '<button type="button" class="mm-btn" data-act="collapse">－ Recolher tudo</button>' +
      '<button type="button" class="mm-btn" data-act="zoomin">🔍+</button>' +
      '<button type="button" class="mm-btn" data-act="zoomout">🔍−</button>' +
      '<button type="button" class="mm-btn" data-act="reset">⟳ Resetar</button>' +
      '<span class="mm-sep"></span>' +
      '<button type="button" class="mm-btn mm-btn-accent" data-act="fullscreen">⛶ Tela cheia</button>' +
      '<button type="button" class="mm-btn mm-btn-accent" data-act="newtab">↗ Nova aba</button>' +
      '<button type="button" class="mm-btn mm-btn-accent" data-act="download">⬇ Baixar HTML</button>' +
    '</div>' +
    '<div class="mm-legend"></div>' +
    '<div class="mm-stage">' +
      '<div class="mm-world">' +
        '<svg class="mm-edges-svg"><g class="mm-edges"></g></svg>' +
        '<div class="mm-nodes-layer"></div>' +
      '</div>' +
    '</div>' +
    '<div class="mm-hint">💡 Clique nos nós para expandir/recolher · arraste para mover · scroll para zoom</div>';

  function MindMapInstance(container) {
    this.container = container;
    this.idSeq = 0;
    this.treeRoot = null;
    this.visibleNodes = [];
    this.nodeEls = new Map();
    this.scale = 0.55; this.panX = 0; this.panY = 0;
    this.CENTER = 1000; this.RADII = [0, 210, 380, 540];
    this.lastData = null; this.lastOpts = null;
    this._build();
  }

  MindMapInstance.prototype._build = function () {
    var self = this;
    this.container.classList.add('mm-widget');
    this.container.innerHTML = SHELL;
    this.stage = this.container.querySelector('.mm-stage');
    this.world = this.container.querySelector('.mm-world');
    this.edgesGroup = this.container.querySelector('.mm-edges');
    this.nodesLayer = this.container.querySelector('.mm-nodes-layer');
    this.legendEl = this.container.querySelector('.mm-legend');
    this.titleEl = this.container.querySelector('.mm-title');
    this.subEl = this.container.querySelector('.mm-sub');
    this.btnNewtab = this.container.querySelector('[data-act="newtab"]');
    this.btnDownload = this.container.querySelector('[data-act="download"]');

    this.container.querySelector('[data-act="expand"]').onclick = function () { self._expandAll(self.treeRoot); self._render(); };
    this.container.querySelector('[data-act="collapse"]').onclick = function () { self._collapseAll(self.treeRoot); self.treeRoot.expanded = true; self._render(); };
    this.container.querySelector('[data-act="zoomin"]').onclick = function () { self._zoomAtCenter(1.25); };
    this.container.querySelector('[data-act="zoomout"]').onclick = function () { self._zoomAtCenter(0.8); };
    this.container.querySelector('[data-act="reset"]').onclick = function () { self._centerView(); };
    this.container.querySelector('[data-act="fullscreen"]').onclick = function () { self._toggleFullscreen(); };
    this.btnNewtab.onclick = function () { self._openInNewTab(); };
    this.btnDownload.onclick = function () { self._downloadStandalone(); };

    document.addEventListener('fullscreenchange', function () {
      requestAnimationFrame(function () { self._centerView(); });
    });

    // ---- pan (mouse) ----
    var dragging = false, sx = 0, sy = 0, spx = 0, spy = 0;
    this.stage.addEventListener('mousedown', function (e) {
      if (e.target.closest('.mm-node')) return;
      dragging = true; self.stage.classList.add('mm-grabbing');
      sx = e.clientX; sy = e.clientY; spx = self.panX; spy = self.panY;
    });
    window.addEventListener('mousemove', function (e) {
      if (!dragging) return;
      self.panX = spx + (e.clientX - sx); self.panY = spy + (e.clientY - sy);
      self._applyTransform();
    });
    window.addEventListener('mouseup', function () { dragging = false; self.stage.classList.remove('mm-grabbing'); });

    // ---- pan (touch) ----
    this.stage.addEventListener('touchstart', function (e) {
      if (e.target.closest('.mm-node')) return;
      if (e.touches.length !== 1) return;
      dragging = true; sx = e.touches[0].clientX; sy = e.touches[0].clientY; spx = self.panX; spy = self.panY;
    }, { passive: true });
    this.stage.addEventListener('touchmove', function (e) {
      if (!dragging || e.touches.length !== 1) return;
      e.preventDefault();
      self.panX = spx + (e.touches[0].clientX - sx); self.panY = spy + (e.touches[0].clientY - sy);
      self._applyTransform();
    }, { passive: false });
    this.stage.addEventListener('touchend', function () { dragging = false; });

    // ---- zoom (wheel) ----
    this.stage.addEventListener('wheel', function (e) {
      e.preventDefault();
      var r = self.stage.getBoundingClientRect();
      var mx = e.clientX - r.left, my = e.clientY - r.top;
      var wx = (mx - self.panX) / self.scale, wy = (my - self.panY) / self.scale;
      self.scale = Math.min(2.2, Math.max(0.15, self.scale * (e.deltaY > 0 ? 0.9 : 1.1)));
      self.panX = mx - wx * self.scale; self.panY = my - wy * self.scale;
      self._applyTransform();
    }, { passive: false });
  };

  MindMapInstance.prototype._toggleFullscreen = function () {
    var el = this.container;
    if (!document.fullscreenElement) {
      var req = el.requestFullscreen || el.webkitRequestFullscreen || el.msRequestFullscreen;
      if (req) req.call(el);
    } else {
      var exit = document.exitFullscreen || document.webkitExitFullscreen || document.msExitFullscreen;
      if (exit) exit.call(document);
    }
  };

  MindMapInstance.prototype._openInNewTab = function () {
    if (!this.lastData) return;
    try {
      var payload = JSON.stringify({ data: this.lastData, opts: this.lastOpts || {} });
      var b64 = btoa(unescape(encodeURIComponent(payload)));
      window.open(MM_BASE + 'mindmap-viewer.html#' + b64, '_blank');
    } catch (e) { console.error(e); }
  };

  MindMapInstance.prototype._downloadStandalone = function () {
    if (!this.lastData) return;
    var self = this;
    var btn = this.btnDownload;
    var prevTxt = btn.textContent;
    btn.disabled = true; btn.textContent = '⏳ Gerando...';
    Promise.all([
      fetch(MM_BASE + 'mindmap.css').then(function (r) { return r.text(); }),
      fetch(MM_BASE + 'mindmap.js').then(function (r) { return r.text(); })
    ]).then(function (parts) {
      var css = parts[0], js = parts[1];
      var dataJson = JSON.stringify(self.lastData);
      var optsJson = JSON.stringify(Object.assign({}, self.lastOpts || {}, { embedded: true }));
      var title = esc((self.lastData.curso || 'Mapa Mental'));
      var html = '<!DOCTYPE html><html lang="pt-BR"><head><meta charset="UTF-8">' +
        '<meta name="viewport" content="width=device-width,initial-scale=1">' +
        '<title>' + title + ' — Mapa Mental</title><style>' + css +
        '\nhtml,body{margin:0;height:100%;background:#0d0c16}#mm-mount{width:100vw;height:100vh}</style></head>' +
        '<body><div id="mm-mount"></div><script>' + js + '<' + '/script>' +
        '<script>MindMap.render("mm-mount", ' + dataJson + ', ' + optsJson + ');<' + '/script></body></html>';
      var blob = new Blob([html], { type: 'text/html' });
      var a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      var safe = (self.lastData.curso || 'mapa_mental').normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-zA-Z0-9]+/g, '_').replace(/^_+|_+$/g, '').slice(0, 60) || 'mapa_mental';
      a.download = 'Mapa_Mental_' + safe + '.html';
      document.body.appendChild(a); a.click(); a.remove();
    }).catch(function (e) {
      console.error(e);
      alert('Não foi possível gerar o arquivo para download. Verifique a conexão e tente novamente.');
    }).finally(function () {
      btn.disabled = false; btn.textContent = prevTxt;
    });
  };

  MindMapInstance.prototype._applyTransform = function () {
    this.world.style.transform = 'translate(' + this.panX + 'px,' + this.panY + 'px) scale(' + this.scale + ')';
  };
  MindMapInstance.prototype._centerView = function () {
    var r = this.stage.getBoundingClientRect();
    this.scale = 0.55;
    this.panX = r.width / 2 - this.CENTER * this.scale;
    this.panY = r.height / 2 - this.CENTER * this.scale;
    this._applyTransform();
  };
  MindMapInstance.prototype._zoomAtCenter = function (factor) {
    var r = this.stage.getBoundingClientRect();
    var cx = r.width / 2, cy = r.height / 2;
    var wx = (cx - this.panX) / this.scale, wy = (cy - this.panY) / this.scale;
    this.scale = Math.min(2.2, Math.max(0.15, this.scale * factor));
    this.panX = cx - wx * this.scale; this.panY = cy - wy * this.scale;
    this._applyTransform();
  };

  MindMapInstance.prototype._leafNode = function (label, color, parent) {
    return { id: 'n' + (this.idSeq++), label: label, type: 'leaf', color: color, parent: parent, children: null, expanded: false };
  };

  MindMapInstance.prototype._buildTree = function (data) {
    this.idSeq = 0;
    var root = { id: 'n' + (this.idSeq++), label: data.curso || 'Tema', type: 'root', color: null, parent: null, children: [], expanded: true };

    if ((data.perfilProfissional || []).length) {
      var perfil = { id: 'n' + (this.idSeq++), label: 'Perfil Profissional', type: 'perfil', color: PALETTE[0], parent: root, expanded: false,
        children: data.perfilProfissional.map((t) => this._leafNode(t, PALETTE[0], null)) };
      perfil.children.forEach((c) => { c.parent = perfil; });
      root.children.push(perfil);
    }
    if ((data.competenciasGerais || []).length) {
      var comp = { id: 'n' + (this.idSeq++), label: 'Competências Gerais', type: 'competencias', color: PALETTE[1], parent: root, expanded: false,
        children: data.competenciasGerais.map((t) => this._leafNode(t, PALETTE[1], null)) };
      comp.children.forEach((c) => { c.parent = comp; });
      root.children.push(comp);
    }

    var ucs = data.unidadesCurriculares || [];
    ucs.forEach((uc, i) => {
      var color = PALETTE[(i + 2) % PALETTE.length];
      // UC única (caso real do Hub): abre direto mostrando as categorias.
      // Várias UCs (mapa de curso completo, uso futuro): começa recolhida.
      var ucNode = { id: 'n' + (this.idSeq++), label: uc.nome, type: 'uc', color: color, parent: root, expanded: ucs.length === 1, children: [] };
      var cats = [['Subfunções', uc.subfuncoes], ['Conhecimentos', uc.conhecimentos], ['Habilidades', uc.habilidades], ['Atitudes', uc.atitudes]];
      cats.forEach((pair) => {
        var label = pair[0], items = pair[1];
        if (!items || !items.length) return;
        // Categorias começam SEMPRE recolhidas — usuário clica pra revelar.
        // Evita amontoar dezenas de nós de uma vez na tela.
        var sub = { id: 'n' + (this.idSeq++), label: label, type: 'subcategory', color: color, parent: ucNode, expanded: false,
          children: items.map((t) => this._leafNode(t, color, null)) };
        sub.children.forEach((c) => { c.parent = sub; });
        ucNode.children.push(sub);
      });
      root.children.push(ucNode);
    });
    return root;
  };

  function iconFor(n) {
    switch (n.type) {
      case 'root': return '🎓';
      case 'perfil': return '👤';
      case 'competencias': return '🎯';
      case 'uc': return '📘';
      case 'subcategory':
        if (n.label.indexOf('Subfun') === 0) return '🔧';
        if (n.label.indexOf('Conhec') === 0) return '💡';
        if (n.label.indexOf('Habil') === 0) return '🛠️';
        if (n.label.indexOf('Atitu') === 0) return '⭐';
        return '📂';
      default: return '';
    }
  }

  // ---------- Peso de subárvore: ramos com mais conteúdo visível ganham mais arco ----------
  MindMapInstance.prototype._computeWeights = function (node) {
    if (!node.expanded || !node.children || !node.children.length) { node._w = 1; return 1; }
    var w = 0, self = this;
    node.children.forEach((c) => { w += self._computeWeights(c); });
    node._w = Math.max(w, 1);
    return node._w;
  };

  // ---------- Layout radial recursivo por wedge (substitui a versão antiga, que
  // quebrava com um único ramo principal — caso real do mapa de 1 UC) ----------
  MindMapInstance.prototype._layout = function (node, depth, angleCenter, angleSpan) {
    node.depth = depth;
    if (depth === 0) { node.x = this.CENTER; node.y = this.CENTER; }
    else {
      var rad = angleCenter * Math.PI / 180;
      node.x = this.CENTER + this.RADII[depth] * Math.cos(rad);
      node.y = this.CENTER + this.RADII[depth] * Math.sin(rad);
    }
    this.visibleNodes.push(node);
    if (node.expanded && node.children && node.children.length) {
      var total = 0;
      node.children.forEach((c) => { total += (c._w || 1); });
      total = total || 1;
      var cursor = angleCenter - angleSpan / 2;
      var self = this;
      node.children.forEach((child) => {
        var w = child._w || 1;
        var span = angleSpan * (w / total);
        var center = cursor + span / 2;
        self._layout(child, depth + 1, center, span);
        cursor += span;
      });
    }
  };

  MindMapInstance.prototype._drawCurve = function (x1, y1, x2, y2, depth, color) {
    var dx = x2 - x1, dy = y2 - y1, len = Math.sqrt(dx * dx + dy * dy) || 1;
    var px = -dy / len, py = dx / len;
    var offset = Math.min(len * 0.22, 50);
    var mx = (x1 + x2) / 2 + px * offset, my = (y1 + y2) / 2 + py * offset;
    var p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute('d', 'M ' + x1 + ' ' + y1 + ' Q ' + mx + ' ' + my + ' ' + x2 + ' ' + y2);
    p.setAttribute('fill', 'none');
    p.setAttribute('stroke', depth === 1 ? '#ffffff55' : (color || '#888'));
    p.setAttribute('stroke-width', depth === 1 ? 3 : depth === 2 ? 2.2 : 1.6);
    p.setAttribute('stroke-linecap', 'round');
    p.setAttribute('opacity', depth === 1 ? 0.55 : depth === 2 ? 0.65 : 0.55);
    return p;
  };

  MindMapInstance.prototype._renderEdges = function () {
    this.edgesGroup.innerHTML = '';
    var self = this;
    this.visibleNodes.forEach((n) => {
      if (!n.parent) return;
      var p = n.parent;
      var path = self._drawCurve(p.x, p.y, n.x, n.y, n.depth, n.depth > 1 ? n.color : null);
      self.edgesGroup.appendChild(path);
    });
  };

  MindMapInstance.prototype._createNodeEl = function (n) {
    var el = document.createElement('div');
    el.className = 'mm-node mm-depth-' + n.depth + ' mm-type-' + n.type;
    var hasChildren = n.children && n.children.length > 0;
    if (hasChildren) el.classList.add('mm-clickable');
    if (n.depth > 0) {
      var bg = n.color ? ('linear-gradient(135deg, ' + n.color + ', ' + shade(n.color, -0.28) + ')') : null;
      if (n.type !== 'leaf' && bg) el.style.background = bg;
      else if (n.type === 'leaf') el.style.borderColor = n.color + '66';
    }
    if (n.depth > 0) el.title = n.label;
    el.innerHTML = '<span class="mm-ic">' + iconFor(n) + '</span>' + esc(n.label) + (hasChildren ? '<span class="mm-chev">▶</span>' : '');
    if (hasChildren) {
      var self = this;
      el.addEventListener('click', function (e) {
        e.stopPropagation();
        n.expanded = !n.expanded;
        self._render();
      });
    }
    return el;
  };

  MindMapInstance.prototype._renderNodes = function () {
    var visibleIds = new Set(this.visibleNodes.map((n) => n.id));
    for (var entry of this.nodeEls) {
      var id = entry[0], el = entry[1];
      if (!visibleIds.has(id)) {
        el.classList.add('mm-node-exit');
        (function (el2) { setTimeout(function () { el2.remove(); }, 260); })(el);
        this.nodeEls.delete(id);
      }
    }
    var self = this;
    this.visibleNodes.forEach((n) => {
      var el = self.nodeEls.get(n.id);
      if (!el) {
        el = self._createNodeEl(n);
        el.style.left = (n.parent ? n.parent.x : n.x) + 'px';
        el.style.top = (n.parent ? n.parent.y : n.y) + 'px';
        self.nodesLayer.appendChild(el);
        self.nodeEls.set(n.id, el);
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            el.classList.add('mm-node-show');
            el.style.left = n.x + 'px'; el.style.top = n.y + 'px';
          });
        });
      } else {
        el.style.left = n.x + 'px'; el.style.top = n.y + 'px';
        el.classList.toggle('mm-expanded', !!n.expanded);
      }
    });
  };

  MindMapInstance.prototype._render = function () {
    this.visibleNodes = [];
    this._computeWeights(this.treeRoot);
    this._layout(this.treeRoot, 0, -90, 360);
    this._renderEdges();
    this._renderNodes();
  };

  MindMapInstance.prototype._renderLegend = function () {
    var branches = this.treeRoot.children;
    this.legendEl.innerHTML = '<h3>Legenda</h3>' + branches.map((b) =>
      '<div class="mm-legend-row"><span class="mm-legend-dot" style="background:' + (b.color || '#ffd278') + ';color:' + (b.color || '#ffd278') + '"></span>' + esc(b.label) + '</div>'
    ).join('');
  };

  MindMapInstance.prototype._expandAll = function (n) { if (n.children) { var self = this; n.children.forEach((c) => { c.expanded = true; self._expandAll(c); }); } };
  MindMapInstance.prototype._collapseAll = function (n) { if (n.children) { var self = this; n.children.forEach((c) => { c.expanded = false; self._collapseAll(c); }); } };

  MindMapInstance.prototype.renderData = function (data, opts) {
    opts = opts || {};
    this.lastData = data; this.lastOpts = opts;
    this.titleEl.textContent = '🧠 ' + (data.curso || 'Mapa Mental');
    this.subEl.textContent = opts.subtitle || '';
    if (opts.accent) { this.container.style.setProperty('--mm-accent', opts.accent); }
    if (opts.embedded) {
      this.btnNewtab.style.display = 'none';
      this.btnDownload.style.display = 'none';
    }
    this.nodeEls.forEach((el) => el.remove());
    this.nodeEls.clear();
    this.treeRoot = this._buildTree(data);
    this._centerView();
    this._render();
    this._renderLegend();
  };

  // ============================================================
  // API PÚBLICA (igual à v1 — compatível com as páginas já no ar)
  // ============================================================
  var instances = new WeakMap();

  window.MindMap = {
    mount: function (containerId) {
      var el = document.getElementById(containerId);
      if (!el) { console.error('MindMap.mount: elemento não encontrado:', containerId); return null; }
      var inst = instances.get(el);
      if (!inst) { inst = new MindMapInstance(el); instances.set(el, inst); }
      return inst;
    },

    render: function (containerId, data, opts) {
      var inst = window.MindMap.mount(containerId);
      if (inst) inst.renderData(data, opts);
      return inst;
    },

    fromOfficialUC: function (uc) {
      if (!uc) return null;
      var capArr = Array.isArray(uc.capacidades) ? uc.capacidades : [];

      var subfuncoes = capArr
        .map((c) => (typeof c === 'string' ? c : (c && c.texto) || ''))
        .filter(Boolean);

      var conhecimentos = [];
      if (capArr.length && capArr.some((c) => c && c.conhecimentos && c.conhecimentos.length)) {
        capArr.forEach((c) => { if (c && c.conhecimentos) conhecimentos = conhecimentos.concat(c.conhecimentos); });
      } else if (Array.isArray(uc.conhecimentos)) {
        conhecimentos = uc.conhecimentos.slice();
      }

      var habilidades = Array.isArray(uc.padroes) ? uc.padroes.filter(Boolean) : [];
      var atitudes = Array.isArray(uc.socioemocionais) ? uc.socioemocionais.filter(Boolean) : [];

      var titulo = (uc.codigo || uc.id || '') + (uc.nome ? ' — ' + uc.nome : '');
      titulo = titulo.replace(/^—\s*/, '').trim() || (uc.nome || 'Unidade Curricular');

      return {
        curso: titulo,
        perfilProfissional: [],
        competenciasGerais: [],
        unidadesCurriculares: [{
          nome: uc.nome || titulo,
          subfuncoes: subfuncoes.slice(0, 8),
          conhecimentos: conhecimentos.slice(0, 10),
          habilidades: habilidades.slice(0, 8),
          atitudes: atitudes.slice(0, 8)
        }]
      };
    }
  };
})();
