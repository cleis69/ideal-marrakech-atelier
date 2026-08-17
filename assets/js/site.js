/* ==========================================================================
   IDÉAL CONTEMPORAIN — Comportements partagés
   Script classique (pas un module ES) : fonctionne aussi en file://,
   donc le site s'ouvre par double-clic sans serveur.
   ULTRA VISION
   ========================================================================== */
(function () {
  'use strict';

  var REDUCED = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Header : transparent sur le hero, ivoire opaque au scroll ---------- */
  function header() {
    var el = document.querySelector('.header');
    if (!el) return;

    var overHero = el.classList.contains('header--over');
    var threshold = overHero ? window.innerHeight * 0.72 : 24;

    function update() {
      var solid = window.scrollY > threshold;
      el.classList.toggle('header--solid', solid);
      if (overHero) el.classList.toggle('header--over', !solid);
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
  }

  /* ---------- Navigation mobile ---------- */
  function burger() {
    var btn = document.querySelector('.burger');
    var nav = document.querySelector('.nav');
    if (!btn || !nav) return;

    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      document.body.style.overflow = open ? 'hidden' : '';
    });

    Array.prototype.forEach.call(nav.querySelectorAll('a'), function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      });
    });
  }

  /* ---------- Apparition au scroll ---------- */
  function reveal() {
    var items = document.querySelectorAll('.reveal');
    if (!items.length) return;

    if (REDUCED || !('IntersectionObserver' in window)) {
      Array.prototype.forEach.call(items, function (i) { i.classList.add('is-visible'); });
      return;
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('is-visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    Array.prototype.forEach.call(items, function (i) { io.observe(i); });
  }

  /* ---------- Titres : apparition mot à mot, décalage 40ms ---------- */
  function splitWords() {
    if (REDUCED) return;

    Array.prototype.forEach.call(document.querySelectorAll('[data-words]'), function (el) {
      var chunks = el.innerHTML.split(/(<br\s*\/?>)/i);
      var i = 0;
      el.innerHTML = chunks.map(function (chunk) {
        if (/^<br/i.test(chunk)) return chunk;
        return chunk.split(/(\s+)/).map(function (w) {
          if (!w.trim()) return w;
          var s = '<span class="word" style="transition-delay:' + (i * 40) + 'ms">' + w + '</span>';
          i++;
          return s;
        }).join('');
      }).join('');

      /* Les mots ne s'affichent que sous un parent .is-visible. Si le titre
         n'est pas piloté par un conteneur .reveal, il se déclenche lui-même —
         sinon il resterait invisible. */
      if (!el.closest('.reveal')) {
        el.classList.add('reveal');
        requestAnimationFrame(function () {
          requestAnimationFrame(function () { el.classList.add('is-visible'); });
        });
      }
    });
  }

  /* ---------- Curseur personnalisé (desktop uniquement) ---------- */
  function cursor() {
    if (REDUCED) return;
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    var el = document.createElement('div');
    el.className = 'cursor';
    el.innerHTML = '<span class="cursor__label"></span>';
    document.body.appendChild(el);
    var label = el.querySelector('.cursor__label');

    var x = window.innerWidth / 2, y = window.innerHeight / 2;
    var cx = x, cy = y;

    window.addEventListener('mousemove', function (e) {
      x = e.clientX; y = e.clientY;
    }, { passive: true });

    (function tick() {
      cx += (x - cx) * 0.22;
      cy += (y - cy) * 0.22;
      el.style.transform = 'translate(' + cx + 'px,' + cy + 'px) translate(-50%,-50%)';
      requestAnimationFrame(tick);
    })();

    Array.prototype.forEach.call(document.querySelectorAll('[data-cursor]'), function (t) {
      t.addEventListener('mouseenter', function () {
        el.classList.add('is-big');
        label.textContent = t.getAttribute('data-cursor');
      });
      t.addEventListener('mouseleave', function () {
        el.classList.remove('is-big');
        label.textContent = '';
      });
    });
  }

  /* ---------- Comparateur avant/après ---------- */
  function compare() {
    Array.prototype.forEach.call(document.querySelectorAll('.compare'), function (box) {
      var before = box.querySelector('.compare__before');
      var handle = box.querySelector('.compare__handle');
      if (!before || !handle) return;

      function set(clientX) {
        var r = box.getBoundingClientRect();
        var p = Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100));
        before.style.clipPath = 'inset(0 ' + (100 - p) + '% 0 0)';
        handle.style.left = p + '%';
      }

      var dragging = false;

      function down(e) { dragging = true; set(e.touches ? e.touches[0].clientX : e.clientX); }
      function move(e) { if (dragging) set(e.touches ? e.touches[0].clientX : e.clientX); }
      function up() { dragging = false; }

      box.addEventListener('mousedown', down);
      box.addEventListener('touchstart', down, { passive: true });
      window.addEventListener('mousemove', move, { passive: true });
      window.addEventListener('touchmove', move, { passive: true });
      window.addEventListener('mouseup', up);
      window.addEventListener('touchend', up);
    });
  }

  /* ---------- Filtres de catalogue ---------- */
  function filters() {
    var groups = document.querySelectorAll('[data-filter-group]');
    if (!groups.length) return;

    var state = {};

    function apply() {
      Array.prototype.forEach.call(document.querySelectorAll('[data-item]'), function (item) {
        var ok = Object.keys(state).every(function (k) {
          return state[k] === 'tous' || (item.getAttribute('data-' + k) || '').split(' ').indexOf(state[k]) > -1;
        });
        item.style.display = ok ? '' : 'none';
      });
    }

    Array.prototype.forEach.call(groups, function (g) {
      var key = g.getAttribute('data-filter-group');
      state[key] = 'tous';
      Array.prototype.forEach.call(g.querySelectorAll('button'), function (b) {
        b.addEventListener('click', function () {
          Array.prototype.forEach.call(g.querySelectorAll('button'), function (o) {
            o.setAttribute('aria-pressed', 'false');
          });
          b.setAttribute('aria-pressed', 'true');
          state[key] = b.getAttribute('data-value');
          apply();
        });
      });
    });
  }

  /* ---------- Formulaire (démo, pas de backend) ---------- */
  function forms() {
    Array.prototype.forEach.call(document.querySelectorAll('form[data-demo]'), function (f) {
      f.addEventListener('submit', function (e) {
        e.preventDefault();
        var out = f.querySelector('[data-form-msg]');
        if (out) {
          out.hidden = false;
          out.textContent = 'Message reçu. Nous vous répondons rapidement. '
            + '(Démonstration — aucun envoi réel : le formulaire doit être branché à un service d\'envoi.)';
        }
      });
    });
  }

  /* ---------- Année courante ---------- */
  function year() {
    Array.prototype.forEach.call(document.querySelectorAll('[data-year]'), function (e) {
      e.textContent = String(new Date().getFullYear());
    });
  }

  /* ---------- Init ---------- */
  function init() {
    splitWords(); header(); burger(); reveal();
    cursor(); compare(); filters(); forms(); year();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
