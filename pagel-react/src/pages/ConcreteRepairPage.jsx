import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductsByCategoryAndSubcategory } from '../data/products';
import './1.css';

const IndustrialFloorsPage = () => {
  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Промислові підлоги' }
  ];

  const categories = [
    {
      title: 'Промислові підлоги та покриття:',
      products: getProductsByCategoryAndSubcategory('industrial-floors', 'floor')
    },
    {
      title: 'Ремонт бетону та основи:',
      products: getProductsByCategoryAndSubcategory('industrial-floors', 'repair-concrete')
    }
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="site-inner">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">
                  <div className="fl-module fl-module-heading">
                    <h1 className="fl-heading">
                      <span className="fl-heading-text">Промислові підлоги та зони руху</span>
                    </h1>
                  </div>

                  <div className="fl-module fl-module-rich-text">
                    <div className="fl-rich-text">
                      <p>
                        Промислові підлоги піддаються найвищим механічним навантаженням. 
                        PAGEL пропонує високоміцні продукти з підвищеною зносостійкістю.
                      </p>
                    </div>
                  </div>

                  <hr className="fl-separator" />

                  {categories.map((cat, idx) => (
                    cat.products && cat.products.length > 0 && (
                      <section key={idx} className="fl-module" style={{ marginBottom: '32px' }}>
                        <h2 className="section-heading">{cat.title}</h2>
                        <div className="fl-post-grid">
                          {cat.products.map(p => (
                            <div key={p.id} className="fl-post-column">
                              <div className="fl-post-grid-post">
                                <h3 className="fl-post-grid-title">
                                  <Link to={`/products/industrial-floors/${p.slug}`}>
                                    {p.title}
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    )
                  ))}

                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default IndustrialFloorsPage;