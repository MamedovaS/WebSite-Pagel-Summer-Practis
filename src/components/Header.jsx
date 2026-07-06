import React, { useState } from 'react';

export default function Header() {
  const [langOpen, setLangOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="wrap">
        <div className="title-area">
          <h1 className="site-title">
            <a href="https://www.pagel.com/uk/" aria-label="PAGEL Спеціальний Бетон — на головну">
              PAGEL Спеціальний Бетон
            </a>
          </h1>
        </div>

        <nav className="nav-header" aria-label="Головне меню">
          <ul>
            <li>
              <a href="/products">Продукти</a>
              <ul className="sub-menu">
                
              </ul>
            </li>

            <li>
              <a href="#">Компанія</a>
            </li>

            <li><a href="/sales">Продажі</a></li>

            <li className="lang-item" onMouseEnter={() => setLangOpen(true)} onMouseLeave={() => setLangOpen(false)}>
              <a href="https://www.pagel.com/uk/" aria-label="Поточна мова: Українська">
                <img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" />
                Українська
              </a>
              {langOpen && (
                <ul className="sub-menu">
                  <li><a href="https://www.pagel.com/de/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/de.png" alt="" /> Deutsch</a></li>
                  <li><a href="https://www.pagel.com/en/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/en.png" alt="" /> English</a></li>
                  <li><a href="https://www.pagel.com/fr/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/fr.png" alt="" /> Français</a></li>
                  <li><a href="https://www.pagel.com/pl/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/pl.png" alt="" /> Polski</a></li>
                  <li><a href="https://www.pagel.com/da/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/da.png" alt="" /> Dansk</a></li>
                  <li><a href="https://www.pagel.com/es/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/es.png" alt="" /> Español</a></li>
                  <li><a href="https://www.pagel.com/ru/"><img className="lang-flag" src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/ru.png" alt="" /> Русский</a></li>
                </ul>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
