import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { searchProducts, getAllProducts } from '../data/products';

const SearchBar = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // Закриття при кліку поза межами
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Пошук при зміні запиту
  useEffect(() => {
    if (query.length >= 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const searchResults = searchProducts(query);
        setResults(searchResults.slice(0, 8)); // максимум 8 результатів
        setIsOpen(true);
        setIsLoading(false);
      }, 300); // debounce

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);

  // Очищення пошуку
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  // Обробка натискання Enter
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && query.length >= 2) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setIsOpen(false);
    }
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

  return (
    <div className="search-wrapper" ref={searchRef} style={{ position: 'relative' }}>
      <div className="search-container" style={{ 
        display: 'flex', 
        alignItems: 'center',
        border: '1px solid #ddd',
        borderRadius: 4,
        backgroundColor: '#fff',
        padding: '4px 8px',
        minWidth: '280px'
      }}>
        <i className="fas fa-search" style={{ color: '#999', marginRight: 8 }}></i>
        <input
          type="text"
          className="search-input"
          placeholder="Пошук продуктів..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.length >= 2 && results.length > 0) {
              setIsOpen(true);
            }
          }}
          style={{
            flex: 1,
            border: 'none',
            outline: 'none',
            padding: '8px 0',
            fontSize: '14px',
            background: 'transparent'
          }}
        />
        {query && (
          <button
            onClick={clearSearch}
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: '#999',
              padding: '0 4px'
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        )}
        {isLoading && (
          <i className="fas fa-spinner fa-spin" style={{ color: '#c8102e', marginLeft: 8 }}></i>
        )}
      </div>

      {/* Результати пошуку */}
      {isOpen && results.length > 0 && (
        <div className="search-results" style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          maxHeight: '400px',
          overflowY: 'auto',
          zIndex: 1000
        }}>
          {results.map((product) => (
            <Link
              key={product.id}
              to={`/products/${product.category}/${product.slug}`}
              onClick={() => setIsOpen(false)}
              style={{
                display: 'block',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#333',
                borderBottom: '1px solid #f5f5f5',
                transition: 'background 0.2s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#fafafa'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{
                  width: 36,
                  height: 36,
                  borderRadius: 4,
                  backgroundColor: '#f5f5f5',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginRight: 12,
                  color: '#c8102e'
                }}>
                  <i className={`fas ${getCategoryIcon(product.category)}`}></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {product.title}
                  </div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>
                    {getCategoryLabel(product.category)}
                  </div>
                </div>
                <i className="fas fa-chevron-right" style={{ color: '#ccc', fontSize: 12 }}></i>
              </div>
            </Link>
          ))}
          
          {/* Кнопка "Показати всі" */}
          <div style={{ padding: '8px 16px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <Link
              to={`/search?q=${encodeURIComponent(query)}`}
              onClick={() => setIsOpen(false)}
              style={{
                color: '#c8102e',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 500
              }}
            >
              Показати всі результати →
            </Link>
          </div>
        </div>
      )}

      {/* Повідомлення про відсутність результатів */}
      {isOpen && query.length >= 2 && results.length === 0 && (
        <div className="search-results" style={{
          position: 'absolute',
          top: 'calc(100% + 4px)',
          left: 0,
          right: 0,
          backgroundColor: '#fff',
          border: '1px solid #ddd',
          borderRadius: 4,
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
          padding: '20px',
          textAlign: 'center',
          zIndex: 1000
        }}>
          <i className="fas fa-search" style={{ fontSize: 24, color: '#ccc', marginBottom: 8 }}></i>
          <p style={{ color: '#666', margin: 0 }}>
            Нічого не знайдено за запитом "<strong>{query}</strong>"
          </p>
          <p style={{ color: '#999', fontSize: 13, marginTop: 4 }}>
            Спробуйте змінити пошуковий запит
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;