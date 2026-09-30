/**
 * Mantra Dhara — App Logic
 */

/* ── State ── */
const state = {
  lang: 'hindi',
  favorites: JSON.parse(localStorage.getItem('md_favorites') || '[]'),
  bookmarks: JSON.parse(localStorage.getItem('md_bookmarks') || '[]'),
  activePage: 'home'
};

/* ── Language helpers ── */
function t(entry, key) {
  if (!entry) return '';
  const l = state.lang;
  if (key === 'title') return entry[l]?.title || entry.hindi?.title || entry.english?.title || '';
  if (key === 'text')  return entry[l]?.text  || entry.hindi?.text  || entry.english?.text  || '';
  return '';
}

function tMeaning(entry) {
  const l = state.lang;
  return entry.meaning?.[l] || entry.meaning?.english || entry.meaning?.hindi || '';
}

/* ── Persist state ── */
function saveFavorites() {
  localStorage.setItem('md_favorites', JSON.stringify(state.favorites));
}
function saveBookmarks() {
  localStorage.setItem('md_bookmarks', JSON.stringify(state.bookmarks));
}

/* ── Toast ── */
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

/* ── Copy text ── */
function copyText(text) {
  navigator.clipboard.writeText(text).then(() => {
    showToast('📋 Copied to clipboard!');
  }).catch(() => {
    showToast('Could not copy — please select manually.');
  });
}

/* ── Favorite toggle ── */
function toggleFavorite(id, btn) {
  const idx = state.favorites.indexOf(id);
  if (idx === -1) {
    state.favorites.push(id);
    btn.classList.add('favorited');
    btn.title = 'Remove from favorites';
    showToast('❤️ Added to favorites');
  } else {
    state.favorites.splice(idx, 1);
    btn.classList.remove('favorited');
    btn.title = 'Add to favorites';
    showToast('Removed from favorites');
  }
  saveFavorites();
}

/* ── Bookmark toggle ── */
function toggleBookmark(id, btn) {
  const idx = state.bookmarks.indexOf(id);
  if (idx === -1) {
    state.bookmarks.push(id);
    btn.classList.add('bookmarked');
    btn.title = 'Remove bookmark';
    showToast('🔖 Bookmarked!');
  } else {
    state.bookmarks.splice(idx, 1);
    btn.classList.remove('bookmarked');
    btn.title = 'Bookmark';
    showToast('Bookmark removed');
  }
  saveBookmarks();
}

/* ── Build a card ── */
function buildCard(entry) {
  const isFav  = state.favorites.includes(entry.id);
  const isBkmk = state.bookmarks.includes(entry.id);
  const card = document.createElement('article');
  card.className = 'mantra-card';
  card.innerHTML = `
    <div class="card-deity">${entry.deity}</div>
    <div class="card-title">${t(entry, 'title')}</div>
    <div class="card-preview">${t(entry, 'text').replace(/\n/g,'<br>')}</div>
    <div class="card-tags">
      ${entry.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
    </div>
    <div class="card-actions">
      <button class="btn-icon fav-btn ${isFav ? 'favorited':''}" title="${isFav?'Remove from favorites':'Add to favorites'}" onclick="event.stopPropagation();">
        ${isFav ? '❤️' : '🤍'} Fav
      </button>
      <button class="btn-icon bkmk-btn ${isBkmk ? 'bookmarked':''}" title="${isBkmk?'Remove bookmark':'Bookmark'}" onclick="event.stopPropagation();">
        🔖
      </button>
    </div>
  `;
  card.querySelector('.fav-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleFavorite(entry.id, this);
    this.innerHTML = state.favorites.includes(entry.id) ? '❤️ Fav' : '🤍 Fav';
  });
  card.querySelector('.bkmk-btn').addEventListener('click', function(e) {
    e.stopPropagation();
    toggleBookmark(entry.id, this);
  });
  card.addEventListener('click', () => openModal(entry));
  return card;
}

/* ── Render card grid ── */
function renderGrid(containerId, entries) {
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = '';
  if (entries.length === 0) {
    el.innerHTML = '<div class="empty-state"><div class="empty-icon">🙏</div><p>Nothing here yet.</p></div>';
    return;
  }
  entries.forEach(e => el.appendChild(buildCard(e)));
}

