/**
 * Mantra Dhara — App Logic (v3 — 20 sections)
 */

/* ── State ── */
const state = {
  lang: 'hindi',
  favorites:  JSON.parse(localStorage.getItem('md_favorites')  || '[]'),
  bookmarks:  JSON.parse(localStorage.getItem('md_bookmarks')  || '[]'),
  activePage: 'home'
};

const LANG_LABEL = { odia: 'ଓଡ଼ିଆ', hindi: 'हिन्दी', english: 'English' };
const LANG_ORDER = ['odia', 'hindi', 'english'];

/* ── Language helpers ── */
function tField(entry, lang, key) {
  return entry?.[lang]?.[key] || entry?.hindi?.[key] || entry?.english?.[key] || '';
}
function t(entry, key) { return tField(entry, state.lang, key); }
function tMeaning(entry, lang) {
  const l = lang || state.lang;
  return entry?.meaning?.[l] || entry?.meaning?.english || entry?.meaning?.hindi || '';
}

/* ── Persist ── */
function saveFavorites() { localStorage.setItem('md_favorites', JSON.stringify(state.favorites)); }
function saveBookmarks()  { localStorage.setItem('md_bookmarks',  JSON.stringify(state.bookmarks));  }

/* ── Toast ── */
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('show');
  setTimeout(() => el.classList.remove('show'), 2500);
}

/* ── Copy ── */
function copyText(text) {
  navigator.clipboard.writeText(text)
    .then(() => showToast('📋 Copied!'))
    .catch(() => showToast('Could not copy — select manually.'));
}

/* ── Fav / Bookmark ── */
function toggleFavorite(id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) { state.favorites.push(id); btn.classList.add('favorited'); showToast('❤️ Added to favorites'); }
  else { state.favorites.splice(idx,1); btn.classList.remove('favorited'); showToast('Removed from favorites'); }
  saveFavorites();
  btn.innerHTML = state.favorites.includes(id) ? '❤️ Fav' : '🤍 Fav';
}
function toggleBookmark(id, btn) {
  const idx = state.bookmarks.indexOf(id);
  if (idx === -1) { state.bookmarks.push(id); btn.classList.add('bookmarked'); showToast('🔖 Bookmarked!'); }
  else { state.bookmarks.splice(idx,1); btn.classList.remove('bookmarked'); showToast('Bookmark removed'); }
  saveBookmarks();
  btn.textContent = state.bookmarks.includes(id) ? '🔖 ✓' : '🔖';
}

/* ══════════════════════════════════════
   STUB BADGE
══════════════════════════════════════ */
function isStub(entry) { return entry?.status === 'stub'; }

/* ══════════════════════════════════════
   CARD
══════════════════════════════════════ */
function buildCard(entry) {
  const isFav  = state.favorites.includes(entry.id);
  const isBkmk = state.bookmarks.includes(entry.id);
  const stub   = isStub(entry);

  const primaryTitle = t(entry, 'title') || entry.id;
  const otherTitles  = LANG_ORDER
    .filter(l => l !== state.lang)
    .map(l => `<span class="card-alt-title" lang="${l}">${tField(entry, l, 'title')}</span>`)
    .join('');

  const preview = stub
    ? '<em style="color:var(--text-muted);font-family:var(--font-ui);font-size:13px;">Content coming soon</em>'
    : (t(entry, 'text') || '').split('\n')[0];

  const card = document.createElement('article');
  card.className = 'mantra-card' + (stub ? ' stub-card' : '');
  card.innerHTML = `
    <div class="card-deity">${entry.deity || ''}${stub ? ' <span class="stub-badge">Pending</span>' : ''}</div>
    <div class="card-title">${primaryTitle}</div>
    ${otherTitles ? `<div class="card-alt-titles">${otherTitles}</div>` : ''}
    <div class="card-preview">${preview}</div>
    <div class="card-actions">
      <button class="btn-icon fav-btn ${isFav?'favorited':''}" title="Favorite">
        ${isFav ? '❤️' : '🤍'} Fav
      </button>
      <button class="btn-icon bkmk-btn ${isBkmk?'bookmarked':''}" title="Bookmark">
        ${isBkmk ? '🔖 ✓' : '🔖'}
      </button>
    </div>
  `;
  card.querySelector('.fav-btn').addEventListener('click', e => { e.stopPropagation(); toggleFavorite(entry.id, e.currentTarget); });
  card.querySelector('.bkmk-btn').addEventListener('click', e => { e.stopPropagation(); toggleBookmark(entry.id, e.currentTarget); });
  card.addEventListener('click', () => openModal(entry));
  return card;
}

