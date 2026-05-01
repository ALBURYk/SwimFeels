import { NAV_LINKS, HERO, ABOUT, SERVICES, WORK_ITEMS, CONTACT, FOOTER } from './data.js';

/* ════════════════════════════════════════════════════════════
   ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
════════════════════════════════════════════════════════════ */

// Плавный скролл к секции по id
const scrollTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
};

// Создаёт HTML-элемент с классами и содержимым
// tag       = 'div', 'button', 'h1' и т.д.
// className = строка с классами
// html      = HTML содержимое внутри
const el = (tag, className = '', html = '') => {
  const element = document.createElement(tag);
  if (className) element.className = className;
  if (html) element.innerHTML = html;
  return element;
};

/* ════════════════════════════════════════════════════════════
   МОДАЛЬНОЕ ОКНО
   Открывается при клике на карточку/строку проекта
════════════════════════════════════════════════════════════ */
function openModal(item) {
  // Строим таблицу деталей
  const detailsHTML = item.details
    ? `<div class="modal-details">
        ${Object.entries(item.details).map(([k, v]) => `
          <div class="modal-detail-row">
            <span class="modal-detail-key">${k}</span>
            <span class="modal-detail-val">${v}</span>
          </div>`).join('')}
       </div>`
    : '';

  // Создаём оверлей
  const overlay = el('div', 'modal-overlay', `
    <div class="modal">
      <button class="modal-close">✕</button>
      <div class="modal-num">${item.num}</div>
      <div class="modal-title">${item.title || item.name}</div>
      <div class="modal-desc">${item.desc}</div>
      ${detailsHTML}
      <button class="btn-primary modal-cta" style="margin-top:32px">Get in Touch →</button>
    </div>
  `);

  // Закрытие по крестику
  overlay.querySelector('.modal-close').onclick = () => overlay.remove();

  // Закрытие по клику на фон
  overlay.onclick = (e) => { if (e.target === overlay) overlay.remove(); };

  // Кнопка "Get in Touch" → закрыть + скролл к форме
  overlay.querySelector('.modal-cta').onclick = () => {
    overlay.remove();
    scrollTo('contact');
  };

  document.body.appendChild(overlay);

  // Закрытие по Escape
  const onKey = (e) => { if (e.key === 'Escape') { overlay.remove(); window.removeEventListener('keydown', onKey); } };
  window.addEventListener('keydown', onKey);
}

/* ════════════════════════════════════════════════════════════
   ТОСТ — уведомление после отправки формы
════════════════════════════════════════════════════════════ */
function showToast(msg) {
  const toast = el('div', 'toast', `<span class="toast-icon">✓</span><span class="toast-text">${msg}</span>`);
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3500); // исчезает через 3.5 сек
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР НАВИГАЦИИ
════════════════════════════════════════════════════════════ */
function renderNav() {
  const linksHTML = NAV_LINKS.map(link =>
    `<li><a href="#${link.href}" data-href="${link.href}">${link.label}</a></li>`
  ).join('');

  const nav = el('nav', '', `
    <button class="nav-logo">SWIM FEELS</button>
    <ul class="nav-links">${linksHTML}</ul>
    <button class="nav-cta">Get in Touch</button>
  `);

  // Логотип → наверх
  nav.querySelector('.nav-logo').onclick = () => scrollTo('hero');

  // Ссылки навигации
  nav.querySelectorAll('.nav-links a').forEach(a => {
    a.onclick = (e) => { e.preventDefault(); scrollTo(a.dataset.href); };
  });

  // Кнопка "Get in Touch" → к форме
  nav.querySelector('.nav-cta').onclick = () => scrollTo('contact');

  return nav;
}

