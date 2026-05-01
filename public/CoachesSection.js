// ============================================================
// 📸 ИНСТРУКЦИЯ КАК ДОБАВИТЬ ФОТО ТРЕНЕРА:
//
// 1. Положи фото в папку: public/coaches/
//    Например: public/coaches/zhanbek.jpg
//
// 2. В массиве COACHES ниже найди нужного тренера
//    и в поле avatar напиши путь:
//    avatar: "/coaches/zhanbek.jpg"
//
// 3. Если фото нет — оставь avatar: null
//    Тогда покажется красивая заглушка с инициалами
//
// ✅ Пример структуры папок:
//    myapp/
//    └── public/
//        └── coaches/
//            ├── zhanbek.jpg
//            ├── oksana.jpg
//            └── alan.jpg
//
// ✅ URL в коде будет просто: "/coaches/zhanbek.jpg"
//    Vite автоматически берёт файлы из папки public/
// ============================================================

import React, { useState } from "react";

const COACHES = [
  {
    id: 1,
    name: "Амангельди Жанибек",
    role: "Кандидат в Мастер Спорта",
    specialty: "Все виды плавания",
    experience: "5 лет",
    bio: "Высшее образование (Тренер-преподаватель). Тренерский стаж больше 5 лет. Подготовил чемпионов Казахстана и призёров Республики Казахстана по плаванию.",
    // 👇 СЮДА ВСТАВЬ ПУТЬ К ФОТО (или оставь null)
    avatar: "/coaches/zhanbek.jpg", // пример: "/coaches/zhanbek.jpg"
    initials: "АЖ",
  },
  {
    id: 2,
    name: "Дмитриенко Оксана",
    role: "Тренер высшей категории, Мастер Спорта",
    specialty: "Все виды плавания",
    experience: "29 лет",
    bio: "Высшее образование, преподаватель физической культуры, тренер. Подготовила: 10 Чемпионов Азии (2 Золота, 3 Серебра, 5 Бронзы), 10 Финалистов кубка мира (3 Золота, 7 Бронзы).",
    avatar: "/coaches/oksana.jpg", // пример: "/coaches/oksana.jpg"
    initials: "ДО",
  },
  {
    id: 3,
    name: "Зиннат Алан",
    role: "Кандидат в Мастера Спорта",
    specialty: "Все виды плавания",
    experience: "4 года",
    bio: "Победитель и призёр чемпионатов Республики Казахстан. Выпускник Республиканской спортивной школы-интерната колледжа Олимпийского резерва им. Кажимукана Мунайтпасова.",
    avatar: "/coaches/alan.jpg", // пример: "/coaches/alan.jpg"
    initials: "ЗА",
  },
  {
    id: 4,
    name: "Кулжабаев Алишер",
    role: "Сертифицированный Тренер по Плаванию",
    specialty: "Все виды плавания",
    experience: "10 лет",
    bio: "Аттестованный судья по плаванию, тренер с 10-летним стажем. Призёр Республики Казахстан по водным видам спорта.",
    avatar: "/coaches/alisher.jpg", // пример: "/coaches/alisher.jpg" 
    initials: "КА",
  },
  {
    id: 5,
    name: "Ширинова Лейла",
    role: "Профессиональный Тренер по Плаванию",
    specialty: "Грудничковое плавание (0–3 года)",
    experience: "3 года",
    bio: "Сертифицированный тренер по грудничковому плаванию. Работает с детьми от 0 до 3 лет.",
    avatar: "/coaches/leyla.jpg",
    initials: "ШЛ",
  },
  {
    id: 6,
    name: "Сухарев Владислав",
    role: "МСМК по Современному Пятиборью",
    specialty: "Все виды плавания",
    experience: "4 года",
    bio: "Мастер Спорта по плаванию. Неоднократный призёр и Чемпион РК. Бронзовый призёр Чемпионата Азии по плаванию. Сертифицированный тренер World Aquatics, SCA.",
    avatar: "/coaches/vladislav.jpg",
    initials: "СВ",
  },
  {
    id: 7,
    name: "Жумашева Назерке",
    role: "Сертифицированный Тренер по Плаванию",
    specialty: "Все виды плавания",
    experience: "2 года",
    bio: "Кандидат в мастера спорта по синхронному плаванию. Неоднократная чемпионка и призёрка чемпионатов РК.",
    avatar: "/coaches/nazerke.jpg",
    initials: "ЖН",
  },
  {
    id: 8,
    name: "Песоцкий Илья",
    role: "КМС по Гребле на Байдарках и Каноэ",
    specialty: "Все виды плавания",
    experience: "5 лет",
    bio: "Многократный чемпион и призёр чемпионатов и кубков Казахстана. Сертифицированный тренер по плаванию.",
    avatar: "/coaches/ilya.jpg",
    initials: "ПИ",
  },
  {
    id: 9,
    name: "Муканова Асель",
    role: "Тренер по Грудничковому и Детскому Плаванию",
    specialty: "Все виды плавания (0–3 года)",
    experience: "12 лет в педагогике",
    bio: "Педагог-психолог с высшим образованием. В педагогике более 12 лет. Индивидуальные занятия по плаванию для малышей от 0 до 3 лет.",
    avatar: "/coaches/asel.jpg",
    initials: "МА",
  },
  {
    id: 10,
    name: "Иванов Евгений",
    role: "Сертифицированный тренер по плаванию",
    specialty: "Все виды плавания",
    experience: "2 года",
    bio: "Прошёл обучение в Академии раннего и детского плавания «Ocean Baby». Повышение квалификации — Школа Плавания Дениса Тараканова.",
    avatar: "/coaches/evgeniy.jpg",
    initials: "ИЕ",
  },
  {
    id: 11,
    name: "Аношкин Вадим",
    role: "Сертифицированный тренер по плаванию",
    specialty: "Все виды плавания",
    experience: "6 лет",
    bio: "Высшее физкультурное образование — ЕНУ им. Гумилёва. Участник семинара SCA «Обратная сторона успеха» в Минске, Беларусь.",
    avatar: "/coaches/vadim.jpg",
    initials: "АВ",
  },
  {
    id: 12,
    name: "Mohamed Fouda",
    role: "Тренер / Тренер-спасатель / Дайвинг-мастер",
    specialty: "Все виды плавания",
    experience: "12 лет",
    bio: "Дипломированный тренер-спасатель. Мастер подводного плавания PADI. Опыт работы в Академии Нила и Клубе Голубого Неба (Египет).",
    avatar: "/coaches/mohamed.jpg",
    initials: "МФ",
  },
  {
    id: 13,
    name: "Молдагалиев Валихан",
    role: "КМС по Спортивному Плаванию",
    specialty: "Все виды плавания",
    experience: "3 года",
    bio: "Судья по спорту 1 категории. Победитель и призёр ЧРК и Кубков РК. Прошёл курс «Правила судейства соревнований РК».",
    avatar: "/coaches/valihan.jpg",
    initials: "МВ",
  },
];

