// src/components/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const Header = () => {
  return (
    <header className="site-header">
      <div className="wrap">
        <div className="title-area">
          <p className="site-title">
            <Link to="/">Pagel - Spezial Beton</Link>
          </p>
        </div>
        <div className="widget-area header-widget-area">
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'flex-end',
            gap: 16,
            marginBottom: 8,
            flexWrap: 'wrap'
          }}>
            {/* Пошук */}
            <SearchBar />
            
            {/* Навігація - ВСІ ПОСИЛАННЯ БЕЗ ВИПАДАЮЧИХ МЕНЮ */}
            <nav className="nav-header">
              <ul style={{ 
                display: 'flex', 
                listStyle: 'none', 
                margin: 0, 
                padding: 0,
                gap: 12,
                alignItems: 'center'
              }}>
                {/* Посилання на продукти */}
                <li>
                  <Link to="/products" style={{ 
                    color: '#333', 
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    padding: '6px 8px'
                  }}>
                    Продукти
                  </Link>
                </li>
                
                {/* Посилання на компанію */}
                <li>
                  <Link to="/company" style={{ 
                    color: '#333', 
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    padding: '6px 8px'
                  }}>
                    Компанія
                  </Link>
                </li>
                
                {/* Посилання на продажі */}
                <li>
                  <Link to="/sales" style={{ 
                    color: '#333', 
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: 14,
                    padding: '6px 8px'
                  }}>
                    Продажі
                  </Link>
                </li>
                
                {/* Мова */}
                <li style={{ position: 'relative' }}>
                  <span style={{ 
                    color: '#333', 
                    fontWeight: 500,
                    fontSize: 14,
                    padding: '6px 8px',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 4
                  }}>
                    <img 
                      src="https://www.pagel.com/wp-content/plugins/sitepress-multilingual-cms/res/flags/uk.png" 
                      alt="Українська" 
                      style={{ width: 18, height: 12 }}
                    />
                    Українська
                  </span>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;