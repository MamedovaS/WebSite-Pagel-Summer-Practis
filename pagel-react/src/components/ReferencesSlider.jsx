import React, { useState, useEffect, useRef } from 'react';

const SLIDES = [
  {
    image: 'https://www.pagel.com/wp-content/uploads/2026/05/Image-3-1024x576.png',
    title: 'Реконструкція Берлінського ботанічного саду',
    text: '',
    link: 'https://www.pagel.com/en/references/renovation-of-the-berlin-botanical-garden/',
    kicker: 'Референція',
  },
  {
    image: 'https://www.pagel.com/wp-content/uploads/2026/04/Muehlheim-1024x567.png',
    title: 'Реконструкція гавані в Мюльгаймі',
    text: '',
    link: 'https://www.pagel.com/en/references/harbour-basin-renovation-in-muehlheim/',
    kicker: 'Референція',
  },
  {
    image: 'https://www.pagel.com/wp-content/uploads/2026/02/bruecke_bremen.png',
    title: 'Міст Вільгельма Кайзена у Бремені',
    text: '',
    link: 'https://www.pagel.com/en/references/wilhelm-kaisen-bruecke-at-bremen/',
    kicker: 'Референція',
  },
  {
    image: 'https://www.pagel.com/wp-content/uploads/2026/04/3-768x1024.jpg',
    title: 'Реставрація пам\'ятки архітектури — очисна станція',
    text: '',
    link: 'https://www.pagel.com/en/references/restoration-of-a-listed-sewage-treatment-plant/',
    kicker: 'Референція',
  },
];

export default function ReferencesSlider() {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef(null);

  const goTo = (idx) => {
    const next = (idx + SLIDES.length) % SLIDES.length;
    if (next === current || fading) return;
    setFading(true);
    setTimeout(() => {
      setCurrent(next);
      setTimeout(() => setFading(false), 80);
    }, 450);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => goTo(current + 1), 9000);
  };

  useEffect(() => { resetTimer(); return () => clearInterval(timerRef.current); });

  const slide = SLIDES[current];
  const thumbs = SLIDES.filter((_, i) => i !== current);

  return (
    <div className={`bb-design-slider${fading ? ' is-fading' : ''}`}>
      <a className="bb-main-slide" href={slide.link} target="_blank" rel="noreferrer noopener" aria-label={slide.title}>
        <img className="bb-main-image" src={slide.image} alt={slide.title} />
        <div className="bb-main-content">
          <span className="bb-slide-kicker">{slide.kicker}</span>
          <h3>{slide.title}</h3>
          {slide.text && <p>{slide.text}</p>}
        </div>
      </a>

      <div className="bb-thumb-list">
        {thumbs.map((t, i) => (
          <button
            key={i}
            className="bb-thumb"
            onClick={() => { goTo(SLIDES.indexOf(t)); resetTimer(); }}
            aria-label={`Показати: ${t.title}`}
          >
            <img src={t.image} alt={t.title} />
            <strong>{t.title}</strong>
          </button>
        ))}
      </div>

      <button className="bb-slider-arrow bb-slider-prev" onClick={() => { goTo(current - 1); resetTimer(); }} aria-label="Попередня">&#10094;</button>
      <button className="bb-slider-arrow bb-slider-next" onClick={() => { goTo(current + 1); resetTimer(); }} aria-label="Наступна">&#10095;</button>
    </div>
  );
}
