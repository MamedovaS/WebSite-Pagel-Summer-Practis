import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductsByCategoryAndSubcategory } from '../data/products';
import './1.css';

const ReactionResinsPage = () => {
  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Реакційні смоли' }
  ];

  // Категорії продуктів
  const categories = [
    {
      title: 'Епоксидна ґрунтовка/сполучний матеріал:',
      products: getProductsByCategoryAndSubcategory('reaction-resins', 'primer-binder')
    },
    {
      title: 'Епоксидний розчин:',
      products: getProductsByCategoryAndSubcategory('reaction-resins', 'mortar')
    },
    {
      title: 'Епоксидний розчин для заливання:',
      products: getProductsByCategoryAndSubcategory('reaction-resins', 'grout')
    },
    {
      title: 'Допоміжні засоби для нанесення:',
      products: getProductsByCategoryAndSubcategory('reaction-resins', 'application-aids')
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
                      <span className="fl-heading-text">Реакційні смоли</span>
                    </h1>
                  </div>

                  <div className="fl-module fl-module-rich-text">
                    <div className="fl-rich-text">
                      <p>
                        Окрім відомих мінеральних розчинів для заливання та ремонту, PAGEL
                        пропонує рідкі пластики на основі епоксидної смоли для промислових
                        застосувань та захисту поверхонь. Захист бетону, адгезійні мости
                        та спеціальні ґрунтовки (наприклад, для поверхонь, забруднених
                        оливою, або вологих основ) — лише частина доступної програми
                        продуктів.
                      </p>
                    </div>
                  </div>

                  <hr className="fl-separator" />

                  {/* Рендеринг категорій */}
                  {categories.map((cat, idx) => (
                    cat.products && cat.products.length > 0 && (
                      <section key={idx} className="fl-module" style={{ marginBottom: '32px' }}>
                        <h2 className="section-heading">{cat.title}</h2>
                        <div className="fl-post-grid">
                          {cat.products.map(p => (
                            <div key={p.id} className="fl-post-column">
                              <div className="fl-post-grid-post">
                                <h3 className="fl-post-grid-title">
                                  <Link to={`/products/reaction-resins/${p.slug}`}>
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

export default ReactionResinsPage;