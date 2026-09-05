/* ============================================================
   ECE4710/5710 Course Web App — Application Logic
   ============================================================ */

// ─── Course Data ─────────────────────────────────────────────
const BASE_URL = 'http://mocha-java.uccs.edu/ECE5710/';

const COURSE = {
  title: 'ECE4710/5710: Modeling, Simulation, and Identification of Battery Dynamics',
  chapters: [
    {
      id: 0,
      title: 'Course Introduction and Syllabus',
      pdf: 'ECE5710-Notes00.pdf',
      videos: [
        { id: '0', title: 'Course introduction and syllabus', file: 'ECE5710 Topic 0.mov' }
      ]
    },
    {
      id: 1,
      title: 'Battery Boot Camp',
      pdf: 'ECE5710-Notes01.pdf',
      videos: [
        { id: '1.1', title: 'Introduction to the course', file: 'ECE5710 Topic 1.1.mov' },
        { id: '1.2', title: 'How electrochemical cells work', file: 'ECE5710 Topic 1.2.mov' },
        { id: '1.3', title: 'Choice of active chemicals', file: 'ECE5710 Topic 1.3.mov' },
        { id: '1.4', title: 'Lithium-ion preview', file: 'ECE5710 Topic 1.4.mov' },
        { id: '1.5', title: 'Lithium-ion cell makeup', file: 'ECE5710 Topic 1.5.mov' },
        { id: '1.6', title: 'Availability of lithium', file: 'ECE5710 Topic 1.6.mov' },
        { id: '1.7', title: 'Manufacturing (1): Making the electrodes', file: 'ECE5710 Topic 1.7.mov' },
        { id: '1.8', title: 'Manufacturing (2): Assembling the cell', file: 'ECE5710 Topic 1.8.mov' },
        { id: '1.9', title: 'Failure modes', file: 'ECE5710 Topic 1.9.mov' }
      ]
    },
    {
      id: 2,
      title: 'Equivalent-Circuit Cell Models',
      pdf: 'ECE5710-Notes02.pdf',
      videos: [
        { id: '2.1', title: 'Open-circuit voltage and state of charge', file: 'ECE5710 Topic 2.1.mov' },
        { id: '2.2', title: 'Linear polarization', file: 'ECE5710 Topic 2.2.mov' },
        { id: '2.3', title: 'Converting to discrete time', file: 'ECE5710 Topic 2.3.mov' },
        { id: '2.4', title: 'Hysteresis voltages', file: 'ECE5710 Topic 2.4.mov' },
        { id: '2.5', title: 'The ESC cell model; OCV testing', file: 'ECE5710 Topic 2.5.mov' },
        { id: '2.6', title: 'Determining coulombic efficiency', file: 'ECE5710 Topic 2.6.mov' },
        { id: '2.7', title: 'Determining temperature-dependent OCV', file: 'ECE5710 Topic 2.7.mov' },
        { id: '2.8', title: 'Cell testing to determine the dynamic relationship', file: 'ECE5710 Topic 2.8.mov' },
        { id: '2.9', title: 'MATLAB code to create and simulate models', file: 'ECE5710 Topic 2.9.mov' },
        { id: '2.10', title: 'Example results', file: 'ECE5710 Topic 2.10.mov' }
      ]
    },
    {
      id: 3,
      title: 'Microscale Cell Models',
      pdf: 'ECE5710-Notes03.pdf',
      videos: [
        { id: '3.1', title: 'Chapter goals', file: 'ECE5710 Topic 3.1.mov' },
        { id: '3.2', title: 'Charge conservation in solid', file: 'ECE5710 Topic 3.2.mov' },
        { id: '3.3', title: 'Mass conservation in solid', file: 'ECE5710 Topic 3.3.mov' },
        { id: '3.4', title: 'Energy and thermodynamic potentials', file: 'ECE5710 Topic 3.4.mov' },
        { id: '3.5', title: 'Two laws of thermodynamics; direction of reaction', file: 'ECE5710 Topic 3.5.mov' },
        { id: '3.6', title: 'Electrochemical potential; Gibbs-Duhem equation', file: 'ECE5710 Topic 3.6.mov' },
        { id: '3.7', title: 'Relative and absolute activity', file: 'ECE5710 Topic 3.7.mov' },
        { id: '3.8', title: 'Basic characteristics of binary electrolytes', file: 'ECE5710 Topic 3.8.mov' },
        { id: '3.9', title: 'Electrolyte mass balance equation (step 1a)', file: 'ECE5710 Topic 3.9.mov' },
        { id: '3.10', title: 'Electrolyte mass balance equation (steps 1b-2)', file: 'ECE5710 Topic 3.10.mov' },
        { id: '3.11', title: 'Electrolyte mass balance equation (step 3)', file: 'ECE5710 Topic 3.11.mov' },
        { id: '3.12', title: 'Electrolyte mass balance equation (step 4)', file: 'ECE5710 Topic 3.12.mov' },
        { id: '3.13', title: 'Electrolyte charge balance equation: Electrolyte current', file: 'ECE5710 Topic 3.13.mov' },
        { id: '3.14', title: 'Electrolyte charge balance equation final form', file: 'ECE5710 Topic 3.14.mov' },
        { id: '3.15', title: 'Butler-Volmer equation: preliminaries', file: 'ECE5710 Topic 3.15.mov' },
        { id: '3.16', title: 'Butler-Volmer equation: derivation', file: 'ECE5710 Topic 3.16.mov' },
        { id: '3.17', title: 'Butler-Volmer equation: exchange-current density', file: 'ECE5710 Topic 3.17.mov' },
        { id: '3.18', title: 'Boundary conditions', file: 'ECE5710 Topic 3.18.mov' },
        { id: '3.19', title: 'Cell-level quantities', file: 'ECE5710 Topic 3.19.mov' },
        { id: '3.20', title: 'Single-particle model', file: 'ECE5710 Topic 3.20.mov' }
      ]
    },
    {
      id: 4,
      title: 'Continuum (Porous-Electrode) Cell Models',
      pdf: 'ECE5710-Notes04.pdf',
      videos: [
        { id: '4.1', title: 'Chapter goals', file: 'ECE5710 Topic 4.1.mov' },
        { id: '4.2', title: 'Indicator and Dirac delta functions', file: 'ECE5710 Topic 4.2.mov' },
        { id: '4.3', title: 'Gradient of an indicator function', file: 'ECE5710 Topic 4.3.mov' },
        { id: '4.4', title: 'Phase and intrinsic averages', file: 'ECE5710 Topic 4.4.mov' },
        { id: '4.5', title: 'Volume-averaging theorems 1 and 2', file: 'ECE5710 Topic 4.5.mov' },
        { id: '4.6', title: 'Volume-averaging theorem 3', file: 'ECE5710 Topic 4.6.mov' },
        { id: '4.7', title: 'Continuum models: Charge conservation in the solid', file: 'ECE5710 Topic 4.7.mov' },
        { id: '4.8', title: 'Mass conservation in the solid and electrolyte', file: 'ECE5710 Topic 4.8.mov' },
        { id: '4.9', title: 'Charge conservation in electrolyte', file: 'ECE5710 Topic 4.9.mov' },
        { id: '4.10', title: 'Cell-level quantities; PDE simulation methods', file: 'ECE5710 Topic 4.10.mov' },
        { id: '4.11', title: 'Implementation in COMSOL', file: 'ECE5710 Topic 4.11.mov' },
        { id: '4.12', title: 'COMSOL demonstration', file: 'ECE5710 Topic 4.12.mov' }
      ]
    },
    {
      id: 5,
      title: 'State-Space Models and the Discrete-Time Realization Algorithm',
      pdf: 'ECE5710-Notes05.pdf',
      videos: [
        { id: '5.1', title: 'Introduction to state-space models', file: 'ECE5710 Topic 5.1.mov' },
        { id: '5.2', title: 'Working with state-space systems', file: 'ECE5710 Topic 5.2.mov' },
        { id: '5.3', title: 'Discrete-time Markov parameters', file: 'ECE5710 Topic 5.3.mov' },
        { id: '5.4', title: 'Equations describing solid dynamics', file: 'ECE5710 Topic 5.4.mov' },
        { id: '5.5', title: 'Removing the integrator pole', file: 'ECE5710 Topic 5.5.mov' },
        { id: '5.6', title: 'State-space realization problem: Ho-Kalman method', file: 'ECE5710 Topic 5.6.mov' },
        { id: '5.7', title: 'Singular-value decomposition', file: 'ECE5710 Topic 5.7.mov' },
        { id: '5.8', title: 'Back to Ho-Kalman', file: 'ECE5710 Topic 5.8.mov' },
        { id: '5.9', title: 'Ho-Kalman summary and example', file: 'ECE5710 Topic 5.9.mov' },
        { id: '5.10', title: 'Discrete-time realization algorithm (DRA)', file: 'ECE5710 Topic 5.10.mov' },
        { id: '5.11', title: 'Example 1: Rational-polynomial transfer function', file: 'ECE5710 Topic 5.11.mov' },
        { id: '5.12', title: 'Example 2: Dealing with a pole in H(s) at the origin', file: 'ECE5710 Topic 5.12.mov' },
        { id: '5.13', title: 'Example 3: Transcendental transfer function', file: 'ECE5710 Topic 5.13.mov' }
      ]
    },
    {
      id: 6,
      title: 'Reduced-Order Models of Cell Dynamics',
      pdf: 'ECE5710-Notes06.pdf',
      videos: [
        { id: '6.1', title: 'Approach and first steps', file: 'ECE5710 Topic 6.1.mov' },
        { id: '6.2', title: 'Next steps, leading to impedance ratio', file: 'ECE5710 Topic 6.2.mov' },
        { id: '6.3', title: 'Negative-electrode transfer functions', file: 'ECE5710 Topic 6.3.mov' },
        { id: '6.4', title: 'Positive-electrode transfer functions', file: 'ECE5710 Topic 6.4.mov' },
        { id: '6.5', title: 'A one-dimensional model of c_e(x,t): first steps', file: 'ECE5710 Topic 6.5.mov' },
        { id: '6.6', title: 'Solution to the homogeneous PDE', file: 'ECE5710 Topic 6.6.mov' },
        { id: '6.7', title: 'Solution to the forced PDE', file: 'ECE5710 Topic 6.7.mov' },
        { id: '6.8', title: 'A one-dimensional model of phi_e(x,t)', file: 'ECE5710 Topic 6.8.mov' },
        { id: '6.9', title: 'Summary of transfer functions', file: 'ECE5710 Topic 6.9.mov' },
        { id: '6.10', title: 'Cell voltage', file: 'ECE5710 Topic 6.10.mov' },
        { id: '6.11', title: 'Full cell model', file: 'ECE5710 Topic 6.11.mov' },
        { id: '6.12', title: 'Model blending', file: 'ECE5710 Topic 6.12.mov' }
      ]
    },
    {
      id: 7,
      title: 'Thermal Modeling',
      pdf: 'ECE5710-Notes07.pdf',
      videos: [
        { id: '7.1', title: 'Introduction and preliminary definitions', file: 'ECE5710 Topic 7.1.mov' },
        { id: '7.2', title: 'Microscale thermal model', file: 'ECE5710 Topic 7.2.mov' },
        { id: '7.3', title: 'Continuum thermal model', file: 'ECE5710 Topic 7.3.mov' },
        { id: '7.4', title: 'Reduced-order model: transfer functions', file: 'ECE5710 Topic 7.4.mov' },
        { id: '7.5', title: 'ROM heat-generation terms q_r and q_i', file: 'ECE5710 Topic 7.5.mov' },
        { id: '7.6', title: 'ROM heat-generation terms q_s and q_e', file: 'ECE5710 Topic 7.6.mov' },
        { id: '7.7', title: 'Heat-flux terms', file: 'ECE5710 Topic 7.7.mov' }
      ]
    }
  ]
};

