// ============================================================
// 📸 КАК ДОБАВИТЬ ТОВАРЫ МЕРЧА:
//
// 1. Положи фото в папку: public/coaches/
//    Например: public/coaches/merch1.jpg
//
// 2. В массиве MERCH ниже найди нужный товар
//    и в поле image напиши путь:
//    image: "/coaches/merch1.jpg"
//
// 3. Цену можно добавить в поле price
//    price: "5000 ₸"
//
// ✅ Пример структуры:
//    myapp/
//    └── public/
//        └── coaches/
//            ├── merch1.jpg
//            ├── merch2.jpg
//            ├── merch3.jpg
//            └── merch4.jpg
//
// ✅ URL в коде будет просто: "/coaches/merch1.jpg"
// ============================================================

import React, { useState } from "react";

const MERCH = [
  {
    id: 1,
    name: "Товар 1",
    description: "Описание товара 1",
    image: "/coaches/alisher.jpg",
    price: "Цена TBD",
  },
  {
    id: 2,
    name: "Товар 2",
    description: "Описание товара 2",
    image: "/coaches/alan.jpg",
    price: "Цена TBD",
  },
  {
    id: 3,
    name: "Товар 3",
    description: "Описание товара 3",
    image: "/coaches/oksana.jpg",
    price: "Цена TBD",
  },
  {
    id: 4,
    name: "Товар 4",
    description: "Описание товара 4",
    image: "/coaches/zhanbek.jpg",
    price: "Цена TBD",
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
  imageBox: {
    width: "100%",
    aspectRatio: "1/1",
    background: "#C1F9FA",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "relative",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    objectPosition: "center",
  },
  imagePlaceholder: {
    fontSize: 64,
    fontWeight: 800,
    color: "#072D64",
    opacity: 0.2,
    userSelect: "none",
    fontFamily: "'Manrope', sans-serif",
  },
  body: {
    padding: "20px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    gap: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 800,
    color: "#072D64",
    lineHeight: 1.1,
  },
  description: {
    fontSize: 13,
    color: "#5a6a80",
    fontWeight: 500,
    flex: 1,
  },
  price: {
    fontSize: 18,
    fontWeight: 800,
    color: "#072D64",
    marginTop: 8,
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

// ── Карточка товара ──────────────────────────────────────────
function MerchCard({ product, onBuy }) {
  const [hovered, setHovered] = useState(false);
  const [btnHover, setBtnHover] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showPlaceholder = !product.image || imgError;

  return (
    <div
      style={{ ...styles.card, ...(hovered ? styles.cardHover : {}) }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Фото / Заглушка */}
      <div style={styles.imageBox}>
        {showPlaceholder ? (
          <div style={styles.imagePlaceholder}>📦</div>
        ) : (
          <img
            src={product.image}
            alt={product.name}
            style={styles.image}
            onError={() => setImgError(true)}
          />
        )}
      </div>

      {/* Информация */}
      <div style={styles.body}>
        <div style={styles.name}>{product.name}</div>
        <div style={styles.description}>{product.description}</div>
        <div style={styles.price}>{product.price}</div>
      </div>

      {/* Кнопка */}
      <button
        style={{
          ...styles.btn,
          background: btnHover ? "#FF4191" : "#072D64",
        }}
        onMouseEnter={() => setBtnHover(true)}
        onMouseLeave={() => setBtnHover(false)}
        onClick={() => onBuy && onBuy(product)}
      >
        Купить →
      </button>
    </div>
  );
}

// ── Главный компонент секции ──────────────────────────────────
export default function MerchSection({ onBuy }) {
  return (
    <section id="merch" style={styles.section}>
      <div style={styles.tag}>Наш Магазин</div>
      <h2 style={styles.title}>
        Мерч — <span style={styles.accent}>Swim Feels</span>
      </h2>

      <div style={styles.grid}>
        {MERCH.map((product) => (
          <MerchCard key={product.id} product={product} onBuy={onBuy} />
        ))}
      </div>
    </section>
  );
}

// ── КАК ИСПОЛЬЗОВАТЬ В App.jsx: ────────────────────────────────
//
// import MerchSection from "./MerchSection";
//
// function App() {
//   const scrollToContact = () => {
//     document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
//   };
//
//   return (
//     <div>
//       <MerchSection onBuy={scrollToContact} />
//     </div>
//   );
// }
