/* =====================
   STATE
   ===================== */
let activeFilter = 'all';
let searchQuery = '';
const WHATSAPP_NUMBER = '55SEU_NUMERO';

/* =====================
   DOM REFS
   ===================== */
const grid          = document.getElementById('templatesGrid');
const modal         = document.getElementById('previewModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose    = document.getElementById('modalClose');
const modalTitle    = document.getElementById('modalTitle');
const modalCategory = document.getElementById('modalCategory');
const modalWhatsapp = document.getElementById('modalWhatsapp');
const previewIframe = document.getElementById('previewIframe');
const iframeWrapper = document.getElementById('iframeWrapper');
const searchInput   = document.getElementById('searchInput');
const templateCount = document.getElementById('templateCount');
const navLinks      = document.querySelectorAll('.nav__link[data-filter]');
const allNavLink    = document.querySelector('.nav__link:not([data-filter])');
const deviceBtns    = document.querySelectorAll('.device-btn');

/* =====================
   RENDER
   ===================== */
function getFiltered() {
  return templates.filter(t => {
    const matchFilter = activeFilter === 'all' || t.tag === activeFilter;
    const matchSearch = t.title.toLowerCase().includes(searchQuery) ||
                        t.category.toLowerCase().includes(searchQuery) ||
                        t.desc.toLowerCase().includes(searchQuery);
    return matchFilter && matchSearch;
  });
}

function renderCards() {
  const filtered = getFiltered();
  templateCount.textContent = `${filtered.length} template${filtered.length !== 1 ? 's' : ''} disponíve${filtered.length !== 1 ? 'is' : 'l'}`;

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="empty-state">
        <div class="empty-state__icon">🔍</div>
        <div class="empty-state__title">Nenhum template encontrado</div>
        <div class="empty-state__text">Tente outro filtro ou busca.</div>
      </div>`;
    return;
  }

  grid.innerHTML = filtered.map(t => `
    <div class="card" data-id="${t.id}">
      <div class="card__thumb">
        <img src="${t.thumb}" alt="${t.title}" loading="lazy" />
        <div class="card__overlay">
          <button class="card__preview-btn">👁 Ver Preview</button>
        </div>
      </div>
      <div class="card__body">
        <div class="card__top">
          <span class="card__tag tag--${t.tag}">${t.category}</span>
          ${t.isFramer ? '<span style="font-size:11px;color:var(--text-muted);font-weight:600;">by Framer</span>' : ''}
        </div>
        <div class="card__title">${t.title}</div>
        <div class="card__desc">${t.desc}</div>
        <div class="card__footer">
          <span class="card__cta">Ver preview →</span>
          <span class="card__pages">${t.pages}</span>
        </div>
      </div>
    </div>
  `).join('');

  grid.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => openModal(Number(card.dataset.id)));
  });
}

/* =====================
   MODAL
   ===================== */
function openModal(id) {
  const t = templates.find(t => t.id === id);
  if (!t) return;

  modalTitle.textContent    = t.title;
  modalCategory.textContent = t.category;
  previewIframe.src         = t.previewUrl;

  const msg = encodeURIComponent(`Olá! Vi o template "${t.title}" na biblioteca da Syncro e quero saber mais! 🚀`);
  modalWhatsapp.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`;

  setDevice('desktop');
  modal.classList.add('modal--open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  modal.classList.remove('modal--open');
  document.body.style.overflow = '';
  setTimeout(() => { previewIframe.src = ''; }, 300);
}

/* =====================
   DEVICE TOGGLE
   ===================== */
const deviceSizes = {
  desktop: '100%',
  tablet:  '768px',
  mobile:  '390px'
};

function setDevice(device) {
  iframeWrapper.style.width = deviceSizes[device];
  deviceBtns.forEach(btn => {
    btn.classList.toggle('device-btn--active', btn.dataset.device === device);
  });
}

deviceBtns.forEach(btn => {
  btn.addEventListener('click', () => setDevice(btn.dataset.device));
});

/* =====================
   FILTERS
   ===================== */
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    activeFilter = link.dataset.filter;
    navLinks.forEach(l => l.classList.remove('nav__link--active'));
    allNavLink.classList.remove('nav__link--active');
    link.classList.add('nav__link--active');
    renderCards();
  });
});

allNavLink.addEventListener('click', (e) => {
  e.preventDefault();
  activeFilter = 'all';
  navLinks.forEach(l => l.classList.remove('nav__link--active'));
  allNavLink.classList.add('nav__link--active');
  renderCards();
});

/* =====================
   SEARCH
   ===================== */
searchInput.addEventListener('input', (e) => {
  searchQuery = e.target.value.toLowerCase();
  renderCards();
});

/* =====================
   CLOSE MODAL
   ===================== */
modalClose.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') closeModal();
});

/* =====================
   INIT
   ===================== */
renderCards();
