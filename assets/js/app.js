/**
 * Mantra Dhara — App Logic
 */

/* ── State ── */
const state = {
  lang: 'hindi',
  favorites:  JSON.parse(localStorage.getItem('md_favorites')  || '[]'),
  bookmarks:  JSON.parse(localStorage.getItem('md_bookmarks')  || '[]'),
  activePage: 'home'
};

/* ── Language label map ── */
const LANG_LABEL = { odia: 'ଓଡ଼ିଆ', hindi: 'हिन्दी', english: 'English' };
const LANG_ORDER = ['odia', 'hindi', 'english'];

/* ── Language helpers ── */
function tField(entry, lang, key) {
  return entry[lang]?.[key] || entry.hindi?.[key] || entry.english?.[key] || '';
}
/* Active-language accessors used for card titles/previews */
function t(entry, key) {
  return tField(entry, state.lang, key);
}
function tMeaning(entry, lang) {
  const l = lang || state.lang;
  return entry.meaning?.[l] || entry.meaning?.english || entry.meaning?.hindi || '';
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
    .then(() => showToast('📋 Copied to clipboard!'))
    .catch(() => showToast('Could not copy — please select manually.'));
}

/* ── Favorite / Bookmark ── */
function toggleFavorite(id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    btn.classList.add('favorited');
    showToast('❤️ Added to favorites');
  } else {
    state.favorites.splice(idx, 1);
    btn.classList.remove('favorited');
    showToast('Removed from favorites');
  }
  saveFavorites();
  _syncFavLabel(btn, state.favorites.includes(id));
}
function toggleBookmark(id, btn) {
  const idx = state.bookmarks.indexOf(id);
  if (idx === -1) {
    state.bookmarks.push(id);
    btn.classList.add('bookmarked');
    showToast('🔖 Bookmarked!');
  } else {
    state.bookmarks.splice(idx, 1);
    btn.classList.remove('bookmarked');
    showToast('Bookmark removed');
  }
  saveBookmarks();
  _syncBkmkLabel(btn, state.bookmarks.includes(id));
}
function _syncFavLabel(btn, on)  { btn.innerHTML = on ? '❤️ Fav' : '🤍 Fav'; }
function _syncBkmkLabel(btn, on) { btn.textContent = on ? '🔖 ✓' : '🔖'; }

/* ══════════════════════════════════════════════════
   CARD
══════════════════════════════════════════════════ */
function buildCard(entry) {
  const isFav  = state.favorites.includes(entry.id);
  const isBkmk = state.bookmarks.includes(entry.id);

  /* Primary title in active language; secondary titles in the other two */
  const primaryTitle = t(entry, 'title');
  const otherTitles = LANG_ORDER
    .filter(l => l !== state.lang)
    .map(l => `<span class="card-alt-title" lang="${l}">${tField(entry, l, 'title')}</span>`)
    .join('');

  /* Preview: first line in active language */
  const preview = t(entry, 'text').split('\n')[0];

  const card = document.createElement('article');
  card.className = 'mantra-card';
  card.innerHTML = `
    <div class="card-deity">${entry.deity}</div>
    <div class="card-title">${primaryTitle}</div>
    ${otherTitles ? `<div class="card-alt-titles">${otherTitles}</div>` : ''}
    <div class="card-preview">${preview}</div>
    <div class="card-tags">
      ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="card-actions">
      <button class="btn-icon fav-btn ${isFav ? 'favorited':''}" title="${isFav?'Remove from favorites':'Add to favorites'}">
        ${isFav ? '❤️' : '🤍'} Fav
      </button>
      <button class="btn-icon bkmk-btn ${isBkmk ? 'bookmarked':''}" title="${isBkmk?'Remove bookmark':'Bookmark'}">
        ${isBkmk ? '🔖 ✓' : '🔖'}
      </button>
    </div>
  `;
  card.querySelector('.fav-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleFavorite(entry.id, this);
  });
  card.querySelector('.bkmk-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleBookmark(entry.id, this);
  });
  card.addEventListener('click', () => openModal(entry));
  return card;
}

/* ── Render a card grid ── */
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

