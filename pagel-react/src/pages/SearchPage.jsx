import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { searchProducts, getProductCategories } from '../data/products';

const SearchPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (query) {
      const searchResults = searchProducts(query);
      setResults(searchResults);
      
      // Отримуємо категорії з результатів
      const cats = {};
      searchResults.forEach(p => {
        if (!cats[p.category]) cats[p.category] = 0;
        cats[p.category]++;
      });
      setCategories(Object.keys(cats));
      
      // Фільтруємо за категорією
      if (selectedCategory === 'all') {
        setFilteredResults(searchResults);
      } else {
        setFilteredResults(searchResults.filter(p => p.category === selectedCategory));
      }
    } else {
      setResults([]);
      setFilteredResults([]);
      setCategories([]);
    }
  }, [query, selectedCategory]);

  // Визначення назви категорії
  const getCategoryLabel = (category) => {
    const labels = {
      'grout': 'Розчин для заливання',
      'concrete-repair': 'Ремонт бетону',
      'industrial-floors': 'Промислові підлоги',
      'reaction-resins': 'Реакційні смоли',
      'construction-products': 'Будівельні продукти',
      'evoline': 'evoline'
    };
    return labels[category] || category;
  };

  // Визначення іконки категорії
  const getCategoryIcon = (category) => {
    const icons = {
      'grout': 'fa-cubes',
      'concrete-repair': 'fa-hammer',
      'industrial-floors': 'fa-building',
      'reaction-resins': 'fa-flask',
      'construction-products': 'fa-tools',
      'evoline': 'fa-leaf'
    };
    return icons[category] || 'fa-box';
  };

  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: `Результати пошуку: "${query}"` }
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
                  <div className="fl-row fl-row-fixed-width">
                    <div className="fl-row-content-wrap">
                      <div className="fl-row-content fl-row-fixed-width fl-node-content">
                        
                        <div className="fl-col-group">
                          <div className="fl-col fl-col-bg-color">
                            <h1 style={{ fontSize: 28, marginBottom: 8 }}>
                              Результати пошуку
                            </h1>
                            <p style={{ color: '#666', fontSize: 16, marginBottom: 20 }}>
                              {query ? (
                                <>Знайдено <strong>{filteredResults.length}</strong> результатів за запитом "<strong>{query}</strong>"</>
                              ) : (
                                'Введіть пошуковий запит'
                              )}
                            </p>
                          </div>
                        </div>

                        {/* Фільтри категорій */}
                        {categories.length > 0 && (
                          <div className="fl-col-group" style={{ marginBottom: 24 }}>
                            <div className="fl-col fl-col-bg-color">
                              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                                <button
                                  onClick={() => setSelectedCategory('all')}
                                  style={{
                                    padding: '6px 16px',
                                    border: selectedCategory === 'all' ? '2px solid #c8102e' : '1px solid #ddd',
                                    borderRadius: 20,
                                    background: selectedCategory === 'all' ? '#c8102e' : 'transparent',
                                    color: selectedCategory === 'all' ? '#fff' : '#333',
                                    cursor: 'pointer',
                                    fontSize: 13,
                                    fontWeight: 500,
                                    transition: 'all 0.2s'
                                  }}
                                >
                                  Всі ({results.length})
                                </button>
                                {categories.map(cat => {
                                  const count = results.filter(p => p.category === cat).length;
                                  return (
                                    <button
                                      key={cat}
                                      onClick={() => setSelectedCategory(cat)}
                                      style={{
                                        padding: '6px 16px',
                                        border: selectedCategory === cat ? '2px solid #c8102e' : '1px solid #ddd',
                                        borderRadius: 20,
                                        background: selectedCategory === cat ? '#c8102e' : 'transparent',
                                        color: selectedCategory === cat ? '#fff' : '#333',
                                        cursor: 'pointer',
                                        fontSize: 13,
                                        fontWeight: 500,
                                        transition: 'all 0.2s'
                                      }}
                                    >
                                      {getCategoryLabel(cat)} ({count})
                                    </button>
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        )}

                        {/* Результати */}
                        <div className="fl-col-group">
                          {filteredResults.length > 0 ? (
                            filteredResults.map((product) => (
                              <div className="fl-col fl-col-bg-color" key={product.id} style={{ width: '50%' }}>
                                <Link
                                  to={`/products/${product.category}/${product.slug}`}
                                  style={{
                                    display: 'block',
                                    padding: '16px 20px',
                                    marginBottom: 12,
                                    border: '1px solid #eee',
                                    borderRadius: 8,
                                    textDecoration: 'none',
                                    color: '#333',
                                    transition: 'all 0.2s',
                                    backgroundColor: '#fff'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.08)';
                                    e.currentTarget.style.borderColor = '#c8102e';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.boxShadow = 'none';
                                    e.currentTarget.style.borderColor = '#eee';
                                  }}
                                >
                                  <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                      width: 48,
                                      height: 48,
                                      borderRadius: 6,
                                      backgroundColor: '#f5f5f5',
                                      display: 'flex',
                                      alignItems: 'center',
                                      justifyContent: 'center',
                                      marginRight: 16,
                                      color: '#c8102e',
                                      fontSize: 20
                                    }}>
                                      <i className={`fas ${getCategoryIcon(product.category)}`}></i>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                      <div style={{ fontWeight: 600, fontSize: 16 }}>
                                        {product.title}
                                      </div>
                                      <div style={{ fontSize: 13, color: '#666', marginTop: 4 }}>
                                        {product.subtitle}
                                      </div>
                                      <div style={{ 
                                        fontSize: 12, 
                                        color: '#c8102e', 
                                        marginTop: 6,
                                        display: 'inline-block',
                                        padding: '2px 10px',
                                        backgroundColor: '#fef0f0',
                                        borderRadius: 12
                                      }}>
                                        {getCategoryLabel(product.category)}
                                      </div>
                                    </div>
                                    <i className="fas fa-chevron-right" style={{ color: '#ccc' }}></i>
                                  </div>
                                </Link>
                              </div>
                            ))
                          ) : (
                            <div className="fl-col fl-col-bg-color" style={{ textAlign: 'center', padding: '40px 0' }}>
                              {query ? (
                                <>
                                  <i className="fas fa-search" style={{ fontSize: 48, color: '#ddd', marginBottom: 16 }}></i>
                                  <h3 style={{ color: '#666' }}>Нічого не знайдено</h3>
                                  <p style={{ color: '#999' }}>
                                    За запитом "<strong>{query}</strong>" не знайдено жодного продукту
                                  </p>
                                  <Link to="/products" style={{ color: '#c8102e', textDecoration: 'none' }}>
                                    Переглянути всі продукти →
                                  </Link>
                                </>
                              ) : (
                                <p style={{ color: '#999' }}>Введіть пошуковий запит для пошуку продуктів</p>
                              )}
                            </div>
                          )}
                        </div>

                      </div>
                    </div>
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

export default SearchPage;