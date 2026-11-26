import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import { getProductById } from '../data/products';
import './1.css';

// --- SEO-дані сторінки ---
const PAGE_TITLE = 'Ремонт бетону: ремонтні розчини PCC та SPCC, структурний ремонт | PAGEL Україна';
const PAGE_DESCRIPTION =
  'Ремонт бетону від PAGEL: антикорозійний захист арматури, структурний ремонт, ремонтні розчини PCC та SPCC, ремонт каналізації, облицювання резервуарів питної води та захист бетонних поверхонь.';

// --- Категорії ремонту бетону ---
// id: якір у адресі сторінки; image: фото розділу;
// items: продукти (code — назва, desc — короткий опис, id — ідентифікатор сторінки продукту, якщо вона є)
const CATEGORIES = [
  {
    id: 'korozia',
    title: 'ЗАХИСТ ВІД КОРОЗІЇ ТА АДГЕЗІЙНИЙ ШАР',
    navLabel: 'Захист від корозії та адгезійний шар',
    image: 'https://www.pagel.com/wp-content/uploads/2021/11/mh02_rm02-4.jpg',
    listTitle: 'Продукти для антикорозійного захисту арматури та адгезійних шарів:',
    description: [
      'Антикорозійні ґрунтовки та адгезійні шари є невід’ємною частиною ремонтних систем PCC і SPCC від PAGEL. Вони захищають оголену арматуру від повторної корозії та створюють міцне зчеплення між старою основою і наступними ремонтними шарами.',
    ],
    items: [
      { code: 'RM02', desc: 'Антикорозійний захист арматури та адгезійний шар', id: 'rm02' },
      { code: 'MH02', desc: 'Адгезійний шар (ґрунтовка) для ремонтних систем', id: 'mh02' },
    ],
  },
  {
    id: 'structural',
    title: 'СТРУКТУРНИЙ РЕМОНТ БЕТОНУ',
    navLabel: 'Структурний ремонт',
    image: 'https://www.pagel.com/wp-content/uploads/2020/12/konstruktive_instandsetzung.jpg',
    listTitle: 'Матеріали для структурного ремонту та відновлення несучої здатності:',
    description: [
      'Структурний ремонт повертає пошкодженим бетонним спорудам несучу здатність. Наші конструкційні ремонтні розчини вирізняються винятковою довговічністю: усі показники підтверджені складними випробуваннями, мають загальний сертифікат будівельних випробувань (abP) і загальний допуск будівельного нагляду (abZ).',
      'Суміші для структурного ремонту можна застосовувати відповідно до ZTV-ING та директиви DAfStb Rili SIB. Для відновлення герметичності споруд WHG/LAU, де зберігають і транспортують речовини, небезпечні для води, передбачено окремий ремонтний розчин FD20.',
    ],
    items: [
      { code: 'CM20', desc: 'Суміш для структурного ремонту бетону (PCC/SPCC)', id: 'cm20' },
      { code: 'TF10', desc: 'CARBOrefit® — тонкозернистий текстильбетон' },
      { code: 'V80C45', desc: 'Заливний бетон для статичного ремонту', id: 'v80c45' },
      { code: 'V160C45', desc: 'Заливний бетон для більшої висоти заливання', id: 'v160c45' },
      { code: 'FD20', desc: 'Ремонтний розчин для відновлення герметичності споруд WHG/LAU' },
    ],
  },
  {
    id: 'repair',
    title: 'РЕМОНТ ТА ВІДНОВЛЕННЯ БЕТОНУ',
    navLabel: 'Ремонт',
    image: 'https://www.pagel.com/wp-content/uploads/2020/12/instandsetzung.jpg',
    listTitle: 'Матеріали для ремонту бетонних конструкцій:',
    description: [
      'Для професійного ремонту пошкоджених бетонних конструкцій ми пропонуємо ремонтні системи на будь-який випадок. Розчини класу M2 призначені для неструктурного ремонту, тобто відновлення вигляду та геометричної форми елемента. Розчини класу M3 використовують для структурного ремонту.',
      'Наносити їх легко: вручну (системи PCC) або методом мокрого торкретування (система SPCC) на стіни та стелі. Усі наші будівельні суміші негорючі. В асортименті також є швидкотвердіючі ремонтні склади та універсальна шпаклівка.',
    ],
    items: [
      { code: 'RM20', desc: 'Суха ремонтна суміш (PCC)', id: 'rm20' },
      { code: 'MH20', desc: 'Будівельний розчин PCC-I для структурного ремонту' },
      { code: 'MH80', desc: 'Будівельний розчин PCC-I для структурного ремонту' },
      { code: 'SM20', desc: 'Розчин для торкретування (SPCC)' },
      { code: 'MS05', desc: 'Шпаклівка (PCC)' },
    ],
  },
  {
    id: 'sewage',
    title: 'РЕМОНТ КАНАЛІЗАЦІЇ ТА СТІЧНИХ ВОД',
    navLabel: 'Стічні води',
    image: 'https://www.pagel.com/wp-content/uploads/2020/12/kanalinstandsetzung-1.jpg',
    listTitle: 'Продукти для ремонту каналізаційних систем та очисних споруд:',
    description: [
      'Ремонтні суміші PAGEL для каналізації створені для відновлення бетонних і цегляних колекторів, колодязів та інших споруд водовідведення. Вони мають підвищену стійкість до сульфатного та кислотного впливу, який неминуче виникає у стічних водах.',
      'Для усунення протікань і проривів призначений тампонажний розчин KA-S, який переміг у незалежному порівнянні інституту IKT. Для термінових робіт у складі системи є надшвидкотвердіючі заливні розчини серій VT і VB.',
    ],
    items: [
      { code: 'KA20', desc: 'Суміш для ремонту каналізаційних систем' },
      { code: 'KA-S', desc: 'Тампонажний розчин (гідропломба)' },
      { code: 'KA-TS', desc: 'Надшвидкотвердіючий тампонажний розчин (гідропломба)' },
      { code: 'VT05', desc: 'Надшвидкотвердіючий заливний розчин (турбо)', id: 'vt05' },
      { code: 'VT10', desc: 'Надшвидкотвердіючий заливний розчин (турбо)', id: 'vt10' },
      { code: 'VT-P10', desc: 'Надшвидкотвердіючий будівельний розчин', id: 'vt-p10' },
      { code: 'VB20', desc: 'Надшвидкотвердіючий заливний розчин', id: 'vb20' },
      { code: 'VB50', desc: 'Надшвидкотвердіючий заливний розчин', id: 'vb50' },
      { code: 'VB160', desc: 'Надшвидкотвердіючий заливний розчин', id: 'vb160' },
      { code: 'VB-P10', desc: 'Надшвидкотвердіючий пластичний розчин', id: 'vb-p10' },
    ],
  },
  {
    id: 'drinking-water',
    title: 'ПИТНА ВОДА: РЕМОНТ РЕЗЕРВУАРІВ',
    navLabel: 'Питна вода',
    image: 'https://www.pagel.com/wp-content/uploads/2019/02/tw.jpg',
    listTitle: 'Продукти для сховищ та резервуарів питної води:',
    description: [
      'Питна вода — наш найважливіший продукт харчування, і її сховища потребують надійного захисту. Ремонтні суміші серії TW призначені для гігієнічного та довговічного внутрішнього облицювання споруд зберігання питної води та резервуарів неочищеної води.',
      'Завдяки багаторічному досвіду роботи з цементними системами покриттів суміші TW зручно укладати, а їхню якість перевірено відповідно до технічних правил DVGW. У складах типу 1, що контактують з питною водою, нам вдалося повністю відмовитися від органічних добавок.',
    ],
    items: [
      { code: 'TW05', desc: 'Ремонтна суміш для сховищ питної води', id: 'tw05' },
      { code: 'TW10', desc: 'Ремонтна суміш для сховищ питної води, адгезійний шар' },
      { code: 'TW20', desc: 'Ремонтна суміш для сховищ питної води, торкретування' },
      { code: 'TW40', desc: 'Ремонтна суміш для сховищ питної води' },
      { code: 'TWN20', desc: 'Ремонтна суміш для сховищ питної води, тип 1' },
      { code: 'TF10', desc: 'CARBOrefit® — тонкозернистий текстильбетон' },
      { code: 'V1/50', desc: 'Безусадковий середньозернистий розчин для заливання та підливки', id: 'v1-50' },
      { code: 'V80C45', desc: 'Заливний бетон для статичного ремонту', id: 'v80c45' },
    ],
  },
  {
    id: 'surface-protection',
    title: 'ЗАХИСТ БЕТОННИХ ПОВЕРХОНЬ',
    navLabel: 'Захист поверхні',
    image: 'https://www.pagel.com/wp-content/uploads/2019/02/o2c.jpg',
    listTitle: 'Продукти для захисту бетонних та розчинних поверхонь:',
    description: [
      'Щоб доповнити портфель ремонтних систем, PAGEL пропонує широкий вибір матеріалів для захисту бетонних поверхонь. З ними можна легко, швидко та економічно виконувати ремонт, обслуговування й оздоблення внутрішніх та зовнішніх поверхонь.',
    ],
    items: [
      { code: 'SEAL FLEX 1k', desc: 'Захисний матеріал для бетонних поверхонь' },
      { code: 'O2C', desc: 'Захисна фарба для бетону' },
      { code: 'O2DE', desc: 'Захисна фарба для бетону' },
      { code: 'SEAL SI 100', desc: 'Силікатне просочення для бетону' },
      { code: 'TOP SEAL SV 100', desc: 'Силікатний лак-просочення для бетону' },
      { code: 'D1 PAGELASTIC', desc: 'Еластична гідроізоляція' },
    ],
  },
];

