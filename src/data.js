/* ════════════════════════════════════════════════════════════
   📝 ДАННЫЕ САЙТА
   ВСЁ ЧТО НУЖНО МЕНЯТЬ — НАХОДИТСЯ ЗДЕСЬ.
════════════════════════════════════════════════════════════ */

/* ── Навигация ─────────────────────────────────────────── */
export const NAV_LINKS = [
  { label: 'About',    href: 'about'    },
  { label: 'Services', href: 'services' },
  { label: 'Work',     href: 'work'     },
  { label: 'Contact',  href: 'contact'  },
];

/* ── Главный экран ──────────────────────────────────────── */
export const HERO = {
  tag:        '— Professional Swim Company',
  titleLine1: 'SWIM',
  titleLine2: 'FEELS',
  subtitle:   'We deliver elite aquatic training solutions for athletes and organizations who demand excellence in the water.',
  btn1:       'Our Services',
  btn2:       'View Work',
  stats: [
    { num: '12+',  label: 'Years'        },
    { num: '500+', label: 'Athletes'     },
    { num: '98%',  label: 'Satisfaction' },
  ],
};

/* ── О нас ──────────────────────────────────────────────── */
export const ABOUT = {
  title: 'WHO\nWE ARE',
  text1: 'Swim Feels is a professional aquatic performance company built for athletes, coaches, and organizations that refuse to settle for average.',
  text2: 'Every program we design is tailored — no templates, no shortcuts. Just focused, intentional work in the water.',
  btn:   'Our Services →',

  // 📸 ФОТО справа в секции About
  // null = показывается заглушка "SF"
  // Чтобы поставить фото:
  //   1. Положи файл в папку /public (например "about.jpg")
  //   2. Замени null на '/about.jpg'
  photo: null,
};

/* ── Услуги ─────────────────────────────────────────────── 
   Добавить услугу: скопируй объект { ... } и вставь в массив
─────────────────────────────────────────────────────────── */
export const SERVICES = [
  {
    num:   '01',
    title: 'Training Programs',
    desc:  'Personalized swim coaching plans built for all levels — from beginner to competitive athletes. We analyze your technique, set goals, and build structured weekly programs that deliver measurable results.',
    details: { 'Duration': '4–24 weeks', 'Format': 'Individual / Group', 'Level': 'All levels', 'Delivery': 'In-pool + Online' },
  },
  {
    num:   '02',
    title: 'Performance Analysis',
    desc:  'Data-driven technique analysis using video review and motion tracking to maximize efficiency. Our coaches break down every stroke, turn, and start to find the milliseconds that matter.',
    details: { 'Session': '90 min', 'Report': 'Full PDF', 'Tools': 'Video + Motion', 'Turnaround': '48 hours' },
  },
  {
    num:   '03',
    title: 'Team Solutions',
    desc:  'Comprehensive packages for clubs, schools, and corporate teams seeking professional swim training. From seasonal planning to one-off clinics, we scale to fit your organization.',
    details: { 'Team size': '5–100+', 'Duration': 'Flexible', 'Format': 'On-site', 'Custom plan': 'Yes' },
  },
];

/* ── Проекты ────────────────────────────────────────────── */
export const WORK_ITEMS = [
  {
    num: '01', name: 'Elite Camp 2024', tags: ['Training', 'Elite'],
    desc: 'A 2-week intensive residential camp for top-tier competitive swimmers. 48 athletes, 6 coaches, full video analysis and race-pace training blocks.',
    details: { 'Year': '2024', 'Athletes': '48', 'Duration': '14 days', 'Location': 'National Aquatic Center' },
  },
  {
    num: '02', name: 'City Aquatics', tags: ['Team', 'Annual'],
    desc: 'Season-long partnership with City Aquatics Club. We restructured their training periodization and saw a 12% average time drop across the squad.',
    details: { 'Year': '2023–24', 'Athletes': '120+', 'Format': 'Annual contract', 'Result': '↓12% avg time' },
  },
  {
    num: '03', name: 'Junior League', tags: ['Youth', 'Development'],
    desc: 'Development program for U14–U18 swimmers. Focus on technique fundamentals, race strategy, and building the mental habits of champions.',
    details: { 'Year': '2024', 'Age': 'U14–U18', 'Swimmers': '60', 'Sessions': '3×/week' },
  },
  {
    num: '04', name: 'Sprint Series', tags: ['Competition', 'Events'],
    desc: 'A series of 4 invitational sprint meets organized in partnership with regional federations. Over 300 entries across butterfly, freestyle, and backstroke events.',
    details: { 'Year': '2024', 'Events': '4 meets', 'Entries': '300+', 'Format': '50m & 100m' },
  },
];

/* ── Контакты ───────────────────────────────────────────── */
export const CONTACT = {
  title:      "LET'S\nTALK",
  subtitle:   "Ready to take your swimming to the next level? Reach out and let's discuss what Swim Feels can do for you.",
  email:      'swimfeels@gmail.com',   // ← твой email
  phone:      '+7 700 212 7192',    // ← твой телефон
  location:   '+7 700 212 7192',   // ← твой город
  successMsg: "Message sent! We'll be in touch soon.",
};

/* ── Футер ──────────────────────────────────────────────── */
export const FOOTER = {
  logo: 'SWIM FEELS',
  copy: '© 2025 Swim Feels. All rights reserved.',
};
