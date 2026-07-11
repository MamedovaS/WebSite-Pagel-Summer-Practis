import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductById } from '../data/products';

const ProductPage = () => {
  const { category, slug } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  useEffect(() => {
    // Формуємо ID з категорії та slug
    const productId = slug;
    const productData = getProductById(productId);
    
    if (productData) {
      setProduct(productData);
      setLoading(false);
    } else {
      // Якщо продукт не знайдено - перенаправляємо на відповідну категорію
      navigate(`/products/${category || 'grout'}`);
    }
  }, [category, slug, navigate]);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  if (loading) {
    return (
      <div className="site-inner">
        <div className="wrap">
          <div style={{ padding: '80px 24px', textAlign: 'center' }}>
            <p>Завантаження...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="site-inner">
        <div className="wrap">
          <div style={{ padding: '80px 24px', textAlign: 'center' }}>
            <h1>Продукт не знайдено</h1>
            <Link to="/products" style={{ color: '#c8102e' }}>
              ← Повернутися до списку
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Визначаємо URL для повернення до категорії
  const categoryUrls = {
    'grout': '/products/grout',
    'concrete-repair': '/products/concrete-repair',
    'industrial-floors': '/products/industrial-floors',
    'reaction-resins': '/products/reaction-resins'
  };

  const categoryLabels = {
    'grout': 'Розчин для заливання',
    'concrete-repair': 'Ремонт бетону',
    'industrial-floors': 'Промислові підлоги',
    'reaction-resins': 'Реакційні смоли'
  };

  return (
    <>
      <Breadcrumbs items={product.breadcrumbs} />
      
      <div className="site-inner">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">
                  <div className="fl-builder-content">
                    <div className="fl-row fl-row-fixed-width fl-row-bg-none">
                      <div className="fl-row-content-wrap">
                        <div className="fl-row-content fl-row-full-width fl-node-content">
                          
                          {/* Посилання назад до категорії */}
                          <div style={{ marginBottom: 20 }}>
                            <Link 
                              to={categoryUrls[product.category] || '/products'} 
                              style={{ color: '#c8102e', textDecoration: 'none' }}
                            >
                              ← Повернутися до {categoryLabels[product.category] || 'категорії'}
                            </Link>
                          </div>
                          
                          {/* Заголовок */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color">
                              <div className="fl-module fl-module-rich-text">
                                <div className="fl-rich-text">
                                  <h1>{product.title}</h1>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Підзаголовок */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color">
                              <div className="fl-module fl-module-rich-text">
                                <div className="fl-rich-text">
                                  <h2>{product.subtitle}</h2>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Характеристики та технічні дані */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              <div className="fl-module fl-module-rich-text entry-content">
                                <div className="fl-rich-text">
                                  <ul>
                                    {product.features?.map((feature, index) => (
                                      <li key={index}>{feature}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                            
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              <div className="fl-module fl-module-rich-text entry-content">
                                <div className="fl-rich-text">
                                  <ul>
                                    {product.technicalData?.map((data, index) => (
                                      <li key={index}>{data}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              {product.category === 'grout' && (
                                <div className="fl-module fl-module-rich-text">
                                  <div className="fl-rich-text">
                                    <div>
                                      <img 
                                        decoding="async" 
                                        src="https://www.pagel.com/wp-content/images/logos/ce.jpg" 
                                        alt="CE маркування" 
                                        style={{ maxWidth: 80, marginRight: 10 }}
                                      />
                                      <img 
                                        decoding="async" 
                                        src="https://www.pagel.com/wp-content/images/logos/ue_qdb.jpg" 
                                        alt="Сертифікат відповідності DAfStb/VeBMR" 
                                        style={{ maxWidth: 80 }}
                                      />
                                    </div>
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Роздільник */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color">
                              <div className="fl-module fl-module-separator">
                                <div className="fl-separator"></div>
                              </div>
                            </div>
                          </div>

                          {/* Зображення та завантаження */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              <div className="fl-module fl-module-rich-text">
                                <div className="fl-rich-text">
                                  <div>
                                    <img 
                                      decoding="async" 
                                      src={product.image} 
                                      alt={product.title} 
                                      style={{ maxWidth: '100%' }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                            
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              {product.downloads?.technicalSheet && (
                                <div className="fl-module fl-module-rich-text">
                                  <div className="fl-rich-text">
                                    <div style={{ padding: '10px 20px 10px 15px', border: '1px solid #e5e5e5', marginBottom: 10 }}>
                                      <a 
                                        href={product.downloads.technicalSheet} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                        <i className="fas fa-file-pdf" aria-hidden="true"></i> Технічний паспорт
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}
                              
                              {product.downloads?.safetyDataSheet && (
                                <div className="fl-module fl-module-rich-text">
                                  <div className="fl-rich-text">
                                    <div style={{ padding: '10px 20px 10px 15px', border: '1px solid #e5e5e5', marginBottom: 10 }}>
                                      <a 
                                        href={product.downloads.safetyDataSheet} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                      >
                                        <i className="fas fa-file-pdf" aria-hidden="true"></i> Паспорт безпеки
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Акордеон для декларацій */}
                              {(product.downloads?.declarationOfPerformance || 
                                product.downloads?.certificate || 
                                product.downloads?.epd) && (
                                <div className="fl-module fl-module-accordion">
                                  <div className="fl-accordion fl-accordion-small fl-accordion-collapse">
                                    <div className="fl-accordion-item">
                                      <div 
                                        className="fl-accordion-button"
                                        onClick={toggleAccordion}
                                        style={{ cursor: 'pointer' }}
                                      >
                                        <span className="fl-accordion-button-label">
                                          Декларації та сертифікати
                                        </span>
                                        <span className="fl-accordion-button-icon fl-accordion-button-icon-right">
                                          <i className={isAccordionOpen ? 'fas fa-minus' : 'fas fa-plus'}>
                                            <span className="sr-only">
                                              {isAccordionOpen ? 'Згорнути' : 'Розгорнути'}
                                            </span>
                                          </i>
                                        </span>
                                      </div>
                                      <div 
                                        className="fl-accordion-content fl-clearfix" 
                                        style={{ 
                                          display: isAccordionOpen ? 'block' : 'none',
                                          padding: '10px 0'
                                        }}
                                      >
                                        <p>
                                          {product.downloads.declarationOfPerformance && (
                                            <>
                                              <a 
                                                href={product.downloads.declarationOfPerformance} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                              >
                                                <i className="fas fa-file-pdf" aria-hidden="true"></i> Декларація про експлуатаційні характеристики
                                              </a>
                                              <br />
                                            </>
                                          )}
                                          {product.downloads.certificate && (
                                            <>
                                              <a 
                                                href={product.downloads.certificate} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                              >
                                                <i className="fas fa-file-pdf" aria-hidden="true"></i> Сертифікат відповідності
                                              </a>
                                              <br />
                                            </>
                                          )}
                                          {product.downloads.epd && (
                                            <a 
                                              href={product.downloads.epd} 
                                              target="_blank" 
                                              rel="noopener noreferrer"
                                            >
                                              <i className="fas fa-file-pdf" aria-hidden="true"></i> Декларація про екологічні характеристики (EPD)
                                            </a>
                                          )}
                                        </p>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              )}

                              {/* Кнопка контакту */}
                              <div className="fl-module fl-module-button">
                                <div className="fl-button-wrap fl-button-width-full fl-button-left fl-button-has-icon">
                                  <Link to="/sales" className="fl-button">
                                    <i className="fl-button-icon fl-button-icon-before fas fa-caret-right" aria-hidden="true"></i>
                                    <span className="fl-button-text">Зв'яжіться з нами зараз</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Роздільник */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color">
                              <div className="fl-module fl-module-separator">
                                <div className="fl-separator"></div>
                              </div>
                            </div>
                          </div>

                          {/* Властивості та сфери застосування */}
                          <div className="fl-col-group">
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              <div className="fl-module fl-module-heading">
                                <h2 className="fl-heading">
                                  <span className="fl-heading-text">Властивості</span>
                                </h2>
                              </div>
                              <div className="fl-module fl-module-rich-text entry-content">
                                <div className="fl-rich-text">
                                  <ul>
                                    {product.properties?.map((property, index) => (
                                      <li key={index}>{property}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                              
                              {product.classification && product.classification.length > 0 && (
                                <>
                                  <div className="fl-module fl-module-heading">
                                    <h2 className="fl-heading">
                                      <span className="fl-heading-text">Класифікація</span>
                                    </h2>
                                  </div>
                                  <div className="fl-module fl-module-rich-text entry-content">
                                    <div className="fl-rich-text">
                                      <ul>
                                        {product.classification.map((item, index) => (
                                          <li key={index}>{item}</li>
                                        ))}
                                      </ul>
                                    </div>
                                  </div>
                                </>
                              )}
                            </div>
                            
                            <div className="fl-col fl-col-bg-color fl-col-small">
                              <div className="fl-module fl-module-heading">
                                <h2 className="fl-heading">
                                  <span className="fl-heading-text">Сфери застосування</span>
                                </h2>
                              </div>
                              <div className="fl-module fl-module-rich-text entry-content">
                                <div className="fl-rich-text">
                                  <ul>
                                    {product.applications?.map((application, index) => (
                                      <li key={index}>{application}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>

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

export default ProductPage;