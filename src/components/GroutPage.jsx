import React from 'react';
import { Link } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';

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
                          <h3 className="fl-post-grid-title">
                            <Link to={product.link}>{product.name}</Link>
                          </h3>
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

// --- ГОЛОВНА СТОРІНКА GROUT ---

const GroutPage = () => {
  // Дані для категорій
  const standardProducts = [
    { name: 'V1/10 Розчин для заливання PAGEL', link: '/products/grout/v1-10' },
    { name: 'V1/50 Розчин для заливання PAGEL', link: '/products/grout/v1-50' },
    { name: 'V1/80 Розчин для заливання PAGEL', link: '/products/grout/v1-80' },
    { name: 'V1/160 Розчин для заливання PAGEL', link: '/products/grout/v1-160' },
    { name: 'V80C45 Бетон для заливання', link: '/products/grout/v80c45' },
    { name: 'V160C45 Бетон для заливання', link: '/products/grout/v160c45' },
    { name: 'V14/10 Розчин для підливки', link: '/products/grout/v14-10' },
    { name: 'V14/40 Розчин для підливки', link: '/products/grout/v14-40' },
    { name: 'V14/80 Розчин для підливки', link: '/products/grout/v14-80' },
  ];

  const quickSettingProducts = [
    { name: 'V2/20 Швидкотвердіючий розчин', link: '/products/grout/v2-20' },
    { name: 'V2/50 Швидкотвердіючий розчин', link: '/products/grout/v2-50' },
    { name: 'V2/160 Швидкотвердіючий розчин', link: '/products/grout/v2-160' },
    { name: 'VB20 Блискавичний розчин', link: '/products/grout/vb20' },
    { name: 'VB50 Блискавичний розчин', link: '/products/grout/vb50' },
    { name: 'VB160 Блискавичний розчин', link: '/products/grout/vb160' },
    { name: 'VB-P10 Блискавичний розчин', link: '/products/grout/vb-p10' },
    { name: 'VT05 Турбо-розчин', link: '/products/grout/vt05' },
    { name: 'VT10 Турбо-розчин', link: '/products/grout/vt10' },
    { name: 'VT-P10 Турбо-розчин', link: '/products/grout/vt-p10' },
  ];

  const highStrengthProducts = [
    { name: 'V1/50HF Високоміцний розчин (C90/105)', link: '/products/grout/v1-50hf' },
    { name: 'HF10 Високоміцний розчин (C100/115)', link: '/products/grout/hf10' },
    { name: 'HF50 Високоміцний розчин (C100/115)', link: '/products/grout/hf50' },
    { name: 'V1/30HF Високоміцний розчин (C100/115)', link: '/products/grout/v1-30hf' },
    { name: 'V1/60HF Високоміцний розчин (C100/115)', link: '/products/grout/v1-60hf' },
  ];

  const specialProducts = [
    { name: 'E1 Анкерний розчин', link: '/products/grout/e1' },
    { name: 'E1F Анкерний розчин для заливання', link: '/products/grout/e1f' },
    { name: 'E1-P Анкерний розчин', link: '/products/grout/e1-p' },
    { name: 'V15/50 Базальтовий розчин', link: '/products/grout/v15-50' },
    { name: 'V15/50SF Сталефібровий базальтовий розчин', link: '/products/grout/v15-50sf' },
    { name: 'V1/50SF Сталефібровий розчин', link: '/products/grout/v1-50sf' },
    { name: 'VS Розчин для заливання', link: '/products/grout/vs' },
    { name: 'VS-P Розчин для швів', link: '/products/grout/vs-p' },
  ];

  return (
    <>
      <Breadcrumbs 
        items={[
          { label: 'Продукти', link: '/products' },
          { label: 'Розчин для заливання' },
        ]} 
      />
      
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
                              <div className="fl-heading"><span className="fl-heading-text">Продуктова область</span></div>
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
                  <ProductCategory
                    id="standardverguss"
                    title="СТАНДАРТНИЙ РОЗЧИН"
                    image="https://www.pagel.com/wp-content/uploads/2020/12/verguss.jpg"
                    description="<p>Наші стандартні розчини для заливання - часто також звані набухаючими розчинами - ідеально підходять і є незамінними для заливання прецизійних верстатів усіх видів, сталевих і бетонних конструкцій або підкранових рейок. Завдяки видатній довговічності та високій ранній і кінцевій міцності наші стандартні розчини ідеально підходять навіть для заливання конструкцій, що піддаються впливу екстремальних умов навколишнього середовища, таких як заморожування-відтавання з використанням антиожеледних солей або без них.</p><p>Завдяки бетону для заливання V80C45 та V160C45 можливе виконання навіть конструктивних ремонтних заходів згідно з директивою DAfStb щодо захисту та ремонту бетонних конструкцій.</p>"
                    products={standardProducts}
                  />

                  <ProductCategory
                    id="schnellverguss"
                    title="ШВИДКОТВЕРДІЮЧИЙ РОЗЧИН"
                    image="https://www.pagel.com/wp-content/uploads/2023/04/schnellverguss.jpg"
                    description="<p>Надзвичайно швидкий набір міцності в поєднанні з високою безпекою застосування забезпечили нам унікальну репутацію на ринку. Наші турбо-розчини та блискавичні розчини PAGEL дозволяють уникнути часу очікування при розпалубці навіть за дуже низьких температур, роблячи ваші будівельні роботи більш рентабельними. Завдяки високій текучості та легкості обробки гарантується бездоганне заливання. Доведена стійкість до морозу та антиожеледних солей, а також до сульфатів дозволяє застосовувати продукт навіть у найскладніших умовах.</p>"
                    products={quickSettingProducts}
                  />

                  <ProductCategory
                    id="hochfestverguss"
                    title="ВИСОКОМІЦНИЙ РОЗЧИН"
                    image="https://www.pagel.com/wp-content/uploads/2020/12/hochfestverguss-1.jpg"
                    description="<p>Сучасні залізобетонні та попередньо напружені бетонні конструкції, такі як об'єкти інфраструктури та вітрові турбіни, піддаються дуже високим механічним навантаженням. Ці екстремальні вимоги потребують безпечного та надійного з'єднання між елементами конструкції та основою. Наші високоміцні розчини та високоміцні бетони характеризуються швидким набором міцності та високою міцністю на стиск, а також чудовими характеристиками довговічності, включаючи підтверджену стійкість до морозу, заморожування-відтавання та антиожеледних солей, а також втомну міцність. Завдяки чудовим експлуатаційним характеристикам, легке застосування наших високоміцних розчинів гарантується навіть через спеціально довгі насосні шланги.</p>"
                    products={highStrengthProducts}
                  />

                  <ProductCategory
                    id="sonderanwendungen"
                    title="СПЕЦІАЛЬНІ ЗАСТОСУВАННЯ"
                    image="https://www.pagel.com/wp-content/uploads/2019/02/vs-p.jpg"
                    description="<p>Ми в PAGEL швидко та ефективно реагуємо на специфічні вимоги наших клієнтів. Як інноваційна компанія, ми в тісній співпраці з нашими клієнтами розробляємо нові продукти, адаптовані до їхніх потреб. Такі спеціальні розчини включають, окрім розчинів для з'єднання збірних елементів, також спеціальні сталефіброві розчини з базальтовими заповнювачами. Для анкерування та ін'єкцій ми також маємо правильний продукт для ваших вимог.</p>"
                    products={specialProducts}
                  />

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