// src/components/Header.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const companyLinks = [
  { to: '/innovations', label: 'Інновації' },
  { to: '/references', label: 'Референції' },
  { to: '/iso9001-iso14001', label: 'ISO 9001 та ISO 14001' },
  { to: '/quality-assurance', label: 'Контроль якості' },
];

const Header = () => {
  const [companyOpen, setCompanyOpen] = useState(false);

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
            
            {/* Навігація */}
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
                
                {/* Компанія — з випадаючим меню */}
                <li
                  style={{ position: 'relative' }}
                  onMouseEnter={() => setCompanyOpen(true)}
                  onMouseLeave={() => setCompanyOpen(false)}
                >
                  <Link
                    to="/company"
                    onClick={(e) => e.preventDefault()}
                    style={{
                      color: '#333',
                      textDecoration: 'none',
                      fontWeight: 500,
                      fontSize: 14,
                      padding: '6px 8px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 4,
                      cursor: 'pointer',
                    }}
                  >
                    Компанія
                    <span style={{ fontSize: 10 }}>▾</span>
                  </Link>

                  {companyOpen && (
                    <ul
                      style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        margin: 0,
                        padding: '6px 0',
                        listStyle: 'none',
                        background: '#fff',
                        border: '1px solid #eee',
                        boxShadow: '0 6px 16px rgba(0,0,0,0.1)',
                        borderRadius: 4,
                        minWidth: 220,
                        zIndex: 100,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'stretch',
                      }}
                    >
                      {companyLinks.map((item) => (
                        <li
                          key={item.to}
                          style={{
                            display: 'block',
                            width: '100%',
                            listStyle: 'none',
                          }}
                        >
                          <Link
                            to={item.to}
                            style={{
                              display: 'block',
                              width: '100%',
                              boxSizing: 'border-box',
                              padding: '8px 16px',
                              color: '#333',
                              textDecoration: 'none',
                              fontSize: 14,
                              whiteSpace: 'nowrap',
                            }}
                            onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f7f7')}
                            onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
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