// ─── State ───────────────────────────────────────────────────
const state = {
  currentView: 'welcome', // 'welcome' | 'pdf' | 'video' | 'bookmarks'
  currentChapter: null,
  currentVideoId: null,
  currentPdfChapter: null,
  searchQuery: '',
  filter: 'all', // 'all' | 'unwatched' | 'bookmarked'
  sidebarOpen: window.innerWidth > 768,
  openChapters: new Set(),
  watched: new Set(JSON.parse(localStorage.getItem('ece5710_watched') || '[]')),
  bookmarks: new Set(JSON.parse(localStorage.getItem('ece5710_bookmarks') || '[]')),
  theme: localStorage.getItem('ece5710_theme') || 'light'
};

// ─── DOM refs ────────────────────────────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

const dom = {
  sidebar: $('#sidebar'),
  sidebarToggle: $('#sidebar-toggle'),
  sidebarOverlay: $('#sidebar-overlay'),
  chapterNav: $('#chapter-nav'),
  sidebarStats: $('#sidebar-stats'),
  searchInput: $('#search-input'),
  searchClear: $('#search-clear'),
  mainContent: $('#main-content'),
  welcomeView: $('#welcome-view'),
  pdfView: $('#pdf-view'),
  pdfTitle: $('#pdf-title'),
  pdfFrame: $('#pdf-frame'),
  pdfBookmarkBtn: $('#pdf-bookmark-btn'),
  pdfDownloadLink: $('#pdf-download-link'),
  videoView: $('#video-view'),
  videoTitle: $('#video-title'),
  videoElement: $('#video-element'),
  videoWatchedBtn: $('#video-watched-btn'),
  videoBookmarkBtn: $('#video-bookmark-btn'),
  videoDownloadLink: $('#video-download-link'),
  prevVideo: $('#prev-video'),
  nextVideo: $('#next-video'),
  bookmarksView: $('#bookmarks-view'),
  bookmarksList: $('#bookmarks-list'),
  bookmarksToggle: $('#bookmarks-toggle'),
  bookmarkCount: $('#bookmark-count'),
  themeToggle: $('#theme-toggle'),
  themeIconMoon: $('#theme-icon-moon'),
  themeIconSun: $('#theme-icon-sun'),
  toastContainer: $('#toast-container')
};

