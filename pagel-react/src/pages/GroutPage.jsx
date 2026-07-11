import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductsByCategory } from '../data/products';

// --- Компонент категорії продуктів ---

const ProductCategory = ({ id, title, image, description, products }) => {
  return (
    <div className="fl-row fl-row-fixed-width">
      <div className="fl-row-content-wrap">
        <div className="fl-row-content fl-row-fixed-width fl-node-content">
          
          <div className="fl-col-group">
            <div className="fl-col fl-col-bg-color">
              <div id={id} className="fl-module fl-module-heading">
                <h1 className="fl-heading"><span className="fl-heading-text">{title}</span></h1>
              </div>
            </div>
          </div>

          <div className="fl-col-group">
            <div className="fl-col fl-col-bg-color fl-col-small">
              <div className="fl-module fl-module-photo fl-animation fl-fade-in">
                <div className="fl-photo fl-photo-align-center">
                  <img src={image} alt={title} className="fl-photo-img" />
                </div>
              </div>
            </div>
            <div className="fl-col fl-col-bg-color fl-col-small">
              <div className="fl-module fl-module-rich-text">
                <div className="fl-rich-text" dangerouslySetInnerHTML={{ __html: description }} />
              </div>
            </div>
          </div>

          <div className="fl-col-group">
            <div className="fl-col fl-col-bg-color">
              <div className="fl-module fl-module-heading">
                <h2 className="fl-heading">
                  <span className="fl-heading-text">
                    Наш вибір продуктів у категорії {title.toLowerCase()}:
                  </span>
                </h2>
              </div>
              <div className="fl-module fl-module-post-grid">
                <div className="fl-post-grid">
                  {products.map((product, index) => (
                    <div className="fl-post-column" key={index}>
                      <div className="fl-post-grid-post">
                        <div className="fl-post-grid-text">
                          <h2 className="fl-post-grid-title">
                            <Link to={`/products/grout/${product.id}`}>
                              {product.title}
                            </Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

// --- Сторінка Grout ---

const GroutPage = () => {
  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Розчин для заливання' },
  ];

  // Отримуємо всі продукти з категорії "grout"
  const groutProducts = getProductsByCategory('grout');
  
  // Фільтруємо продукти за підкатегоріями
  const standardProducts = groutProducts.filter(p => 
    ['v1-10', 'v1-50', 'v1-80', 'v1-160', 'v80c45', 'v160c45', 'v14-10', 'v14-40', 'v14-80'].includes(p.id)
  );
  
  const quickSettingProducts = groutProducts.filter(p => 
    ['v2-20', 'v2-50', 'v2-160', 'vb20', 'vb50', 'vb160', 'vb-p10', 'vt05', 'vt10', 'vt-p10'].includes(p.id)
  );
  
  const highStrengthProducts = groutProducts.filter(p => 
    ['v1-50hf', 'hf10', 'hf50', 'v1-30hf', 'v1-60hf'].includes(p.id)
  );
  
  const specialProducts = groutProducts.filter(p => 
    ['e1', 'e1f', 'e1-p', 'v15-50', 'v15-50sf', 'v1-50sf', 'vs', 'vs-p'].includes(p.id)
  );

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="site-inner">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">
                  
                  {/* Hero Section */}
                  <div className="fl-row fl-row-fixed-width fl-row-bg-none">
                    <div className="fl-row-content-wrap">
                      <div className="fl-row-content fl-row-fixed-width fl-node-content">
                        <div className="fl-col-group">
                          <div className="fl-col fl-col-bg-color">
                            <div className="fl-module fl-module-heading">
                              <h2 className="fl-heading"><span className="fl-heading-text">Продуктова область</span></h2>
                            </div>
                            <div className="fl-module fl-module-heading">
                              <h1 className="fl-heading"><span className="fl-heading-text">РОЗЧИН ДЛЯ ЗАЛИВАННЯ</span></h1>
                            </div>
                            <div className="fl-module fl-module-rich-text">
                              <div className="fl-rich-text">
                                <p>
                                  Вже понад п'ять десятиліть розчин PAGEL та бетон-розчин PAGEL є еталоном 
                                  відмінної якості, безпеки застосування та найвищої довговічності. Завдяки 
                                  нашим продуктам ви можете швидко, надійно та довговічно виконувати заливання: 
                                  прецизійних верстатів, турбін, генераторів, вітроенергетичних установок, 
                                  а також сталевих або залізобетонних конструкцій та багато іншого. У категоріях 
                                  «Стандартний розчин», «Високоміцний розчин», «Швидкотвердіючий розчин» та 
                                  «Розчин для спеціальних застосувань» ви знайдете правильний продукт для 
                                  кожного конкретного випадку.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Category Navigation */}
                  <div className="fl-row fl-row-fixed-width">
                    <div className="fl-row-content-wrap">
                      <div className="fl-row-content fl-row-fixed-width fl-node-content">
                        <div className="fl-col-group">
                          <div className="fl-col fl-col-bg-color fl-col-has-cols">
                            <div className="fl-module fl-module-rich-text">
                              <div className="fl-rich-text">
                                <h2>Категорії продуктів для заливання:</h2>
                              </div>
                            </div>
                            <div className="fl-col-group fl-col-group-nested">
                              {[
                                { href: '#standardverguss', src: 'https://www.pagel.com/wp-content/uploads/2020/12/verguss-300x201.jpg', label: 'Стандартний розчин' },
                                { href: '#schnellverguss', src: 'https://www.pagel.com/wp-content/uploads/2023/04/schnellverguss-300x201.jpg', label: 'Швидкотвердіючий розчин' },
                                { href: '#hochfestverguss', src: 'https://www.pagel.com/wp-content/uploads/2020/12/hochfestverguss-1-300x201.jpg', label: 'Високоміцний розчин' },
                                { href: '#sonderanwendungen', src: 'https://www.pagel.com/wp-content/uploads/2019/02/vs-p-300x201.jpg', label: 'Спеціальні застосування' },
                              ].map((item) => (
                                <div className="fl-col fl-col-bg-color fl-col-small" key={item.href}>
                                  <div className="fl-module fl-module-photo fl-animation fl-fade-in hover-zoom-in">
                                    <div className="fl-photo fl-photo-align-center">
                                      <a href={item.href}>
                                        <img src={item.src} alt={item.label} className="fl-photo-img" />
                                      </a>
                                      <div className="fl-photo-caption fl-photo-caption-below">{item.label}</div>
                                    </div>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Розділювач */}
                  <div className="fl-row fl-row-fixed-width">
                    <div className="fl-row-content-wrap">
                      <div className="fl-separator"></div>
                    </div>
                  </div>

                  {/* Категорії продуктів */}
                  {standardProducts.length > 0 && (
                    <ProductCategory
                      id="standardverguss"
                      title="СТАНДАРТНИЙ РОЗЧИН"
                      image="https://www.pagel.com/wp-content/uploads/2020/12/verguss.jpg"
                      description={`
                        <p>Наші стандартні розчини для заливання - часто також звані набухаючими розчинами - ідеально підходять і є незамінними для заливання прецизійних верстатів усіх видів, сталевих і бетонних конструкцій або підкранових рейок. Завдяки видатній довговічності та високій ранній і кінцевій міцності наші стандартні розчини ідеально підходять навіть для заливання конструкцій, що піддаються впливу екстремальних умов навколишнього середовища, таких як заморожування-відтавання з використанням антиожеледних солей або без них.</p>
                        <p>Завдяки бетону для заливання V80C45 та V160C45 можливе виконання навіть конструктивних ремонтних заходів згідно з директивою DAfStb щодо захисту та ремонту бетонних конструкцій.</p>
                      `}
                      products={standardProducts}
                    />
                  )}

                  {quickSettingProducts.length > 0 && (
                    <ProductCategory
                      id="schnellverguss"
                      title="ШВИДКОТВЕРДІЮЧИЙ РОЗЧИН"
                      image="https://www.pagel.com/wp-content/uploads/2023/04/schnellverguss.jpg"
                      description={`
                        <p>Надзвичайно швидкий набір міцності в поєднанні з високою безпекою застосування забезпечили нам унікальну репутацію на ринку. Наші турбо-розчини та блискавичні розчини PAGEL дозволяють уникнути часу очікування при розпалубці навіть за дуже низьких температур, роблячи ваші будівельні роботи більш рентабельними. Завдяки високій текучості та легкості обробки гарантується бездоганне заливання. Доведена стійкість до морозу та антиожеледних солей, а також до сульфатів дозволяє застосовувати продукт навіть у найскладніших умовах.</p>
                      `}
                      products={quickSettingProducts}
                    />
                  )}

                  {highStrengthProducts.length > 0 && (
                    <ProductCategory
                      id="hochfestverguss"
                      title="ВИСОКОМІЦНИЙ РОЗЧИН"
                      image="https://www.pagel.com/wp-content/uploads/2020/12/hochfestverguss-1.jpg"
                      description={`
                        <p>Сучасні залізобетонні та попередньо напружені бетонні конструкції, такі як об'єкти інфраструктури та вітрові турбіни, піддаються дуже високим механічним навантаженням. Ці екстремальні вимоги потребують безпечного та надійного з'єднання між елементами конструкції та основою. Наші високоміцні розчини та високоміцні бетони характеризуються швидким набором міцності та високою міцністю на стиск, а також чудовими характеристиками довговічності, включаючи підтверджену стійкість до морозу, заморожування-відтавання та антиожеледних солей, а також втомну міцність. Завдяки чудовим експлуатаційним характеристикам, легке застосування наших високоміцних розчинів гарантується навіть через спеціально довгі насосні шланги.</p>
                      `}
                      products={highStrengthProducts}
                    />
                  )}

                  {specialProducts.length > 0 && (
                    <ProductCategory
                      id="sonderanwendungen"
                      title="СПЕЦІАЛЬНІ ЗАСТОСУВАННЯ"
                      image="https://www.pagel.com/wp-content/uploads/2019/02/vs-p.jpg"
                      description={`
                        <p>Ми в PAGEL швидко та ефективно реагуємо на специфічні вимоги наших клієнтів. Як інноваційна компанія, ми в тісній співпраці з нашими клієнтами розробляємо нові продукти, адаптовані до їхніх потреб. Такі спеціальні розчини включають, окрім розчинів для з'єднання збірних елементів, також спеціальні сталефіброві розчини з базальтовими заповнювачами. Для анкерування та ін'єкцій ми також маємо правильний продукт для ваших вимог.</p>
                      `}
                      products={specialProducts}
                    />
                  )}

                </div>
              </article>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};

export default GroutPage;