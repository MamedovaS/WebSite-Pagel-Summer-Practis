import React from 'react';
import HeroSlider from '../components/HeroSlider';
import ReferencesSlider from '../components/ReferencesSlider';


const PRODUCTS_ROW1 = [
  { href: '/products/grout', img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_verguss.jpg', label: 'Заливальні розчини' },
  { href: '/products/concrete-repair', img: 'https://www.pagel.com/wp-content/uploads/2018/12/pg_cr.jpg', label: 'Ремонт бетону' },
  { href: '/products/industrial-floors', img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_industrieboden.jpg', label: 'Промислові підлоги та дорожнє покриття' },
];

const PRODUCTS_ROW2 = [
  { href: '/products/construction-products', img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_bauprodukte.jpg', label: 'Будівельні продукти' },
  { href: '/products/reaction-resins', img: 'https://www.pagel.com/wp-content/uploads/2018/11/pg_eh.jpg', label: 'Реакційні смоли' },
  { href: '/products/evoline', img: 'https://www.pagel.com/wp-content/uploads/2026/02/pagel_sack_gruen_Button1rz-1.jpg', label: 'PAGEL evoline' },
];

const FURTHER_TOPICS = [
  { href: 'https://www.pagel.com/all/pdf/en/lieferprogramm_en.pdf', img: 'https://www.pagel.com/wp-content/uploads/2026/03/Lieferprogramm.png', label: 'Асортимент продукції' },
  { href: 'https://www.pagel.com/de/individuelle-produktentwicklung/', img: 'https://www.pagel.com/wp-content/uploads/2024/03/671-x-671-px.png', label: 'Розробка продукту' },
  { href: '/downloads', img: 'https://www.pagel.com/wp-content/uploads/2019/02/wp_ds.jpg', label: 'Завантаження' },
  { href: '/innovations', img: 'https://www.pagel.com/wp-content/uploads/2026/03/pagel_innovation_neu_version_alle-Laender.png', label: 'Інновації' },
  { href: '/quality-assurance', img: 'https://www.pagel.com/wp-content/uploads/2024/08/Untitled-100.png', label: 'Контроль якості' },
];

function ProductGrid({ items }) {
  return (
    <div className="product-grid">
      {items.map((p) => (
        <div className="product-item" key={p.href}>
          <a href={p.href}>
            <img src={p.img} alt={p.label} loading="lazy" />
            <div className="product-caption">{p.label}</div>
          </a>
        </div>
      ))}
    </div>
  );
}

export default function HomePage() {
  const handleSearch = (e) => {
    e.preventDefault();
    const q = e.target.elements.s.value.trim();
    if (q) window.open(`https://www.pagel.com/en/?s=${encodeURIComponent(q)}`, '_blank');
  };

  return (
    <main className="site-inner">

      <div className="breadcrumbs-outer">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">&#8962; N-GROUP</a>
          </div>
        </div>
      </div>

      <article className="entry-content">
        {/* Product Range */}
        <section className="fl-row">
          <div className="wrap">
            <h2 className="section-heading">Асортимент продукції</h2>

            <div className="search-wrap">
              <form role="search" onSubmit={handleSearch}>
                <input type="search" name="s" placeholder="Що ви шукаєте?" aria-label="Пошук" />
                <button type="submit">Пошук</button>
              </form>
            </div>

            <ProductGrid items={PRODUCTS_ROW1} />
            <ProductGrid items={PRODUCTS_ROW2} />
          </div>
        </section>

        {/* References */}
        <section className="fl-row references-section">
          <div className="wrap">
            <div className="references-header">
              <h2>Референції</h2>
              <a href="/references" className="references-more">
                Більше референцій <span>&#128269;</span>
              </a>
            </div>
            <ReferencesSlider />
          </div>
        </section>

        {/* Further Topics */}
        <section className="fl-row">
          <div className="wrap">
            <div className="fl-separator" />
            <h2 className="section-heading">Додаткові теми</h2>
            <div className="further-grid">
              {FURTHER_TOPICS.map((t) => (
                <div className="product-item" key={t.href}>
                  <a href={t.href} target={t.href.startsWith('http') ? '_blank' : '_self'} rel={t.href.startsWith('http') ? 'noreferrer' : undefined}>
                    <img src={t.img} alt={t.label} loading="lazy" />
                    <div className="product-caption">{t.label}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      </article>

      {/* Sales Section */}
    <section className="sales-section" id="lp_sales">
        <div className="wrap">
          <div className="sales-grid">
            <div className="sales-col">
              <h2>ми не знаємо хз</h2>
            </div>
          </div>
        </div>
      </section>
    </main>

  );
}