// ─── Helpers ─────────────────────────────────────────────────
function saveState() {
  localStorage.setItem('ece5710_watched', JSON.stringify([...state.watched]));
  localStorage.setItem('ece5710_bookmarks', JSON.stringify([...state.bookmarks]));
  localStorage.setItem('ece5710_theme', state.theme);
}

function encodeUrl(file) {
  return BASE_URL + encodeURIComponent(file).replace(/%20/g, '%20');
}

function toast(message, icon = '✓') {
  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${icon}</span>${message}`;
  dom.toastContainer.appendChild(el);
  setTimeout(() => el.remove(), 3000);
}

function getAllVideos() {
  const videos = [];
  COURSE.chapters.forEach(ch => {
    ch.videos.forEach(v => {
      videos.push({ ...v, chapterId: ch.id, chapterTitle: ch.title });
    });
  });
  return videos;
}

function getVideoIndex(videoId) {
  const all = getAllVideos();
  return all.findIndex(v => v.id === videoId);
}

function bookmarkKey(type, id) {
  return `${type}:${id}`;
}

function getChapterProgress(chapter) {
  const total = chapter.videos.length;
  const watched = chapter.videos.filter(v => state.watched.has(v.id)).length;
  return { total, watched, pct: total ? Math.round((watched / total) * 100) : 0 };
}

function getTotalProgress() {
  const allVideos = getAllVideos();
  const watched = allVideos.filter(v => state.watched.has(v.id)).length;
  return { total: allVideos.length, watched };
}

// ─── Theme ───────────────────────────────────────────────────
function applyTheme() {
  document.documentElement.setAttribute('data-theme', state.theme);
  dom.themeIconMoon.style.display = state.theme === 'light' ? '' : 'none';
  dom.themeIconSun.style.display = state.theme === 'dark' ? '' : 'none';
}

function toggleTheme() {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  applyTheme();
  saveState();
}

// ─── Sidebar ─────────────────────────────────────────────────
function toggleSidebar() {
  if (window.innerWidth <= 768) {
    dom.sidebar.classList.toggle('mobile-open');
    dom.sidebarOverlay.classList.toggle('active');
  } else {
    dom.sidebar.classList.toggle('collapsed');
  }
}

function closeMobileSidebar() {
  dom.sidebar.classList.remove('mobile-open');
  dom.sidebarOverlay.classList.remove('active');
}

function renderSidebar() {
  const query = state.searchQuery.toLowerCase();
  let html = '';
  let hasResults = false;

  COURSE.chapters.forEach(ch => {
    const progress = getChapterProgress(ch);
    const pdfKey = bookmarkKey('pdf', ch.id);
    const pdfBookmarked = state.bookmarks.has(pdfKey);

    // Filter videos
    let filteredVideos = ch.videos;
    if (query) {
      filteredVideos = filteredVideos.filter(v =>
        v.title.toLowerCase().includes(query) ||
        v.id.toLowerCase().includes(query) ||
        ch.title.toLowerCase().includes(query)
      );
    }
    if (state.filter === 'unwatched') {
      filteredVideos = filteredVideos.filter(v => !state.watched.has(v.id));
    }
    if (state.filter === 'bookmarked') {
      filteredVideos = filteredVideos.filter(v =>
        state.bookmarks.has(bookmarkKey('video', v.id))
      );
      // Also check if PDF is bookmarked
      if (!pdfBookmarked && filteredVideos.length === 0) return;
    }

    // Check if chapter title matches search
    const chapterMatchesSearch = query && ch.title.toLowerCase().includes(query);

    // If filtering and nothing matches, skip
    if (!chapterMatchesSearch && filteredVideos.length === 0 && state.filter !== 'all') return;
    if (query && !chapterMatchesSearch && filteredVideos.length === 0) return;

    // If search matches chapter title, show all videos
    if (chapterMatchesSearch) {
      filteredVideos = ch.videos;
    }

    hasResults = true;
    const isOpen = state.openChapters.has(ch.id) || !!query;
    const isActive = state.currentChapter === ch.id;

    html += `
      <div class="chapter-item" data-chapter="${ch.id}">
        <div class="chapter-header ${isOpen ? 'open' : ''} ${isActive ? 'active' : ''}" data-chapter="${ch.id}">
          <svg class="chapter-chevron" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"/></svg>
          <div class="chapter-number">${ch.id}</div>
          <div class="chapter-info">
            <div class="chapter-title">${ch.title}</div>
            <div class="chapter-meta">${ch.videos.length} videos · ${progress.pct}% done</div>
          </div>
        </div>
        <div class="chapter-content ${isOpen ? 'open' : ''}">
          <div class="sidebar-pdf-link ${state.currentView === 'pdf' && state.currentPdfChapter === ch.id ? 'active' : ''}" data-chapter="${ch.id}" data-type="pdf">
            <span class="link-icon">📄</span>
            Lecture Notes (PDF)
            ${pdfBookmarked ? '<span style="margin-left:auto;font-size:0.7rem">🔖</span>' : ''}
          </div>
          ${filteredVideos.map(v => {
            const isWatched = state.watched.has(v.id);
            const isBookmarked = state.bookmarks.has(bookmarkKey('video', v.id));
            const isActiveVideo = state.currentVideoId === v.id;
            return `
              <div class="video-item ${isWatched ? 'watched' : ''} ${isActiveVideo ? 'active' : ''}"
                   data-video="${v.id}" data-chapter="${ch.id}">
                <span class="video-icon">${isWatched ? '✓' : '▶'}</span>
                <span class="video-label">${v.id}: ${v.title}</span>
                <span class="video-status-icons">
                  ${isBookmarked ? '<span class="status-icon visible">🔖</span>' : ''}
                </span>
              </div>
            `;
          }).join('')}
        </div>
      </div>
    `;
  });

  if (!hasResults) {
    html = `
      <div class="no-results">
        <div class="no-results-icon">🔍</div>
        No results found for "${state.searchQuery}"
      </div>
    `;
  }

  dom.chapterNav.innerHTML = html;

  // Stats
  const prog = getTotalProgress();
  dom.sidebarStats.innerHTML = `
    <span>${prog.watched} / ${prog.total} videos watched</span>
    <span>${state.bookmarks.size} bookmarks</span>
  `;

  // Badge
  if (state.bookmarks.size > 0) {
    dom.bookmarkCount.textContent = state.bookmarks.size;
    dom.bookmarkCount.classList.add('visible');
  } else {
    dom.bookmarkCount.classList.remove('visible');
  }

  // Bind chapter header clicks
  dom.chapterNav.querySelectorAll('.chapter-header').forEach(el => {
    el.addEventListener('click', () => {
      const chId = parseInt(el.dataset.chapter);
      if (state.openChapters.has(chId)) {
        state.openChapters.delete(chId);
      } else {
        state.openChapters.add(chId);
      }
      renderSidebar();
    });
  });

  // Bind PDF clicks
  dom.chapterNav.querySelectorAll('.sidebar-pdf-link').forEach(el => {
    el.addEventListener('click', () => {
      const chId = parseInt(el.dataset.chapter);
      loadPdf(chId);
      closeMobileSidebar();
    });
  });

  // Bind video clicks
  dom.chapterNav.querySelectorAll('.video-item').forEach(el => {
    el.addEventListener('click', () => {
      const videoId = el.dataset.video;
      const chId = parseInt(el.dataset.chapter);
      loadVideo(videoId, chId);
      closeMobileSidebar();
    });
  });
}

// ─── Filter buttons ──────────────────────────────────────────
function initFilters() {
  $$('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      $$('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.filter = btn.dataset.filter;
      renderSidebar();
    });
  });
}

// ─── Views ───────────────────────────────────────────────────
function hideAllViews() {
  dom.welcomeView.style.display = 'none';
  dom.pdfView.style.display = 'none';
  dom.videoView.style.display = 'none';
  dom.bookmarksView.style.display = 'none';
}

function showWelcome() {
  hideAllViews();
  state.currentView = 'welcome';
  state.currentChapter = null;
  state.currentVideoId = null;
  state.currentPdfChapter = null;
  dom.welcomeView.style.display = '';
  renderWelcome();
  renderSidebar();
  updateHash('');
}

function renderWelcome() {
  const prog = getTotalProgress();
  const pct = prog.total ? Math.round((prog.watched / prog.total) * 100) : 0;

  let chapCards = COURSE.chapters.map(ch => {
    const p = getChapterProgress(ch);
    return `
      <div class="chapter-card" data-chapter="${ch.id}">
        <div class="chapter-card-number">${ch.id}</div>
        <div class="chapter-card-title">${ch.title}</div>
        <div class="chapter-card-meta">
          <span>${ch.videos.length} videos</span>
          <span>${p.watched}/${p.total} watched</span>
        </div>
        <div class="chapter-card-progress">
          <div class="progress-bar">
            <div class="progress-fill ${p.pct === 100 ? 'complete' : ''}" style="width:${p.pct}%"></div>
          </div>
        </div>
      </div>
    `;
  }).join('');

  dom.welcomeView.innerHTML = `
    <div class="welcome-hero">
      <div class="welcome-icon">🔋</div>
      <div class="welcome-title">Battery Dynamics</div>
      <div class="welcome-subtitle">Modeling, Simulation, and Identification — UCCS ECE4710/5710</div>
    </div>
    <div class="course-stats">
      <div class="stat-card">
        <div class="stat-number">${COURSE.chapters.length}</div>
        <div class="stat-label">Chapters</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${prog.total}</div>
        <div class="stat-label">Lectures</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${prog.watched}</div>
        <div class="stat-label">Watched</div>
      </div>
      <div class="stat-card">
        <div class="stat-number">${pct}%</div>
        <div class="stat-label">Progress</div>
      </div>
    </div>
    <div class="welcome-section-title">Chapters</div>
    <div class="chapters-grid">${chapCards}</div>
  `;

  // Bind chapter card clicks
  dom.welcomeView.querySelectorAll('.chapter-card').forEach(card => {
    card.addEventListener('click', () => {
      const chId = parseInt(card.dataset.chapter);
      state.openChapters.add(chId);
      const ch = COURSE.chapters[chId];
      if (ch.videos.length > 0) {
        loadVideo(ch.videos[0].id, chId);
      }
    });
  });
}

// ─── PDF Viewer ──────────────────────────────────────────────
function loadPdf(chapterId) {
  hideAllViews();
  state.currentView = 'pdf';
  state.currentPdfChapter = chapterId;
  state.currentChapter = chapterId;
  state.currentVideoId = null;

  const ch = COURSE.chapters[chapterId];
  const url = encodeUrl(ch.pdf);

  dom.pdfTitle.textContent = `Chapter ${ch.id}: ${ch.title}`;
  dom.pdfFrame.src = url;
  dom.pdfDownloadLink.href = url;
  dom.pdfView.style.display = '';

  updatePdfBookmarkBtn();
  renderSidebar();
  updateHash(`pdf-${chapterId}`);
}

function updatePdfBookmarkBtn() {
  const key = bookmarkKey('pdf', state.currentPdfChapter);
  if (state.bookmarks.has(key)) {
    dom.pdfBookmarkBtn.classList.add('active');
    dom.pdfBookmarkBtn.querySelector('svg').setAttribute('fill', 'var(--accent)');
    dom.pdfBookmarkBtn.querySelector('span').textContent = 'Bookmarked';
  } else {
    dom.pdfBookmarkBtn.classList.remove('active');
    dom.pdfBookmarkBtn.querySelector('svg').setAttribute('fill', 'none');
    dom.pdfBookmarkBtn.querySelector('span').textContent = 'Bookmark';
  }
}

// ─── Video Player ────────────────────────────────────────────
function loadVideo(videoId, chapterId) {
  hideAllViews();
  state.currentView = 'video';
  state.currentVideoId = videoId;
  state.currentChapter = chapterId;
  state.currentPdfChapter = null;

  const ch = COURSE.chapters[chapterId];
  const video = ch.videos.find(v => v.id === videoId);
  const url = encodeUrl(video.file);

  dom.videoTitle.textContent = `${video.id}: ${video.title}`;
  dom.videoElement.src = url;
  dom.videoDownloadLink.href = url;
  dom.videoView.style.display = '';

  state.openChapters.add(chapterId);

  updateVideoButtons();
  updateVideoNav();
  renderSidebar();
  updateHash(`video-${videoId}`);

  // Scroll main content to top
  dom.mainContent.scrollTop = 0;
}

function updateVideoButtons() {
  // Watched
  if (state.watched.has(state.currentVideoId)) {
    dom.videoWatchedBtn.classList.add('watched-active');
    dom.videoWatchedBtn.querySelector('span').textContent = 'Watched ✓';
  } else {
    dom.videoWatchedBtn.classList.remove('watched-active');
    dom.videoWatchedBtn.querySelector('span').textContent = 'Mark Watched';
  }

  // Bookmarked
  const key = bookmarkKey('video', state.currentVideoId);
  if (state.bookmarks.has(key)) {
    dom.videoBookmarkBtn.classList.add('active');
    dom.videoBookmarkBtn.querySelector('svg').setAttribute('fill', 'var(--accent)');
    dom.videoBookmarkBtn.querySelector('span').textContent = 'Bookmarked';
  } else {
    dom.videoBookmarkBtn.classList.remove('active');
    dom.videoBookmarkBtn.querySelector('svg').setAttribute('fill', 'none');
    dom.videoBookmarkBtn.querySelector('span').textContent = 'Bookmark';
  }
}

function updateVideoNav() {
  const all = getAllVideos();
  const idx = getVideoIndex(state.currentVideoId);
  dom.prevVideo.disabled = idx <= 0;
  dom.nextVideo.disabled = idx >= all.length - 1;
}

function navigateVideo(direction) {
  const all = getAllVideos();
  const idx = getVideoIndex(state.currentVideoId);
  const newIdx = idx + direction;
  if (newIdx < 0 || newIdx >= all.length) return;
  const v = all[newIdx];
  loadVideo(v.id, v.chapterId);
}

// ─── Bookmarks ───────────────────────────────────────────────
function toggleBookmark(type, id) {
  const key = bookmarkKey(type, id);
  if (state.bookmarks.has(key)) {
    state.bookmarks.delete(key);
    toast('Bookmark removed', '🗑️');
  } else {
    state.bookmarks.add(key);
    toast('Bookmarked!', '🔖');
  }
  saveState();
}

function showBookmarks() {
  hideAllViews();
  state.currentView = 'bookmarks';
  dom.bookmarksView.style.display = '';
  renderBookmarks();
  renderSidebar();
}

function renderBookmarks() {
  if (state.bookmarks.size === 0) {
    dom.bookmarksList.innerHTML = `
      <div class="no-bookmarks">
        <div class="no-bookmarks-icon">🔖</div>
        <div class="no-bookmarks-text">No bookmarks yet.<br>Bookmark lectures and PDFs to access them quickly.</div>
      </div>
    `;
    return;
  }

  let pdfItems = [];
  let videoItems = [];

  state.bookmarks.forEach(key => {
    const [type, id] = key.split(':');
    if (type === 'pdf') {
      const chId = parseInt(id);
      const ch = COURSE.chapters[chId];
      if (ch) pdfItems.push({ type, id: chId, title: ch.title, chapterTitle: `Chapter ${chId}` });
    } else if (type === 'video') {
      const all = getAllVideos();
      const v = all.find(x => x.id === id);
      if (v) videoItems.push({ type, id: v.id, title: `${v.id}: ${v.title}`, chapterTitle: `Chapter ${v.chapterId}: ${v.chapterTitle}`, chapterId: v.chapterId });
    }
  });

  let html = '';

  if (pdfItems.length > 0) {
    html += '<div class="bookmark-group-title">Lecture Notes (PDFs)</div>';
    pdfItems.forEach(item => {
      html += `
        <div class="bookmark-item" data-type="pdf" data-id="${item.id}">
          <span class="bookmark-icon">📄</span>
          <div class="bookmark-info">
            <div class="bookmark-title">Chapter ${item.id}: ${item.title}</div>
          </div>
          <button class="bookmark-remove" data-key="pdf:${item.id}" title="Remove bookmark">✕</button>
        </div>
      `;
    });
  }

  if (videoItems.length > 0) {
    html += '<div class="bookmark-group-title">Lecture Videos</div>';
    videoItems.forEach(item => {
      html += `
        <div class="bookmark-item" data-type="video" data-id="${item.id}" data-chapter="${item.chapterId}">
          <span class="bookmark-icon">🎬</span>
          <div class="bookmark-info">
            <div class="bookmark-title">${item.title}</div>
            <div class="bookmark-chapter">${item.chapterTitle}</div>
          </div>
          <button class="bookmark-remove" data-key="video:${item.id}" title="Remove bookmark">✕</button>
        </div>
      `;
    });
  }

  dom.bookmarksList.innerHTML = html;

  // Bind clicks
  dom.bookmarksList.querySelectorAll('.bookmark-item').forEach(el => {
    el.addEventListener('click', (e) => {
      if (e.target.closest('.bookmark-remove')) return;
      const type = el.dataset.type;
      const id = el.dataset.id;
      if (type === 'pdf') {
        loadPdf(parseInt(id));
      } else {
        loadVideo(id, parseInt(el.dataset.chapter));
      }
    });
  });

  dom.bookmarksList.querySelectorAll('.bookmark-remove').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const key = btn.dataset.key;
      state.bookmarks.delete(key);
      saveState();
      renderBookmarks();
      renderSidebar();
      toast('Bookmark removed', '🗑️');
    });
  });
}

// ─── Progress ────────────────────────────────────────────────
function toggleWatched(videoId) {
  if (state.watched.has(videoId)) {
    state.watched.delete(videoId);
    toast('Marked as unwatched', '↩️');
  } else {
    state.watched.add(videoId);
    toast('Marked as watched!', '✅');
  }
  saveState();
  updateVideoButtons();
  renderSidebar();
  if (state.currentView === 'welcome') renderWelcome();
}

// ─── Search ──────────────────────────────────────────────────
function handleSearch() {
  state.searchQuery = dom.searchInput.value.trim();
  dom.searchClear.classList.toggle('visible', state.searchQuery.length > 0);
  renderSidebar();
}

function clearSearch() {
  dom.searchInput.value = '';
  state.searchQuery = '';
  dom.searchClear.classList.remove('visible');
  renderSidebar();
}

// ─── Hash Navigation ─────────────────────────────────────────
function updateHash(hash) {
  if (hash) {
    history.replaceState(null, '', '#' + hash);
  } else {
    history.replaceState(null, '', window.location.pathname);
  }
}

function loadFromHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) {
    showWelcome();
    return;
  }

  if (hash.startsWith('pdf-')) {
    const chId = parseInt(hash.replace('pdf-', ''));
    if (COURSE.chapters[chId]) {
      loadPdf(chId);
      return;
    }
  }

  if (hash.startsWith('video-')) {
    const vId = hash.replace('video-', '');
    const all = getAllVideos();
    const v = all.find(x => x.id === vId);
    if (v) {
      loadVideo(v.id, v.chapterId);
      return;
    }
  }

  if (hash === 'bookmarks') {
    showBookmarks();
    return;
  }

  showWelcome();
}

// ─── Event Listeners ─────────────────────────────────────────
function bindEvents() {
  // Sidebar toggle
  dom.sidebarToggle.addEventListener('click', toggleSidebar);
  dom.sidebarOverlay.addEventListener('click', closeMobileSidebar);

  // Theme
  dom.themeToggle.addEventListener('click', toggleTheme);

  // Search
  dom.searchInput.addEventListener('input', handleSearch);
  dom.searchClear.addEventListener('click', clearSearch);

  // Bookmarks toggle
  dom.bookmarksToggle.addEventListener('click', () => {
    if (state.currentView === 'bookmarks') {
      showWelcome();
    } else {
      showBookmarks();
    }
  });

  // PDF bookmark
  dom.pdfBookmarkBtn.addEventListener('click', () => {
    toggleBookmark('pdf', state.currentPdfChapter);
    updatePdfBookmarkBtn();
    renderSidebar();
  });

  // Video watched
  dom.videoWatchedBtn.addEventListener('click', () => {
    toggleWatched(state.currentVideoId);
  });

  // Video bookmark
  dom.videoBookmarkBtn.addEventListener('click', () => {
    toggleBookmark('video', state.currentVideoId);
    updateVideoButtons();
    renderSidebar();
  });

  // Video navigation
  dom.prevVideo.addEventListener('click', () => navigateVideo(-1));
  dom.nextVideo.addEventListener('click', () => navigateVideo(1));

  // Auto-mark watched when video ends
  dom.videoElement.addEventListener('ended', () => {
    if (!state.watched.has(state.currentVideoId)) {
      state.watched.add(state.currentVideoId);
      saveState();
      updateVideoButtons();
      renderSidebar();
      toast('Lecture completed! Marked as watched.', '🎉');
    }
  });

  // Keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Don't handle when typing in search
    if (e.target === dom.searchInput) return;

    if (e.key === 'Escape') {
      closeMobileSidebar();
    }
    if (state.currentView === 'video') {
      if (e.key === 'ArrowLeft' && !dom.prevVideo.disabled) {
        e.preventDefault();
        navigateVideo(-1);
      }
      if (e.key === 'ArrowRight' && !dom.nextVideo.disabled) {
        e.preventDefault();
        navigateVideo(1);
      }
    }
    // Ctrl/Cmd+K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
      e.preventDefault();
      dom.searchInput.focus();
    }
  });

  // Hash navigation
  window.addEventListener('hashchange', loadFromHash);

  // Handle resize
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      dom.sidebar.classList.remove('mobile-open');
      dom.sidebarOverlay.classList.remove('active');
    }
  });
}

// ─── Initialization ──────────────────────────────────────────
function init() {
  applyTheme();
  initFilters();
  bindEvents();
  renderSidebar();
  loadFromHash();
}

document.addEventListener('DOMContentLoaded', init);
