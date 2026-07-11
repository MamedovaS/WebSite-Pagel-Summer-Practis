import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductsByCategoryAndSubcategory } from '../data/products';

const IndustrialFloorsPage = () => {
  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Промислові підлоги' }
  ];

  const floorProducts = getProductsByCategoryAndSubcategory('industrial-floors', 'floor');
  const repairProducts = getProductsByCategoryAndSubcategory('industrial-floors', 'repair-concrete');

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="site-inner">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">
                  <h1>Промислові підлоги та зони руху</h1>
                  <p>Промислові підлоги піддаються найвищим механічним навантаженням. PAGEL пропонує високоміцні продукти з підвищеною зносостійкістю.</p>
                  
                  <div style={{ marginTop: 30 }}>
                    <h2>Категорії:</h2>
                    <ul>
                      {floorProducts.map(p => (
                        <li key={p.id}><Link to={`/products/industrial-floors/${p.slug}`}>{p.title}</Link></li>
                      ))}
                      {repairProducts.map(p => (
                        <li key={p.id}><Link to={`/products/industrial-floors/${p.slug}`}>{p.title}</Link></li>
                      ))}
                    </ul>
                  </div>
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