function renderGrid(containerId, entries) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  if (!entries.length) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🙏</div><p>Nothing here yet.</p></div>';
    return;
  }
  entries.forEach(e => el.appendChild(buildCard(e)));
}

/* ══════════════════════════════════════
   MODAL — trilingual stacked view
══════════════════════════════════════ */
function openModal(entry) {
  const overlay = document.getElementById('mantra-modal-overlay');
  const modal   = document.getElementById('mantra-modal');
  const isFav   = state.favorites.includes(entry.id);
  const isBkmk  = state.bookmarks.includes(entry.id);
  const stub    = isStub(entry);

  const langBlocks = LANG_ORDER.map(lang => {
    const text    = tField(entry, lang, 'text');
    const title   = tField(entry, lang, 'title');
    const meaning = tMeaning(entry, lang);
    const sc      = lang === 'odia' ? 'odia' : lang === 'english' ? 'english' : '';
    const flag    = lang === 'odia' ? '🕉️' : lang === 'hindi' ? '🇮🇳' : '🇬🇧';
    return `
      <div class="trilang-block" id="trilang-${lang}" data-lang="${lang}">
        <div class="trilang-header">
          <span class="trilang-flag">${flag}</span>
          <span class="trilang-lang-label">${LANG_LABEL[lang]}</span>
          <span class="trilang-title">${title}</span>
          <button class="btn-icon trilang-copy" data-lang="${lang}" style="margin-left:auto" title="Copy">📋</button>
        </div>
        <div class="mantra-script ${sc}">${stub ? '<em style="color:var(--text-muted)">Content coming soon — please share the text.</em>' : text.replace(/\n/g,'<br>')}</div>
        ${meaning ? `<div class="trilang-meaning">${meaning}</div>` : ''}
      </div>`;
  }).join('<div class="trilang-divider"></div>');

  /* Find which sections this entry appears in */
  const inSections = SECTIONS
    .filter(s => s.stubs.some(st => st.id === entry.id))
    .map(s => `<span class="tag">${s.icon} ${s.label}</span>`)
    .join('');

  modal.innerHTML = `
    <div class="modal-header">
      <div class="deity-label">${entry.deity || ''}${stub ? ' · <em style="opacity:.7;font-style:normal">Content pending</em>' : ''}</div>
      <h2>${t(entry, 'title') || entry.id}</h2>
      <button class="modal-close" id="modal-close-btn">✕</button>
    </div>
    <div class="modal-body">
      <div class="trilang-jump-bar">
        <span style="font-size:12px;color:var(--text-muted);font-family:var(--font-ui);margin-right:8px;">Jump to:</span>
        <button class="trilang-jump-btn" data-target="trilang-odia">🕉️ ଓଡ଼ିଆ</button>
        <button class="trilang-jump-btn" data-target="trilang-hindi">🇮🇳 हिन्दी</button>
        <button class="trilang-jump-btn" data-target="trilang-english">🇬🇧 English</button>
      </div>
      <div class="trilang-stack">${langBlocks}</div>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Deity</div><div class="info-value">${entry.deity || '—'}</div></div>
        <div class="info-item"><div class="info-label">Repetitions</div><div class="info-value">${entry.repetitions || '—'}</div></div>
        <div class="info-item"><div class="info-label">When to chant</div><div class="info-value">${entry.timing || '—'}</div></div>
        <div class="info-item"><div class="info-label">Appears in</div><div class="info-value" style="display:flex;gap:4px;flex-wrap:wrap">${inSections || '—'}</div></div>
      </div>
      ${entry.benefits ? `<div class="meaning-block"><h4>Benefits / Phal</h4><p>${entry.benefits}</p></div>` : ''}
      <div class="modal-actions">
        ${stub ? '' : '<button class="btn-primary" id="modal-copy-all-btn">📋 Copy All Versions</button>'}
        <button class="btn-secondary fav-btn ${isFav?'favorited':''}" id="modal-fav-btn">
          ${isFav ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
        <button class="btn-secondary bkmk-btn ${isBkmk?'bookmarked':''}" id="modal-bkmk-btn">
          🔖 ${isBkmk ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>`;

  modal.querySelectorAll('.trilang-jump-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = modal.querySelector('#' + btn.dataset.target);
      if (target) target.scrollIntoView({ behavior:'smooth', block:'nearest' });
    });
  });
  modal.querySelectorAll('.trilang-copy').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      copyText(tField(entry, btn.dataset.lang, 'text'));
    });
  });
  const copyAllBtn = modal.querySelector('#modal-copy-all-btn');
  if (copyAllBtn) {
    copyAllBtn.addEventListener('click', () => {
      copyText(LANG_ORDER.map(l =>
        `${LANG_LABEL[l]}\n${tField(entry,l,'title')}\n${tField(entry,l,'text')}`
      ).join('\n\n---\n\n'));
    });
  }
  modal.querySelector('#modal-close-btn').addEventListener('click', closeModal);
  modal.querySelector('#modal-fav-btn').addEventListener('click', function() {
    toggleFavorite(entry.id, this);
    this.innerHTML = state.favorites.includes(entry.id) ? '❤️ Favorited' : '🤍 Favorite';
  });
  modal.querySelector('#modal-bkmk-btn').addEventListener('click', function() {
    toggleBookmark(entry.id, this);
    this.textContent = state.bookmarks.includes(entry.id) ? '🔖 Bookmarked' : '🔖 Bookmark';
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
  requestAnimationFrame(() => {
    const active = modal.querySelector(`#trilang-${state.lang}`);
    if (active) active.scrollIntoView({ behavior:'instant', block:'start' });
  });
}

function closeModal() {
  document.getElementById('mantra-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════
   PAGE NAVIGATION
══════════════════════════════════════ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + pageId);
  if (pg) pg.classList.add('active');
  document.querySelectorAll('#main-nav a').forEach(a => a.classList.toggle('active', a.dataset.page === pageId));
  state.activePage = pageId;
  window.scrollTo(0, 0);
  if (pageId === 'favorites') renderFavoritesPage();
  if (pageId === 'bookmarks') renderBookmarksPage();
}

function renderFavoritesPage() {
  renderGrid('favorites-grid', MANTRAS.filter(m => state.favorites.includes(m.id)));
}
function renderBookmarksPage() {
  renderGrid('bookmarks-grid', MANTRAS.filter(m => state.bookmarks.includes(m.id)));
}

/* ══════════════════════════════════════
   LANGUAGE SWITCHING
══════════════════════════════════════ */
function setLang(l) {
  state.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  refreshAll();
}
function refreshAll() {
  renderHomePage();
  SECTIONS.forEach(sec => renderSectionPage(sec.id));
  if (state.activePage === 'favorites') renderFavoritesPage();
  if (state.activePage === 'bookmarks') renderBookmarksPage();
}

/* ══════════════════════════════════════
   SEARCH
══════════════════════════════════════ */
function doSearch(q) {
  if (!q.trim()) return;
  renderGrid('search-results-grid', searchMantras(q));
  document.getElementById('search-results-section').style.display = 'block';
}

/* ══════════════════════════════════════
   TODAY
══════════════════════════════════════ */
function getTodayEntry() {
  const doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  const full = MANTRAS.filter(m => !isStub(m));
  return full[doy % full.length] || MANTRAS[0];
}

/* ══════════════════════════════════════
   HOME PAGE
══════════════════════════════════════ */
function renderHomePage() {
  /* Today strip */
  const today = getTodayEntry();
  const prevEl = document.getElementById('today-mantra-preview');
  if (prevEl) {
    document.getElementById('today-title').textContent = t(today, 'title');
    prevEl.textContent = (t(today, 'text') || '').split('\n').slice(0,2).join(' ');
    document.getElementById('today-btn').onclick = () => openModal(today);
  }

  /* Section overview cards */
  const grid = document.getElementById('sections-overview-grid');
  if (grid) {
    grid.innerHTML = '';
    SECTIONS.forEach(sec => {
      const total    = sec.stubs.length;
      const filled   = sec.stubs.filter(s => {
        const m = MANTRAS.find(x => x.id === s.id);
        return m && !isStub(m);
      }).length;
      const card = document.createElement('div');
      card.className = 'section-overview-card';
      card.innerHTML = `
        <div class="soc-icon">${sec.icon}</div>
        <div class="soc-label">${sec.label}</div>
        <div class="soc-count">${total} entries · <span style="color:${filled===total?'var(--green)':'var(--saffron)'}">${filled} filled</span></div>
      `;
      card.addEventListener('click', () => showPage(sec.id));
      grid.appendChild(card);
    });
  }

  /* Morning list */
  _populatePrayerList('morning-list', getMorning().filter(m => !isStub(m)));
  /* Evening list */
  _populatePrayerList('evening-list', getEvening().filter(m => !isStub(m)));
  /* Featured */
  renderGrid('featured-grid', getFeatured());
}

function _populatePrayerList(listId, entries) {
  const ul = document.getElementById(listId);
  if (!ul) return;
  ul.innerHTML = '';
  entries.forEach(e => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="prayer-name">${tField(e, state.lang, 'title')}</span><span class="prayer-arrow">›</span>`;
    li.addEventListener('click', () => openModal(e));
    ul.appendChild(li);
  });
}

/* ══════════════════════════════════════
   SECTION PAGES (dynamic)
══════════════════════════════════════ */
function renderSectionPage(sectionId) {
  const container = document.getElementById(`section-page-${sectionId}`);
  if (!container) return;
  const entries = getBySection(sectionId);
  const sec = SECTIONS.find(s => s.id === sectionId);
  if (!sec) return;

  const stub_count  = entries.filter(isStub).length;
  const filled_count= entries.length - stub_count;

  container.innerHTML = '';

  /* Progress bar */
  const pct = entries.length > 0 ? Math.round(filled_count / entries.length * 100) : 0;
  const prog = document.createElement('div');
  prog.className = 'section-progress';
  prog.innerHTML = `
    <div class="section-progress-bar">
      <div class="section-progress-fill" style="width:${pct}%"></div>
    </div>
    <div class="section-progress-label">${filled_count} of ${entries.length} entries have full content (${pct}%)</div>
  `;
  container.appendChild(prog);

  /* Cards */
  const grid = document.createElement('div');
  grid.className = 'card-grid';
  entries.forEach(e => grid.appendChild(buildCard(e)));
  container.appendChild(grid);
}

/* ══════════════════════════════════════
   BUILD SECTION PAGES IN DOM
══════════════════════════════════════ */
function buildSectionPages() {
  const main = document.getElementById('dynamic-section-pages');
  if (!main) return;
  main.innerHTML = '';
  SECTIONS.forEach(sec => {
    const page = document.createElement('section');
    page.id = `page-${sec.id}`;
    page.className = 'page';
    page.innerHTML = `
      <div class="section-title">
        <span class="section-icon">${sec.icon}</span>
        <h2>${sec.label}</h2>
      </div>
      <div id="section-page-${sec.id}"></div>
    `;
    main.appendChild(page);
  });
}

/* ══════════════════════════════════════
   INIT
══════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Language bar */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });

  /* Build 20 section <section> elements */
  buildSectionPages();

  /* Build nav links for all 20 sections */
  const navEl = document.getElementById('sections-nav-group');
  if (navEl) {
    SECTIONS.forEach(sec => {
      const a = document.createElement('a');
      a.href = '#';
      a.dataset.page = sec.id;
      a.textContent = `${sec.icon} ${sec.label}`;
      navEl.appendChild(a);
    });
  }

  /* Nav clicks — home + static + dynamic section pages */
  document.getElementById('main-nav').addEventListener('click', e => {
    const a = e.target.closest('a[data-page]');
    if (!a) return;
    e.preventDefault();
    showPage(a.dataset.page);
  });

  /* Modal backdrop */
  document.getElementById('mantra-modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Search */
  const si = document.getElementById('search-input');
  const sb = document.getElementById('search-btn');
  if (si) {
    sb.addEventListener('click',  () => doSearch(si.value));
    si.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(si.value); });
    si.addEventListener('input',   () => {
      if (!si.value.trim()) document.getElementById('search-results-section').style.display = 'none';
    });
  }

  /* Render home + all sections */
  renderHomePage();
  SECTIONS.forEach(sec => renderSectionPage(sec.id));

  showPage('home');
});