// --- Картка продукту: посилання, якщо сторінка продукту існує ---
const ProductCard = ({ item }) => {
  const product = item.id ? getProductById(item.id) : null;

  return (
    <div className="fl-post-column">
      <div className={`fl-post-grid-post${product ? '' : ' no-link'}`}>
        <div className="fl-post-grid-text">
          <h2 className="fl-post-grid-title">
            {product ? (
              <Link to={`/products/${product.category}/${product.id}`}>{item.code}</Link>
            ) : (
              item.code
            )}
          </h2>
          <p className="fl-post-grid-desc">{item.desc}</p>
        </div>
      </div>
    </div>
  );
};

// --- Секція категорії (структура така ж, як ProductCategory у GroutPage) ---
const RepairCategory = ({ category }) => (
  <div className="fl-row fl-row-fixed-width">
    <div className="fl-row-content-wrap">
      <div className="fl-row-content fl-row-fixed-width fl-node-content">

        <div className="fl-col-group">
          <div className="fl-col fl-col-bg-color">
            <div id={category.id} className="fl-module fl-module-heading">
              <h1 className="fl-heading"><span className="fl-heading-text">{category.title}</span></h1>
            </div>
          </div>
        </div>

        <div className="fl-col-group category-intro">
          <div className="fl-col fl-col-bg-color fl-col-small">
            <div className="fl-module fl-module-photo fl-animation fl-fade-in">
              <div className="fl-photo fl-photo-align-center">
                <img src={category.image} alt={category.navLabel} className="fl-photo-img" />
              </div>
            </div>
          </div>
          <div className="fl-col fl-col-bg-color fl-col-small">
            <div className="fl-module fl-module-rich-text">
              <div className="fl-rich-text">
                {category.description.map((text, i) => (
                  <p key={i} className={i > 0 ? 'hide-on-mobile' : undefined}>{text}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="fl-col-group">
          <div className="fl-col fl-col-bg-color">
            <div className="fl-module fl-module-heading">
              <h2 className="fl-heading fl-heading-products">
                <span className="fl-heading-text">{category.listTitle}</span>
              </h2>
            </div>
            <div className="fl-module fl-module-post-grid">
              <div className="fl-post-grid">
                {category.items.map((item) => (
                  <ProductCard key={item.code} item={item} />
                ))}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
);

// --- Сторінка «Ремонт бетону» ---
const ConcreteRepairPage = () => {
  const { hash } = useLocation();

  // Прокрутка до секції, якщо сторінку відкрито одразу з якорем (/products/concrete-repair#sewage)
  useEffect(() => {
    if (!hash) return;
    const el = document.getElementById(hash.slice(1));
    if (el) el.scrollIntoView();
  }, [hash]);

  // Заголовок вкладки та meta description для пошукових систем
  useEffect(() => {
    const prevTitle = document.title;
    let meta = document.querySelector('meta[name="description"]');
    const createdMeta = !meta;
    if (!meta) {
      meta = document.createElement('meta');
      meta.setAttribute('name', 'description');
      document.head.appendChild(meta);
    }
    const prevDescription = meta.getAttribute('content');

    document.title = PAGE_TITLE;
    meta.setAttribute('content', PAGE_DESCRIPTION);

    return () => {
      document.title = prevTitle;
      if (createdMeta) {
        meta.remove();
      } else if (prevDescription !== null) {
        meta.setAttribute('content', prevDescription);
      }
    };
  }, []);

  const breadcrumbItems = [
    { label: 'Продукти', link: '/products' },
    { label: 'Ремонт бетону' },
  ];

  return (
    <>
      <Breadcrumbs items={breadcrumbItems} />

      {/* grout-page: ті самі стилі, що й на сторінці «Розчин для заливання» */}
      <div className="site-inner grout-page">
        <div className="wrap">
          <div className="content-sidebar-wrap">
            <main className="content">
              <article className="entry">
                <div className="entry-content">

                  {/* Hero Section */}
                  <div className="fl-row fl-row-fixed-width fl-row-bg-none" style={{ paddingTop: 16 }}>
                    <div className="fl-row-content-wrap">
                      <div className="fl-row-content fl-row-fixed-width fl-node-content">
                        <div className="fl-col-group">
                          <div className="fl-col fl-col-bg-color">
                            <div className="fl-module fl-module-heading">
                              <h1 className="fl-heading"><span className="fl-heading-text">РЕМОНТ БЕТОНУ</span></h1>
                            </div>
                            <div className="fl-module fl-module-rich-text">
                              <div className="fl-rich-text">
                                <p>
                                  Ремонтні розчини PAGEL охоплюють усі види робіт: від простого й швидкого
                                  локального відновлення поверхні до структурного ремонту несучих елементів та
                                  відновлення герметичності споруд для зберігання й перевезення речовин, небезпечних
                                  для води (WHG/LAU). Особливо ефективний і чистий спосіб структурного ремонту —
                                  наш заливний бетон C45.{' '}
                                  <span className="hide-on-mobile">
                                    Нижче продукти розподілено за шістьма напрямами: захист арматури від корозії,
                                    структурний ремонт, загальний ремонт, каналізація, питна вода та захист поверхонь.
                                  </span>
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
                                <h2>Напрями ремонту бетону:</h2>
                              </div>
                            </div>
                            <div className="fl-col-group fl-col-group-nested nav-grid-3">
                              {CATEGORIES.map((cat) => (
                                <div className="fl-col fl-col-bg-color fl-col-small" key={cat.id}>
                                  <div className="fl-module fl-module-photo fl-animation fl-fade-in hover-zoom-in">
                                    <div className="fl-photo fl-photo-align-center">
                                      <a href={`#${cat.id}`}>
                                        <img src={cat.image} alt={cat.navLabel} className="fl-photo-img" />
                                      </a>
                                      <div className="fl-photo-caption fl-photo-caption-below">{cat.navLabel}</div>
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
                  {CATEGORIES.map((cat) => (
                    <RepairCategory key={cat.id} category={cat} />
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

export default ConcreteRepairPage;