// ── Стили компонента (CSS-in-JS) ──────────────────────────────
const styles = {
  section: {
    background: "#9BD7FF",
    padding: "100px 48px",
    fontFamily: "'Manrope', sans-serif",
  },
  tag: {
    fontSize: 12,
    fontWeight: 600,
    letterSpacing: 3,
    color: "#FF4191",
    textTransform: "uppercase",
    marginBottom: 12,
  },
  title: {
    fontSize: "clamp(40px, 5vw, 72px)",
    fontWeight: 800,
    lineHeight: 1.05,
    color: "#072D64",
    marginBottom: 40,
  },
  accent: { color: "#FF4191" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 20,
  },
  card: {
    background: "#fff",
    borderRadius: 20,
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    transition: "transform 0.25s, box-shadow 0.25s",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-6px)",
    boxShadow: "0 16px 48px rgba(7,45,100,0.15)",
  },
  avatarBox: {
    width: "100%",
    aspectRatio: "1/1",
    background: "#C1F9FA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  avatarImg: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "top center",
  },
  avatarPlaceholder: {
    fontSize: 64,
    fontWeight: 800,
    color: "#072D64",
    opacity: 0.2,
    userSelect: "none",
    fontFamily: "'Manrope', sans-serif",
  },
  body: {
    padding: "20px 20px 12px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
  role: {
    fontSize: 10,
    fontWeight: 700,
    letterSpacing: 2,
    color: "#FF4191",
    textTransform: "uppercase",
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    color: "#072D64",
    lineHeight: 1.1,
  },
  specialty: {
    fontSize: 13,
    color: "#5a6a80",
    fontWeight: 600,
  },
  exp: { fontSize: 12, color: "#5a6a80" },
  bio: {
    fontSize: 13,
    color: "#5a6a80",
    lineHeight: 1.6,
    marginTop: 8,
    flex: 1,
  },
  btn: {
    margin: "0 20px 20px",
    padding: "12px",
    background: "#072D64",
    color: "#fff",
    border: "none",
    borderRadius: 100,
    fontFamily: "'Manrope', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
    transition: "background 0.2s",
    textAlign: "center",
  },
};

// ── Карточка тренера ─────────────────────────────────────────
function CoachCard({ coach, onBook }) {
  const [hovered, setHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showPlaceholder = !coach.avatar || imgError;

  return (
    <div
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Фото / Заглушка */}
      <div style={styles.avatarBox}>
        {showPlaceholder ? (
          <div style={styles.avatarPlaceholder}>{coach.initials}</div>
        ) : (
          <img
            src={coach.avatar}
            alt={coach.name}
            style={styles.avatarImg}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Информация */}
      <div style={styles.body}>
        <div style={styles.role}>{coach.role}</div>
        <div style={styles.name}>{coach.name}</div>
        <div style={styles.specialty}>{coach.specialty}</div>
        <div style={styles.exp}>{coach.experience} опыта</div>
        <div style={styles.bio}>{coach.bio}</div>
      </div>

      {/* Кнопка */}
      <button
        style={{
          ...styles.btn,
          background: btnHover ? "#FF4191" : "#072D64",
        }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        onClick={() => onBook && onBook(coach)}
      >
        Записаться →
      </button>
    </div>
  );
}

// ── Главный компонент секции ──────────────────────────────────
export default function CoachesSection({ onBook }) {
  return (
    <section id="shop" style={styles.section}>
      <div style={styles.tag}>Наша команда</div>
      <h2 style={styles.title}>
        Тренеры — <span style={styles.accent}>гарантия успеха</span>
      </h2>

      <div style={styles.grid}>
        {COACHES.map((coach) => (
          <CoachCard key={coach.id} coach={coach} onBook={onBook} />
        ))}
      </div>
    </section>
  );
}

// ── КАК ИСПОЛЬЗОВАТЬ В App.jsx: ────────────────────────────────
//
// import CoachesSection from "./CoachesSection";
//
// function App() {
//   const scrollToContact = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };
//
//   return (
//     <div>
//       <CoachesSection onBook={scrollToContact} />
//     </div>
//   );
// }