/* ── Open modal ── */
function openModal(entry) {
  const overlay = document.getElementById('mantra-modal-overlay');
  const modal   = document.getElementById('mantra-modal');
  const isFav   = state.favorites.includes(entry.id);
  const isBkmk  = state.bookmarks.includes(entry.id);

  modal.innerHTML = `
    <div class="modal-header">
      <div class="deity-label">${entry.category} · ${entry.deity}</div>
      <h2>${t(entry, 'title')}</h2>
      <button class="modal-close" id="modal-close-btn">✕</button>
    </div>
    <div class="modal-body">
      <div class="lang-tabs">
        <button class="lang-tab ${state.lang==='odia'?'active':''}"   data-lang="odia">ଓଡ଼ିଆ</button>
        <button class="lang-tab ${state.lang==='hindi'?'active':''}"  data-lang="hindi">हिन्दी</button>
        <button class="lang-tab ${state.lang==='english'?'active':''}" data-lang="english">English</button>
      </div>
      <div class="mantra-text-block" id="modal-text-block">
        ${buildTextBlock(entry, state.lang)}
      </div>
      <div class="info-grid">
        <div class="info-item"><div class="info-label">Deity</div><div class="info-value">${entry.deity}</div></div>
        <div class="info-item"><div class="info-label">Repetitions</div><div class="info-value">${entry.repetitions}</div></div>
        <div class="info-item"><div class="info-label">When to chant</div><div class="info-value">${entry.timing}</div></div>
        <div class="info-item"><div class="info-label">Category</div><div class="info-value">${entry.subcategory}</div></div>
      </div>
      <div class="meaning-block">
        <h4>Meaning / Artha</h4>
        <p id="modal-meaning">${tMeaning(entry)}</p>
      </div>
      ${entry.benefits ? `<div class="meaning-block" style="margin-top:12px"><h4>Benefits / Phal</h4><p>${entry.benefits}</p></div>` : ''}
      <div class="modal-actions">
        <button class="btn-primary" id="modal-copy-btn">📋 Copy Text</button>
        <button class="btn-secondary fav-btn ${isFav?'favorited':''}" id="modal-fav-btn">
          ${isFav ? '❤️ Favorited' : '🤍 Favorite'}
        </button>
        <button class="btn-secondary bkmk-btn ${isBkmk?'bookmarked':''}" id="modal-bkmk-btn">
          🔖 ${isBkmk ? 'Bookmarked' : 'Bookmark'}
        </button>
      </div>
    </div>
  `;

  /* lang tab switching inside modal */
  modal.querySelectorAll('.lang-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      modal.querySelectorAll('.lang-tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const l = tab.dataset.lang;
      document.getElementById('modal-text-block').innerHTML = buildTextBlock(entry, l);
      document.getElementById('modal-meaning').textContent = entry.meaning?.[l] || entry.meaning?.english || '';
    });
  });

  modal.querySelector('#modal-close-btn').addEventListener('click', closeModal);
  modal.querySelector('#modal-copy-btn').addEventListener('click', () => {
    copyText(t(entry, 'text'));
  });
  modal.querySelector('#modal-fav-btn').addEventListener('click', function() {
    toggleFavorite(entry.id, this);
    this.innerHTML = state.favorites.includes(entry.id) ? '❤️ Favorited' : '🤍 Favorite';
  });
  modal.querySelector('#modal-bkmk-btn').addEventListener('click', function() {
    toggleBookmark(entry.id, this);
    this.innerHTML = state.bookmarks.includes(entry.id) ? '🔖 Bookmarked' : '🔖 Bookmark';
  });

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function buildTextBlock(entry, lang) {
  const langClass = lang === 'odia' ? 'odia' : lang === 'english' ? 'english' : '';
  const raw = entry[lang]?.text || entry.hindi?.text || '';
  return `<div class="mantra-script ${langClass}">${raw.replace(/\n/g,'<br>')}</div>`;
}

function closeModal() {
  document.getElementById('mantra-modal-overlay').classList.remove('open');
  document.body.style.overflow = '';
}

/* ── Page navigation ── */
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

/* ── Render favorites/bookmarks ── */
function renderFavoritesPage() {
  const entries = MANTRAS.filter(m => state.favorites.includes(m.id));
  renderGrid('favorites-grid', entries);
}
function renderBookmarksPage() {
  const entries = MANTRAS.filter(m => state.bookmarks.includes(m.id));
  renderGrid('bookmarks-grid', entries);
}

/* ── Language switching ── */
function setLang(l) {
  state.lang = l;
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === l);
  });
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

/* ── Search ── */
function doSearch(q) {
  if (!q.trim()) return;
  const results = searchMantras(q);
  renderGrid('search-results-grid', results);
  document.getElementById('search-results-section').style.display = 'block';
}

/* ── Today's recommendation (rotate by day of year) ── */
function getTodayEntry() {
  const dayOfYear = Math.floor((Date.now() - new Date(new Date().getFullYear(), 0, 0)) / 86400000);
  return MANTRAS[dayOfYear % MANTRAS.length];
}

/* ── Home page ── */
function renderHomePage() {
  const today = getTodayEntry();
  const todayEl = document.getElementById('today-mantra-preview');
  if (todayEl) {
    document.getElementById('today-title').textContent = t(today, 'title');
    const preview = t(today, 'text').split('\n').slice(0,2).join(' ');
    todayEl.textContent = preview;
    document.getElementById('today-btn').onclick = () => openModal(today);
  }

  /* Morning prayers */
  renderGrid('morning-grid', getMorning());

  /* Evening prayers */
  renderGrid('evening-grid', getEvening());

  /* Featured */
  renderGrid('featured-grid', getFeatured());
}

/* ── Section pages ── */
function renderSection(section) {
  const all = getBySection(section);
  /* Group by subcategory */
  const subs = {};
  all.forEach(e => {
    if (!subs[e.subcategory]) subs[e.subcategory] = [];
    subs[e.subcategory].push(e);
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

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {

  /* Language bar */
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
  });
  /* Set default active */
  document.querySelectorAll('.lang-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.lang === state.lang);
  });

  /* Nav links */
  document.querySelectorAll('#main-nav a[data-page]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      showPage(a.dataset.page);
    });
  });

  /* Modal overlay close on backdrop click */
  document.getElementById('mantra-modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) closeModal();
  });

  /* Escape key closes modal */
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* Search */
  const searchInput = document.getElementById('search-input');
  const searchBtn   = document.getElementById('search-btn');
  if (searchInput) {
    searchBtn.addEventListener('click', () => doSearch(searchInput.value));
    searchInput.addEventListener('keydown', e => {
      if (e.key === 'Enter') doSearch(searchInput.value);
    });
    searchInput.addEventListener('input', () => {
      if (!searchInput.value.trim()) {
        document.getElementById('search-results-section').style.display = 'none';
      }
    });
  }

  /* Render all */
  renderHomePage();
  renderSection('mantras');
  renderSection('slokas');
  renderSection('sadhana');
  renderSection('special');

  showPage('home');
});
