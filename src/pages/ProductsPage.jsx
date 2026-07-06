import React from 'react';
import { Link } from 'react-router-dom';

const PRODUCTS_ROW1 = [
  {
    href: '/products/grout',
    externalHref: 'https://www.pagel.com/en/products/grout/',
    img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_verguss.jpg',
    label: 'Заливальні розчини',
  },
  {
    href: '/products/concrete-repair',
    externalHref: 'https://www.pagel.com/en/products/concrete-repair/',
    img: 'https://www.pagel.com/wp-content/uploads/2018/12/pg_cr.jpg',
    label: 'Ремонт бетону',
  },
  {
    href: '/products/industrial-floors',
    externalHref: 'https://www.pagel.com/en/products/industrial-floors/',
    img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_industrieboden.jpg',
    label: 'Промислові підлоги та дорожнє покриття',
  },
];

const PRODUCTS_ROW2 = [
  {
    href: '/products/construction-products',
    externalHref: 'https://www.pagel.com/en/products/construction-products/',
    img: 'https://www.pagel.com/wp-content/uploads/2020/12/wp_bauprodukte.jpg',
    label: 'Будівельні продукти',
  },
  {
    href: '/products/reaction-resins',
    externalHref: 'https://www.pagel.com/en/products/reaction-resins/',
    img: 'https://www.pagel.com/wp-content/uploads/2018/11/pg_eh.jpg',
    label: 'Реакційні смоли',
  },
  {
    href: '/products/evoline',
    externalHref: 'https://www.pagel.com/en/products/evoline/',
    img: 'https://www.pagel.com/wp-content/uploads/2026/02/pagel_sack_gruen_Button1rz.jpg',
    label: 'PAGEL evoline',
  },
];

const DOCS_ROW = [
  {
    href: 'https://www.pagel.com/en/technical-data-sheets/',
    img: 'https://www.pagel.com/wp-content/uploads/2019/02/wp_ds.jpg',
    label: 'Завантаження',
    external: true,
  },
  {
    href: 'https://www.pagel.com/en/sales/',
    img: 'https://www.pagel.com/wp-content/uploads/2024/06/wp_aussendienst.jpg',
    label: 'Відділ продажів',
    external: true,
  },
];

function ProductCard({ item }) {
  const isExternal = item.external || item.externalHref;

  if (isExternal && item.external) {
    return (
      <div className="product-item">
        <a href={item.href} target="_blank" rel="noreferrer noopener">
          <img src={item.img} alt={item.label} loading="lazy" />
          {item.label && <div className="product-caption">{item.label}</div>}
        </a>
      </div>
    );
  }

  return (
    <div className="product-item">
      <Link to={item.href}>
        <img src={item.img} alt={item.label} loading="lazy" />
        <div className="product-caption">{item.label}</div>
      </Link>
    </div>
  );
}

export default function ProductsPage() {
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
            <Link to="/">&#8962; PAGEL</Link>
            <span aria-label="breadcrumb separator"> / </span>
            <span>Продукти</span>
          </div>
        </div>
      </div>

      <article className="entry-content">
        <section className="fl-row">
          <div className="wrap">

            {/* Page header */}
            <div style={{ marginBottom: 32 }}>
              <p style={{ fontSize: 13, color: '#888', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 6 }}>
                Огляд продукції
              </p>
              <h1 style={{ fontSize: 'clamp(24px, 4vw, 36px)', fontWeight: 700, marginBottom: 16, color: '#1a1a1a' }}>
                Наш асортимент продукції
              </h1>
              <p style={{ fontSize: 15, color: '#555', lineHeight: 1.7, maxWidth: 640 }}>
                PAGEL пропонує широкий асортимент високоякісних продуктів. В огляді продукції ви легко знайдете будь-які специфікації, що вас цікавлять.
              </p>
            </div>

            {/* Search */}
            <div className="search-wrap">
              <form role="search" onSubmit={handleSearch}>
                <input
                  type="search"
                  name="s"
                  placeholder="Що ви шукаєте?"
                  aria-label="Пошук продуктів"
                />
                <button type="submit">Пошук</button>
              </form>
            </div>

            {/* Products row 1 */}
            <div className="product-grid">
              {PRODUCTS_ROW1.map((p) => (
                <ProductCard key={p.href} item={p} />
              ))}
            </div>

            {/* Products row 2 */}
            <div className="product-grid" style={{ marginTop: 20 }}>
              {PRODUCTS_ROW2.map((p) => (
                <ProductCard key={p.href} item={p} />
              ))}
            </div>

            {/* Separator + Documents section */}
            <div className="fl-separator" style={{ marginTop: 48 }} />

            <h2 className="section-heading">Документи та контакт</h2>

            <div className="product-grid">
              {DOCS_ROW.map((p) => (
                <ProductCard key={p.href} item={p} />
              ))}
              {/* empty third cell to keep 3-col grid */}
              <div />
            </div>

          </div>
        </section>
      </article>
    </main>
  );
}