/* ══════════════════════════════════════════════════
   MODAL — trilingual stacked view
══════════════════════════════════════════════════ */
function openModal(entry) {
  const overlay = document.getElementById('mantra-modal-overlay');
  const modal   = document.getElementById('mantra-modal');
  const isFav   = state.favorites.includes(entry.id);
  const isBkmk  = state.bookmarks.includes(entry.id);

  /* Build the three language blocks, always all three */
  const langBlocks = LANG_ORDER.map(lang => {
    const text  = tField(entry, lang, 'text');
    const title = tField(entry, lang, 'title');
    const meaning = tMeaning(entry, lang);
    const scriptClass = lang === 'odia' ? 'odia' : lang === 'english' ? 'english' : '';
    return `
      <div class="trilang-block" id="trilang-${lang}" data-lang="${lang}">
        <div class="trilang-header">
          <span class="trilang-flag">${lang === 'odia' ? '🕉️' : lang === 'hindi' ? '🇮🇳' : '🇬🇧'}</span>
          <span class="trilang-lang-label">${LANG_LABEL[lang]}</span>
          <span class="trilang-title">${title}</span>
          <button class="btn-icon trilang-copy" data-lang="${lang}" title="Copy ${LANG_LABEL[lang]} text" style="margin-left:auto">📋</button>
        </div>
        <div class="mantra-script ${scriptClass}">${text.replace(/\n/g, '<br>')}</div>
        ${meaning ? `<div class="trilang-meaning">${meaning}</div>` : ''}
      </div>
    `;
  }).join('<div class="trilang-divider"></div>');

  modal.innerHTML = `
    <div class="modal-header">
      <div class="deity-label">${entry.category} · ${entry.deity}</div>
      <h2>${t(entry, 'title')}</h2>
      <button class="modal-close" id="modal-close-btn">✕</button>
    </div>
    <div class="modal-body">

      <!-- Jump anchors -->
      <div class="trilang-jump-bar">
        <span style="font-size:12px;color:var(--text-muted);font-family:var(--font-ui);margin-right:8px;">Jump to:</span>
        <button class="trilang-jump-btn" data-target="trilang-odia">🕉️ ଓଡ଼ିଆ</button>
        <button class="trilang-jump-btn" data-target="trilang-hindi">🇮🇳 हिन्दी</button>
        <button class="trilang-jump-btn" data-target="trilang-english">🇬🇧 English</button>
      </div>

      <!-- All three language versions stacked -->
      <div class="trilang-stack">
        ${langBlocks}
      </div>

      <!-- Metadata -->
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Deity</div><div class="info-value">${entry.deity}</div></div>
        <div class="info-item"><div class="info-label">Repetitions</div><div class="info-value">${entry.repetitions}</div></div>
        <div class="info-item"><div class="info-label">When to chant</div><div class="info-value">${entry.timing}</div></div>
        <div class="info-item"><div class="info-label">Category</div><div class="info-value">${entry.subcategory}</div></div>
      </div>

      ${entry.benefits ? `<div class="meaning-block"><h4>Benefits / Phal</h4><p>${entry.benefits}</p></div>` : ''}

      <div class="modal-actions">
        <button class="btn-primary" id="modal-copy-all-btn">📋 Copy All Versions</button>
        <button class="btn-secondary fav-btn ${isFav?'favorited':''}" id="modal-fav-btn">
          ${isFav ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
        <button class="btn-secondary bkmk-btn ${isBkmk?'bookmarked':''}" id="modal-bkmk-btn">
          🔖 ${isBkmk ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>
  `;

  /* Jump-to buttons scroll within modal */
  modal.querySelectorAll('.trilang-jump-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const target = modal.querySelector('#' + btn.dataset.target);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  });

  /* Per-language copy buttons */
  modal.querySelectorAll('.trilang-copy').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const lang = btn.dataset.lang;
      copyText(tField(entry, lang, 'text'));
    });
  });

  /* Copy all */
  modal.querySelector('#modal-copy-all-btn').addEventListener('click', () => {
    const all = LANG_ORDER.map(l =>
      `${LANG_LABEL[l]}\n${tField(entry, l, 'title')}\n${tField(entry, l, 'text')}`
    ).join('\n\n---\n\n');
    copyText(all);
  });

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

  /* Auto-scroll modal to the active language block */
  requestAnimationFrame(() => {
    const active = modal.querySelector(`#trilang-${state.lang}`);
    if (active) active.scrollIntoView({ behavior: 'instant', block: 'start' });
  });
}

