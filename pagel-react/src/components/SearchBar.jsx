// src/components/SearchBar.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { smartSearch } from '../utils/SmartSearch';

const SearchBar = () => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [results, setResults] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const searchRef = useRef(null);
  const navigate = useNavigate();

  // 1. Синхронізація інпута з URL при переході між сторінками
  useEffect(() => {
    const urlQuery = searchParams.get('q');
    if (urlQuery !== null) {
      setQuery(urlQuery);
    }
  }, [searchParams]);

  // 2. Закриття списку при кліку поза межами компонента
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 3. Розумний пошук при зміні запиту (з debounce)
  useEffect(() => {
    if (query.trim().length >= 2) {
      setIsLoading(true);
      const timer = setTimeout(() => {
        const searchResults = smartSearch(query, 8); // Прев'ю-обмеження у 8 елементів
        setResults(searchResults);
        setIsOpen(true);
        setIsLoading(false);
        setActiveIndex(-1);
      }, 250);

      return () => clearTimeout(timer);
    } else {
      setResults([]);
      setIsOpen(false);
      setActiveIndex(-1);
    }
  }, [query]);

  // Очищення пошуку
  const clearSearch = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
    setActiveIndex(-1);
  };

  // Перехід до конкретного товару
  const goToProduct = (product) => {
    navigate(`/products/${product.category}/${product.slug}`);
    setIsOpen(false);
  };

  // Перехід на сторінку "Всі результати"
  const handleShowAll = () => {
    if (query.trim().length >= 2) {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setIsOpen(false);
    }
  };

  // Обробка клавіш: Enter, стрілки вгору/вниз, Escape
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      if (activeIndex >= 0 && results[activeIndex]) {
        goToProduct(results[activeIndex]);
      } else {
        handleShowAll();
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveIndex((prev) => Math.max(prev - 1, -1));
    } else if (e.key === 'Escape') {
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

  // Підсвітка збігів у назві
  const highlightMatch = (text, q) => {
    if (!q || q.trim().length < 2) return text;
    try {
      const escaped = q.trim().replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const parts = text.split(new RegExp(`(${escaped})`, 'ig'));
      return parts.map((part, i) =>
        part.toLowerCase() === q.trim().toLowerCase() ? (
          <mark key={i} style={{ background: '#ffe9a8', padding: 0 }}>{part}</mark>
        ) : (
          part
        )
      );
    } catch {
      return text;
    }
  };

  return (
    <div className="search-wrapper" ref={searchRef} style={{ position: 'relative' }}>
      {/* Пошукове поле */}
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
          placeholder="Пошук продуктів... (напр. 'розчин для турбіни')"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (query.trim().length >= 2 && results.length > 0) {
              setIsOpen(true);
            }
          }}
          aria-autocomplete="list"
          aria-expanded={isOpen}
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
            aria-label="Очистити пошук"
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

      {/* Список підказок (Випадаюче меню) */}
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
          {results.map((product, index) => (
            <Link
              key={product.id}
              to={`/products/${product.category}/${product.slug}`}
              onClick={() => setIsOpen(false)}
              onMouseEnter={() => setActiveIndex(index)}
              style={{
                display: 'block',
                padding: '12px 16px',
                textDecoration: 'none',
                color: '#333',
                borderBottom: '1px solid #f5f5f5',
                backgroundColor: activeIndex === index ? '#fafafa' : 'transparent',
                transition: 'background 0.15s'
              }}
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
                  color: '#c8102e',
                  flexShrink: 0
                }}>
                  <i className={`fas ${getCategoryIcon(product.category)}`}></i>
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 600, fontSize: 14 }}>
                    {highlightMatch(product.title, query)}
                  </div>
                  <div style={{ fontSize: 12, color: '#888', marginTop: 2 }}>
                    {getCategoryLabel(product.category)}
                  </div>
                </div>
                <i className="fas fa-chevron-right" style={{ color: '#ccc', fontSize: 12, flexShrink: 0 }}></i>
              </div>
            </Link>
          ))}

          {/* Кнопка "Показати всі результати" */}
          <div style={{ padding: '8px 16px', backgroundColor: '#f9f9f9', textAlign: 'center' }}>
            <Link
              to={`/search?q=${encodeURIComponent(query.trim())}`}
              onClick={() => setIsOpen(false)}
              style={{
                color: '#c8102e',
                textDecoration: 'none',
                fontSize: '13px',
                fontWeight: 600,
                display: 'block',
                padding: '4px 0'
              }}
            >
              Показати всі результати ({results.length}+) →
            </Link>
          </div>
        </div>
      )}

      {/* Повідомлення "Нічого не знайдено" */}
      {isOpen && query.trim().length >= 2 && results.length === 0 && (
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
            Спробуйте змінити пошуковий запит або перевірте написання
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchBar;