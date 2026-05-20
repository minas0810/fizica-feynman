/* ===========================================
   FIZICA LUI FEYNMAN — nav.js
   Sistem de navigație — 21 module
   =========================================== */

(function () {
  'use strict';

  /* ——— TOATE MODULELE ÎN ORDINEA FEYNMAN ———
     Numerotarea originală (n) este păstrată pentru consistență cu fișierele,
     dar ordinea de parcurgere urmează arcul pedagogic Feynman (6 acte). */
  const MODULES = [
    /* Actul I — Marea idee */
    { n: 1,  icon: '🔬', title: 'Ce este fizica?',                        short: 'Ce este fizica?',        file: 'Modulul_1_Ce_Este_Fizica.html',                      bloc: 'Actul I — Marea idee' },
    { n: 2,  icon: '📏', title: 'Mărimi fizice și măsurare',              short: 'Mărimi fizice',          file: 'Modulul_2_Marimi_Fizice_Masurare.html',              bloc: 'Actul I — Marea idee' },
    /* Actul II — Atomii în mișcare */
    { n: 3,  icon: '🧱', title: 'Densitatea',                             short: 'Densitatea',             file: 'Modulul_11_Densitatea.html',                         bloc: 'Actul II — Atomii în mișcare' },
    { n: 4,  icon: '🌡️', title: 'Fenomene termice',                      short: 'Fenomene termice',       file: 'Modulul_13_Fenomene_Termice.html',                   bloc: 'Actul II — Atomii în mișcare' },
    { n: 5,  icon: '♨️', title: 'Calorimetria și transferul de căldură',  short: 'Calorimetrie',           file: 'Modulul_14_Calorimetria_Transfer_Caldura.html',      bloc: 'Actul II — Atomii în mișcare' },
    { n: 6,  icon: '🌊', title: 'Presiunea și statica fluidelor',         short: 'Presiune și fluide',     file: 'Modulul_12_Presiunea_Fluide.html',                   bloc: 'Actul II — Atomii în mișcare' },
    /* Actul III — Cum se mișcă lucrurile */
    { n: 7,  icon: '🏃', title: 'Mișcarea corpurilor',                    short: 'Mișcarea corpurilor',    file: 'Modulul_3_Miscarea_Corpurilor.html',                 bloc: 'Actul III — Cum se mișcă lucrurile' },
    { n: 8,  icon: '➡️', title: 'Mărimi scalare și vectoriale',           short: 'Mărimi vectoriale',      file: 'Modulul_4_Marimi_Vectoriale.html',                   bloc: 'Actul III — Cum se mișcă lucrurile' },
    { n: 9,  icon: '⚖️', title: 'Inerția',                                short: 'Inerția',                file: 'Modulul_5_Inertia.html',                             bloc: 'Actul III — Cum se mișcă lucrurile' },
    { n: 10, icon: '💪', title: 'Tipuri de forțe',                        short: 'Tipuri de forțe',        file: 'Modulul_6_Tipuri_de_Forte.html',                     bloc: 'Actul III — Cum se mișcă lucrurile' },
    { n: 11, icon: '🍎', title: 'Legile lui Newton',                      short: 'Legile lui Newton',      file: 'Modulul_7_Legile_Newton.html',                       bloc: 'Actul III — Cum se mișcă lucrurile' },
    /* Actul IV — Conservarea energiei */
    { n: 12, icon: '⚙️', title: 'Lucrul mecanic și puterea',              short: 'Lucru mecanic',          file: 'Modulul_8_Lucru_Mecanic_Putere.html',                bloc: 'Actul IV — Conservarea energiei' },
    { n: 13, icon: '🎢', title: 'Energia mecanică',                       short: 'Energia mecanică',       file: 'Modulul_9_Energia_Mecanica.html',                    bloc: 'Actul IV — Conservarea energiei' },
    { n: 14, icon: '⚖️', title: 'Echilibrul corpurilor și pârghiile',     short: 'Echilibru și pârghii',   file: 'Modulul_10_Echilibru_Parghii.html',                  bloc: 'Actul IV — Conservarea energiei' },
    /* Actul V — Unde și lumină */
    { n: 15, icon: '🔊', title: 'Sunetul',                                short: 'Sunetul',                file: 'Modulul_15_Sunetul.html',                            bloc: 'Actul V — Unde și lumină' },
    { n: 16, icon: '🌈', title: 'Fenomene optice',                        short: 'Fenomene optice',        file: 'Modulul_16_Fenomene_Optice.html',                    bloc: 'Actul V — Unde și lumină' },
    { n: 17, icon: '👁️', title: 'Lentile și ochiul uman',                short: 'Lentile și ochi',        file: 'Modulul_17_Lentile_Ochiul_Uman.html',                bloc: 'Actul V — Unde și lumină' },
    /* Actul VI — Electricitate și magnetism */
    { n: 18, icon: '⚡', title: 'Fenomene electrice și magnetice',        short: 'Electricitate — intro',  file: 'Modulul_18_Fenomene_Electrice_Magnetice.html',       bloc: 'Actul VI — Electricitate și magnetism' },
    { n: 19, icon: '🔋', title: 'Circuitul electric și Legea lui Ohm',   short: 'Legea lui Ohm',          file: 'Modulul_19_Circuit_Electric_Ohm.html',               bloc: 'Actul VI — Electricitate și magnetism' },
    { n: 20, icon: '🔌', title: 'Circuite serie și paralel',              short: 'Serie și paralel',       file: 'Modulul_20_Circuite_Serie_Paralel.html',             bloc: 'Actul VI — Electricitate și magnetism' },
    { n: 21, icon: '🔥', title: 'Energia electrică și efectul Joule',    short: 'Efect Joule',            file: 'Modulul_21_Energia_Electrica_Joule.html',            bloc: 'Actul VI — Electricitate și magnetism' },
    /* Epilog — Energia și viața */
    { n: 22, icon: '🌍', title: 'Energia și viața',                       short: 'Energia și viața',       file: 'Modulul_22_Energia_si_Viata.html',                   bloc: 'Epilog — Energia și viața' },
  ];

  const TOTAL = MODULES.length; /* 21 */

  const body   = document.body;
  const modNum = parseInt(body.getAttribute('data-module'), 10) || 0;
  const isIndex        = body.getAttribute('data-page') === 'index';
  const isModulesPage  = body.getAttribute('data-page') === 'modules';
  const isAboutFeynman = body.getAttribute('data-page') === 'despre-feynman';
  const isSimulari     = body.getAttribute('data-page') === 'simulari';
  const isAboutAuthor  = body.getAttribute('data-page') === 'despre-autor';
  const isModule       = modNum > 0;

  /* Indexul curent în array-ul Feynman (pentru prev/next) */
  const curIdx = MODULES.findIndex(m => m.n === modNum);

  /* —— Căi relative —— */
  const isTopLevel = isIndex || isModulesPage || isAboutFeynman || isSimulari || isAboutAuthor;
  function modHref(file)      { return isTopLevel ? 'modules/' + file : file; }
  function homeHref()         { return isTopLevel ? 'index.html'          : '../index.html'; }
  function aboutHref()        { return isTopLevel ? 'despre-feynman.html' : '../despre-feynman.html'; }
  function modulesHref()      { return isTopLevel ? 'modules.html'        : '../modules.html'; }
  function simulariHref()     { return isTopLevel ? 'simulari.html'       : '../simulari.html'; }
  function authorHref()       { return 'https://mate-fizica.eu'; }

  /* ================================================
     1. NAVBAR GLOBALĂ
  ================================================ */
  function buildNavbar() {
    const nav = document.querySelector('.site-nav');
    if (!nav) return;

    /* Construiește dropdown cu headere de bloc */
    let dropHTML = '';
    let lastBloc = null;
    MODULES.forEach(m => {
      if (m.bloc !== lastBloc) {
        if (lastBloc !== null) dropHTML += '<hr>';
        dropHTML += `<div class="drop-bloc-label">${m.bloc}</div>`;
        lastBloc = m.bloc;
      }
      const active = m.n === modNum ? ' nav-active' : '';
      dropHTML += `
        <a href="${modHref(m.file)}" class="${active.trim()}" role="menuitem">
          <span class="drop-num">${m.n}</span>
          <span class="drop-icon">${m.icon}</span>
          <span class="drop-title">${m.title}</span>
        </a>`;
    });

    const mobileLinksHTML = `
      <hr>
      <a href="${aboutHref()}" class="drop-mobile-link">
        <span class="drop-icon">👨‍🔬</span>
        <span class="drop-title">Despre Feynman</span>
      </a>
      <a href="${simulariHref()}" class="drop-mobile-link">
        <span class="drop-icon">🧪</span>
        <span class="drop-title">Playground</span>
      </a>
      <a href="${authorHref()}" target="_blank" rel="noopener noreferrer" class="drop-mobile-link">
        <span class="drop-icon">✍️</span>
        <span class="drop-title">Despre autor</span>
      </a>`;

    nav.innerHTML = `
      <div class="site-nav__inner">
        <a href="${homeHref()}" class="site-nav__brand">⚛ Fizica lui Feynman</a>
        <div class="site-nav__spacer"></div>
        <a href="${homeHref()}" class="site-nav__home">Acasă</a>
        <a href="${modulesHref()}" class="site-nav__module-list">Module</a>
        <div class="site-nav__dropdown-wrap">
          <button class="site-nav__modules-btn" id="nav-modules-btn"
                  aria-haspopup="true" aria-expanded="false" aria-controls="nav-dropdown">
            Caută modul <span class="nav-arrow">▾</span>
          </button>
          <div class="site-nav__dropdown" id="nav-dropdown" role="menu" aria-label="Lista module">
            ${dropHTML}
            ${mobileLinksHTML}
          </div>
        </div>
        <a href="${simulariHref()}" class="site-nav__simulari">Playground</a>
        <a href="${aboutHref()}" class="site-nav__despre-feynman">Despre Feynman</a>
        <a href="${authorHref()}" target="_blank" rel="noopener noreferrer" class="site-nav__despre-autor">Despre autor</a>
        <button class="site-nav__hamburger" id="nav-hamburger" aria-label="Meniu module">☰</button>
      </div>`;

    /* — Dropdown toggle — */
    const btn      = document.getElementById('nav-modules-btn');
    const dropdown = document.getElementById('nav-dropdown');
    const hamBtn   = document.getElementById('nav-hamburger');

    function openDropdown()  {
      dropdown.classList.add('open');
      btn.classList.add('open');
      btn.setAttribute('aria-expanded', 'true');
    }
    function closeDropdown() {
      dropdown.classList.remove('open');
      btn.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    }
    function toggleDropdown(e) {
      e.stopPropagation();
      dropdown.classList.contains('open') ? closeDropdown() : openDropdown();
    }

    btn.addEventListener('click', toggleDropdown);
    hamBtn.addEventListener('click', toggleDropdown);
    document.addEventListener('click', closeDropdown);
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeDropdown(); });

    /* Scroll la elementul activ din dropdown */
    const activeItem = dropdown.querySelector('.nav-active');
    if (activeItem) {
      requestAnimationFrame(() => activeItem.scrollIntoView({ block: 'nearest' }));
    }
  }

  /* ================================================
     2. TOPBAR (breadcrumb + progres)
  ================================================ */
  function buildTopbar() {
    const bar = document.querySelector('.mod-topbar');
    if (!bar || !isModule) return;

    const cur = MODULES.find(m => m.n === modNum);
    if (!cur) return;

    const dots = MODULES.map((m, idx) => {
      let cls = 'mod-progress__dot';
      if (idx < curIdx)  cls += ' done';
      if (m.n === modNum) cls += ' current';
      return `<span class="${cls}" title="Modulul ${m.n}: ${m.title}"></span>`;
    }).join('');

    bar.innerHTML = `
      <div class="mod-topbar__inner">
        <nav class="breadcrumb" aria-label="Fir Ariadnă">
          <a href="${homeHref()}">Acasă</a>
          <span class="breadcrumb__sep" aria-hidden="true">›</span>
          <a href="${modulesHref()}">Module</a>
          <span class="breadcrumb__sep" aria-hidden="true">›</span>
          <span class="breadcrumb__current">Modulul ${modNum}: ${cur.title}</span>
        </nav>
        <div class="mod-progress" role="progressbar" aria-valuenow="${curIdx + 1}"
             aria-valuemin="1" aria-valuemax="${TOTAL}" aria-label="Progres curs">
          ${dots}
          <span class="mod-progress__label">${curIdx + 1} / ${TOTAL}</span>
        </div>
      </div>`;
  }

  /* ================================================
     3. BUTOANE PREV / NEXT (după ordinea Feynman)
  ================================================ */
  function buildModuleNav(container) {
    if (!container || !isModule || curIdx < 0) return;

    const prev = curIdx > 0            ? MODULES[curIdx - 1] : null;
    const next = curIdx < TOTAL - 1    ? MODULES[curIdx + 1] : null;

    const prevBtn = prev
      ? `<a href="${prev.file}" class="module-nav__btn prev" aria-label="Modulul anterior: ${prev.title}">
           <span class="nav-arrow">←</span>
           <span class="btn-label">
             <span class="btn-meta">Modulul anterior</span>
             <span>${prev.icon} ${prev.short}</span>
           </span>
         </a>`
      : `<span class="module-nav__placeholder"></span>`;

    const nextBtn = next
      ? `<a href="${next.file}" class="module-nav__btn next" aria-label="Modulul următor: ${next.title}">
           <span class="btn-label">
             <span class="btn-meta">Modulul următor</span>
             <span>${next.icon} ${next.short}</span>
           </span>
           <span class="nav-arrow">→</span>
         </a>`
      : `<span class="module-nav__placeholder"></span>`;

    container.innerHTML = prevBtn + nextBtn;
  }

  /* ================================================
     4. CUPRINS (TOC)
  ================================================ */
  function buildTOC() {
    const tocList = document.getElementById('toc-list');
    if (!tocList) return;

    const main = document.querySelector('.module-main');
    if (!main) return;

    const headings = Array.from(main.querySelectorAll('h1, h2'));
    if (headings.length === 0) return;

    headings.forEach((h, i) => {
      if (!h.id) {
        const slug = h.textContent.trim()
          .toLowerCase()
          .replace(/[^a-z0-9À-ſ\s-]/g, '')
          .replace(/\s+/g, '-')
          .substring(0, 50);
        h.id = slug || ('sec-' + i);
      }
    });

    headings.forEach(h => {
      const li = document.createElement('li');
      li.className = h.tagName === 'H2' ? 'toc-h2' : 'toc-h1';

      const a = document.createElement('a');
      a.href = '#' + h.id;
      a.textContent = h.textContent.trim();

      a.addEventListener('click', e => {
        e.preventDefault();
        const top = h.getBoundingClientRect().top + window.scrollY - 64;
        window.scrollTo({ top, behavior: 'smooth' });
        closeMobileTOC();
        tocList.querySelectorAll('a').forEach(l => l.classList.remove('toc-active'));
        a.classList.add('toc-active');
        history.replaceState(null, '', '#' + h.id);
      });

      li.appendChild(a);
      tocList.appendChild(li);
    });
  }

  /* ================================================
     5. SCROLL SPY
  ================================================ */
  function setupScrollSpy() {
    const tocLinks = Array.from(document.querySelectorAll('#toc-list a'));
    if (!tocLinks.length) return;

    const ids     = tocLinks.map(a => a.getAttribute('href').slice(1));
    const targets = ids.map(id => document.getElementById(id)).filter(Boolean);

    let lastActive = null;

    const observer = new IntersectionObserver(entries => {
      let topEntry = null;
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (!topEntry || entry.boundingClientRect.top < topEntry.boundingClientRect.top) {
            topEntry = entry;
          }
        }
      });
      if (!topEntry) return;

      const newActive = document.querySelector(`#toc-list a[href="#${topEntry.target.id}"]`);
      if (newActive && newActive !== lastActive) {
        tocLinks.forEach(l => l.classList.remove('toc-active'));
        newActive.classList.add('toc-active');
        newActive.scrollIntoView({ block: 'nearest' });
        lastActive = newActive;
      }
    }, { rootMargin: '-10% 0px -75% 0px', threshold: 0 });

    targets.forEach(t => observer.observe(t));
  }

  /* ================================================
     6. BACK TO TOP
  ================================================ */
  function setupBackToTop() {
    const btn = document.getElementById('back-to-top');
    if (!btn) return;

    window.addEventListener('scroll', () => {
      btn.classList.toggle('visible', window.scrollY > 300);
    }, { passive: true });

    btn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ================================================
     7. TOC MOBILE
  ================================================ */
  function closeMobileTOC() {
    const toc     = document.getElementById('toc');
    const overlay = document.getElementById('toc-overlay');
    if (toc)     toc.classList.remove('mobile-open');
    if (overlay) overlay.classList.remove('visible');
  }

  function setupTocMobile() {
    const toggleBtn = document.querySelector('.toc-toggle-btn');
    const toc       = document.getElementById('toc');
    if (!toggleBtn || !toc) return;

    const closeBtn = document.createElement('button');
    closeBtn.className   = 'toc-close-btn';
    closeBtn.textContent = '✕';
    closeBtn.setAttribute('aria-label', 'Închide cuprins');
    toc.insertBefore(closeBtn, toc.firstChild);

    const overlay = document.createElement('div');
    overlay.className = 'toc-overlay';
    overlay.id        = 'toc-overlay';
    document.body.appendChild(overlay);

    toggleBtn.addEventListener('click', () => {
      const open = toc.classList.toggle('mobile-open');
      overlay.classList.toggle('visible', open);
    });
    closeBtn.addEventListener('click', closeMobileTOC);
    overlay.addEventListener('click', closeMobileTOC);
  }

  /* ================================================
     INIT
  ================================================ */
  document.addEventListener('DOMContentLoaded', () => {
    buildNavbar();

    if (isModule) {
      buildTopbar();
      buildModuleNav(document.querySelector('.module-nav--top'));
      buildModuleNav(document.querySelector('.module-nav--bottom'));
      buildTOC();
      setupScrollSpy();
      setupTocMobile();
    }

    setupBackToTop();
  });

})();