function closeModal() {
  document.getElementById('mantra-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ══════════════════════════════════════════════════
   PAGE NAVIGATION
══════════════════════════════════════════════════ */
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const page = document.getElementById('page-' + pageId);
  if (page) page.classList.add('active');
  document.querySelectorAll('#main-nav a').forEach(a => {
    a.classList.toggle('active', a.dataset.page === pageId);
  });
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

/* ══════════════════════════════════════════════════
   LANGUAGE SWITCHING
   Controls card title/preview language; modal always shows all 3.
══════════════════════════════════════════════════ */
function setLang(l) {
  state.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  refreshAllGrids();
}

function refreshAllGrids() {
  renderHomePage();
  renderSection('mantras');
  renderSection('slokas');
  renderSection('sadhana');
  renderSection('special');
  if (state.activePage === 'favorites') renderFavoritesPage();
  if (state.activePage === 'bookmarks') renderBookmarksPage();
}

/* ══════════════════════════════════════════════════
   SEARCH
══════════════════════════════════════════════════ */
function doSearch(q) {
  if (!q.trim()) return;
  renderGrid('search-results-grid', searchMantras(q));
  document.getElementById('search-results-section').style.display = 'block';
}

/* ══════════════════════════════════════════════════
   TODAY'S RECOMMENDATION
══════════════════════════════════════════════════ */
function getTodayEntry() {
  const doy = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return MANTRAS[doy % MANTRAS.length];
}

/* ══════════════════════════════════════════════════
   HOME PAGE
══════════════════════════════════════════════════ */
function renderHomePage() {
  const today = getTodayEntry();
  const previewEl = document.getElementById('today-mantra-preview');
  if (previewEl) {
    document.getElementById('today-title').textContent     = t(today, 'title');
    previewEl.textContent = t(today, 'text').split('\n').slice(0, 2).join(' ');
    document.getElementById('today-btn').onclick = () => openModal(today);
  }
  renderGrid('morning-grid',  getMorning());
  renderGrid('evening-grid',  getEvening());
  renderGrid('featured-grid', getFeatured());
  _populatePrayerList('morning-list', getMorning());
  _populatePrayerList('evening-list', getEvening());
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

/* ══════════════════════════════════════════════════
   SECTION PAGES
══════════════════════════════════════════════════ */
function renderSection(section) {
  const all = getBySection(section);
  const subs = {};
  all.forEach(e => {
    (subs[e.subcategory] = subs[e.subcategory] || []).push(e);
  });
  const container = document.getElementById(`section-${section}`);
  if (!container) return;
  container.innerHTML = '';
  Object.entries(subs).forEach(([sub, entries]) => {
    const wrap = document.createElement('div');
    wrap.className = 'subsection';
    wrap.innerHTML = `<div class="subsection-title">${sub}</div>`;
    const grid = document.createElement('div');
    grid.className = 'card-grid';
    entries.forEach(e => grid.appendChild(buildCard(e)));
    wrap.appendChild(grid);
    container.appendChild(wrap);
  });
}

/* ══════════════════════════════════════════════════
   INIT
══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {

  /* Language bar */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
    btn.classList.toggle('active', btn.dataset.lang === state.lang);
  });

  /* Nav links */
  document.querySelectorAll('#main-nav a[data-page]').forEach(a => {
    a.addEventListener('click', e => { e.preventDefault(); showPage(a.dataset.page); });
  });

  /* Modal backdrop close */
  document.getElementById('mantra-modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  /* Escape key */
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Search */
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');
  if (searchInput) {
    searchBtn.addEventListener('click',  () => doSearch(searchInput.value));
    searchInput.addEventListener('keydown', e => { if (e.key === 'Enter') doSearch(searchInput.value); });
    searchInput.addEventListener('input',   () => {
      if (!searchInput.value.trim())
        document.getElementById('search-results-section').style.display = 'none';
    });
  }

  renderHomePage();
  renderSection('mantras');
  renderSection('slokas');
  renderSection('sadhana');
  renderSection('special');
  showPage('home');
});