/* ════════════════════════════════════════════════════════════
   СЧЕТЧИК ПЛОВЦОВ — ПЛАВНАЯ АНИМАЦИЯ
════════════════════════════════════════════════════════════ */
function startSwimmersCounter(element) {
  let currentValue = 1000;
  let targetValue = 1000 + Math.random() * 100; // случайно 1000-1100
  let isIncreasing = true;
  let animationInterval = null;

  function updateCounter() {
    const step = 1.5;
    
    if (isIncreasing) {
      currentValue += step;
      if (currentValue >= targetValue) {
        currentValue = targetValue;
        isIncreasing = false;
        // Задержка перед уменьшением
        setTimeout(() => {
          isIncreasing = false;
        }, 1500);
      }
    } else {
      currentValue -= step;
      if (currentValue <= 1000) {
        currentValue = 1000;
        // Выбираем новое случайное значение
        targetValue = 1000 + Math.random() * 100;
        isIncreasing = true;
        // Задержка перед следующим увеличением
        setTimeout(() => {
          isIncreasing = true;
        }, 2000);
      }
    }

    element.textContent = Math.round(currentValue) + '+';
  }

  // Запускаем анимацию
  animationInterval = setInterval(updateCounter, 50);
  element.textContent = '1000+';
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР HERO
════════════════════════════════════════════════════════════ */
function renderHero() {
  const statsHTML = HERO.stats.map((s, i) => `
    <div class="stat">
      <div class="stat-num" ${i === 1 ? 'data-athlete-counter' : ''}>${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>`).join('');

  const section = el('section', 'hero', `
    <div class="hero-tag">${HERO.tag}</div>
    <h1 class="hero-title">${HERO.titleLine1}<br><span class="accent">${HERO.titleLine2}</span></h1>
    <p class="hero-sub">${HERO.subtitle}</p>
    <div class="hero-actions">
      <button class="btn-primary" id="hero-btn1">${HERO.btn1}</button>
      <button class="btn-ghost"   id="hero-btn2">${HERO.btn2}</button>
    </div>
    <div class="hero-stats">${statsHTML}</div>
  `);

  section.id = 'hero';
  section.querySelector('#hero-btn1').onclick = () => scrollTo('services');
  section.querySelector('#hero-btn2').onclick = () => scrollTo('work');

  // Начинаем анимацию счётчика пловцов
  const athleteCounter = section.querySelector('[data-athlete-counter]');
  if (athleteCounter) {
    startSwimmersCounter(athleteCounter);
  }

  return section;
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР ABOUT
   📸 Фото: поменяй ABOUT.photo в data.js
════════════════════════════════════════════════════════════ */
function renderAbout() {
  // Правая часть — фото или заглушка
  const visualContent = ABOUT.photo
    ? `<img src="${ABOUT.photo}" alt="About" />`
    : `<div class="about-visual-placeholder">SF</div>`;

  const section = el('section', '', `
    <div class="section-tag">// 01 — About</div>
    <div class="about-grid">
      <div class="about-text">
        <h2 class="section-title">${ABOUT.title.replace('\n', '<br>')}</h2>
        <p>${ABOUT.text1}</p>
        <p>${ABOUT.text2}</p>
        <button class="btn-primary about-btn" style="margin-top:16px">${ABOUT.btn}</button>
      </div>
      <div class="about-visual">${visualContent}</div>
    </div>
  `);

  section.id = 'about';
  section.querySelector('.about-btn').onclick = () => scrollTo('services');

  return section;
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР SERVICES
   Карточки берутся из массива SERVICES в data.js
════════════════════════════════════════════════════════════ */
function renderServices() {
  const cardsHTML = SERVICES.map(s => `
    <div class="service-card" data-num="${s.num}">
      <div class="service-num">${s.num}</div>
      <div class="service-title">${s.title}</div>
      <div class="service-desc">${s.desc.slice(0, 100)}...</div>
      <div class="service-arrow">→</div>
    </div>`).join('');

  const section = el('section', '', `
    <div class="section-tag">// 02 — Services</div>
    <h2 class="section-title">WHAT<br>WE DO</h2>
    <div class="services-grid">${cardsHTML}</div>
  `);

  section.id = 'services';

  // Клик на карточку → открываем модалку с данными
  section.querySelectorAll('.service-card').forEach((card, i) => {
    card.onclick = () => openModal(SERVICES[i]);
  });

  return section;
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР WORK
   Строки берутся из массива WORK_ITEMS в data.js
════════════════════════════════════════════════════════════ */
function renderWork() {
  const itemsHTML = WORK_ITEMS.map((item, i) => `
    <div class="work-item" data-index="${i}">
      <div class="work-item-left">
        <div class="work-num">${item.num}</div>
        <div class="work-name">${item.name}</div>
        <div class="work-tags">${item.tags.map(t => `<span class="work-ыtag">${t}</span>`).join('')}</div>
      </div>
      <div class="work-arrow">↗</div>
    </div>`).join('');

  const section = el('section', '', `
    <div class="section-tag">// 03 — Work</div>
    <h2 class="section-title">OUR<br>WORK</h2>
    <div class="work-list">${itemsHTML}</div>
  `);

  section.id = 'work';

  // Клик на строку → открываем модалку
  section.querySelectorAll('.work-item').forEach(item => {
    item.onclick = () => openModal(WORK_ITEMS[+item.dataset.index]);
  });

  return section;
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР CONTACT + ФОРМА
════════════════════════════════════════════════════════════ */
function renderContact() {
  const section = el('section', '', `
    <div class="section-tag">// 04 — Contact</div>
    <div class="contact-wrap">

      <div class="contact-info">
        <h2 class="section-title">${CONTACT.title.replace('\n', '<br>')}</h2>
        <p>${CONTACT.subtitle}</p>
        <div class="contact-detail">
          <div class="contact-detail-label">Email</div>
          <div class="contact-detail-value">${CONTACT.email}</div>
        </div>
        <div class="contact-detail">
          <div class="contact-detail-label">Phone</div>
          <div class="contact-detail-value">${CONTACT.phone}</div>
        </div>
        <div class="contact-detail">
          <div class="contact-detail-label">Location</div>
          <div class="contact-detail-value">${CONTACT.location}</div>
        </div>
      </div>

      <form class="contact-form" id="contact-form">
        <div class="form-group">
          <label class="form-label">Name</label>
          <input class="form-input" name="name" placeholder="Your name" />
          <span class="form-error" id="err-name"></span>
        </div>
        <div class="form-group">
          <label class="form-label">Email</label>
          <input class="form-input" name="email" placeholder="your@email.com" />
          <span class="form-error" id="err-email"></span>
        </div>
        <div class="form-group">
          <label class="form-label">Message</label>
          <textarea class="form-textarea" name="message" placeholder="Tell us about your goals..."></textarea>
          <span class="form-error" id="err-message"></span>
        </div>
        <button class="btn-primary" type="submit" id="submit-btn">Send Message</button>
      </form>

    </div>
  `);

  section.id = 'contact';

  // Обработка формы
  const form = section.querySelector('#contact-form');
  form.onsubmit = (e) => {
    e.preventDefault();

    const name    = form.name.value.trim();
    const email   = form.email.value.trim();
    const message = form.message.value.trim();
    let valid = true;

    // Валидация — проверяем каждое поле
    if (!name) {
      section.querySelector('#err-name').textContent = 'Required';
      form.name.style.borderColor = 'var(--blue-light)';
      valid = false;
    } else {
      section.querySelector('#err-name').textContent = '';
      form.name.style.borderColor = '';
    }

    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      section.querySelector('#err-email').textContent = 'Valid email required';
      form.email.style.borderColor = 'var(--blue-light)';
      valid = false;
    } else {
      section.querySelector('#err-email').textContent = '';
      form.email.style.borderColor = '';
    }

    if (!message) {
      section.querySelector('#err-message').textContent = 'Required';
      form.message.style.borderColor = 'var(--blue-light)';
      valid = false;
    } else {
      section.querySelector('#err-message').textContent = '';
      form.message.style.borderColor = '';
    }

    if (!valid) return;

    // Форма валидна
    form.reset();
    const btn = section.querySelector('#submit-btn');
    btn.textContent = 'Message Sent ✓';
    btn.disabled = true;
    showToast(CONTACT.successMsg);

    // 🔌 Здесь можно добавить реальную отправку:
    // fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, message }) });
  };

  return section;
}

/* ════════════════════════════════════════════════════════════
   РЕНДЕР ФУТЕРА
════════════════════════════════════════════════════════════ */
function renderFooter() {
  const footer = el('footer', '', `
    <button class="footer-logo">${FOOTER.logo}</button>
    <div class="footer-copy">${FOOTER.copy}</div>
  `);

  footer.querySelector('.footer-logo').onclick = () => scrollTo('hero');

  return footer;
}

/* ════════════════════════════════════════════════════════════
   ЗАПУСК — собираем всё и вставляем на страницу
════════════════════════════════════════════════════════════ */
const app = document.getElementById('app');

app.appendChild(renderNav());
app.appendChild(renderHero());
app.appendChild(renderAbout());
app.appendChild(renderServices());
app.appendChild(renderWork());
app.appendChild(renderContact());
app.appendChild(renderFooter());
