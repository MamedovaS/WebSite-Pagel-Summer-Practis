import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductsByCategoryAndSubcategory } from '../data/products';

const ConcreteRepairPage = () => {
  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Ремонт бетону' }
  ];

  // Отримуємо всі продукти з категорії concrete-repair
  const corrosionProducts = getProductsByCategoryAndSubcategory('concrete-repair', 'corrosion-protection');
  const structuralProducts = getProductsByCategoryAndSubcategory('concrete-repair', 'structural');
  const repairProducts = getProductsByCategoryAndSubcategory('concrete-repair', 'repair');
  const potableWaterProducts = getProductsByCategoryAndSubcategory('concrete-repair', 'potable-water');

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      <div className="site-inner">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">
                  <h1>Ремонт бетону</h1>
                  <p>Продукти PAGEL для ремонту та відновлення бетону пропонують широкий спектр рішень — від швидких ремонтних робіт до конструктивного відновлення конструкцій.</p>
                  
                  {/* Тут можна додати категорії продуктів для ремонту бетону */}
                  <div style={{ marginTop: 30 }}>
                    <h2>Категорії:</h2>
                    <ul>
                      {corrosionProducts.map(p => (
                        <li key={p.id}><Link to={`/products/concrete-repair/${p.slug}`}>{p.title}</Link></li>
                      ))}
                      {structuralProducts.map(p => (
                        <li key={p.id}><Link to={`/products/concrete-repair/${p.slug}`}>{p.title}</Link></li>
                      ))}
                      {repairProducts.map(p => (
                        <li key={p.id}><Link to={`/products/concrete-repair/${p.slug}`}>{p.title}</Link></li>
                      ))}
                      {potableWaterProducts.map(p => (
                        <li key={p.id}><Link to={`/products/concrete-repair/${p.slug}`}>{p.title}</Link></li>
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

export default ConcreteRepairPage;