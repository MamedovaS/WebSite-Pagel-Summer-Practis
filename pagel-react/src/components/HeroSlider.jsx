import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const SLIDES = [
  {
    bg: 'https://www.pagel.com/wp-content/uploads/2024/09/wp_wind_energy-1.jpg',
    heading: <>Яка б буря не здіймалась —<br />PAGEL тримає!</>,
    subheading: 'Ми даємо вашій ідеї міцну основу.',
    text: 'PAGEL розробляє, виробляє та продає спеціальні та монтажні розчинні системи для точних машин, вітрових турбін, закріплення та ін\'єкційних робіт, а також системи ремонту бетону та промислових підлог.',
    btnLabel: 'Переглянути продукти',
    btnTo: '/products',
  },
  {
    bg: 'https://www.pagel.com/wp-content/uploads/2024/06/edit-60.jpg',
    heading: <>Якість.<br />З 1974 року.</>,
    subheading: 'Понад 50 років на ринку.',
    text: 'Понад 50 років продукти PAGEL Spezial-Beton GmbH &amp; Co. KG є синонімом неперевершеної якості та продуктивності.',
    btnLabel: 'Наші референції',
    btnTo: '/references',
  },
  {
    bg: 'https://www.pagel.com/wp-content/uploads/2025/05/test-10-finale.jpg',
    heading: <>PAGEL Technische<br />Mörtel</>,
    subheading: 'Розширений асортимент рішень.',
    text: 'Технічні розчини PAGEL — спеціалізовані продукти для вимогливих будівельних завдань. Якість, яка витримує будь-які умови.',
    btnLabel: 'Дізнатись більше',
    btnTo: '/products',
  },
  {
    bg: 'https://www.pagel.com/wp-content/uploads/2026/02/Slider_evoline_en_neu.jpg',
    heading: <>Знайомтесь —<br />PAGEL evoline</>,
    subheading: 'Нова ера монтажних розчинів.',
    text: 'evoline — інноваційна лінійка продуктів PAGEL з підвищеними екологічними характеристиками та покращеними механічними властивостями.',
    btnLabel: 'evoline →',
    btnTo: '/products/evoline',
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef(null);
  const navigate = useNavigate();

  const goTo = (index) => {
    setCurrent((index + SLIDES.length) % SLIDES.length);
  };

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000);
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(timerRef.current);
  }, []);

  const handleDot = (i) => { goTo(i); resetTimer(); };
  const handlePrev = () => { goTo(current - 1); resetTimer(); };
  const handleNext = () => { goTo(current + 1); resetTimer(); };

  const slide = SLIDES[current];

  return (
    <>
      <section className="hero-slider-section" aria-label="Hero слайдер">
        <div style={{ position: 'relative' }}>
          <div
            className="hero-track"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {SLIDES.map((s, i) => (
              <div className="hero-slide" key={i}>
                <div
                  className="hero-slide-bg"
                  style={{ backgroundImage: `url(${s.bg})` }}
                />
                <div className="hero-slide-content">
                  <h1>{s.heading}</h1>
                  {s.subheading && <h2>{s.subheading}</h2>}
                  <p>{s.text}</p>
                  <button
                    className="hero-btn"
                    onClick={() => navigate(s.btnTo)}
                  >
                    {s.btnLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          <button className="hero-arrow hero-arrow-prev" onClick={handlePrev} aria-label="Попередній слайд">&#10094;</button>
          <button className="hero-arrow hero-arrow-next" onClick={handleNext} aria-label="Наступний слайд">&#10095;</button>
        </div>

        <div className="hero-dots" role="tablist" aria-label="Навігація по слайдах">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-label={`Слайд ${i + 1}`}
              aria-selected={i === current}
              className={`hero-dot${i === current ? ' active' : ''}`}
              onClick={() => handleDot(i)}
            />
          ))}
        </div>
      </section>
    </>
  );
}
