import React, { useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { smartSearch } from '../utils/SmartSearch';

const SearchResultsPage = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Отримуємо ВСІ результати (передаємо null або високий ліміт)
  const results = useMemo(() => {
    if (!query.trim()) return [];
    return smartSearch(query, 100); // 100 або без другого аргументу, залежно від реалізації smartSearch
  }, [query]);

  return (
    <div className="search-results-page" style={{ maxWidth: 1200, margin: '0 auto', padding: '20px 16px' }}>
      <h1>Результати пошуку</h1>
      <p style={{ color: '#666', marginBottom: 24 }}>
        За запитом «<strong>{query}</strong>» знайдено результатів: <strong>{results.length}</strong>
      </p>

      {results.length === 0 ? (
        <div style={{ padding: '40px 0', textAlign: 'center' }}>
          <i className="fas fa-search" style={{ fontSize: 48, color: '#ccc', marginBottom: 16 }}></i>
          <h2>Нічого не знайдено</h2>
          <p style={{ color: '#666' }}>Перевірте написання або спробуйте ввести інше слово.</p>
        </div>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 20
        }}>
          {results.map((product) => (
            <div key={product.id} style={{
              border: '1px solid #eee',
              borderRadius: 8,
              padding: 16,
              backgroundColor: '#fff',
              boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              display: 'flex',
              flexDirection: 'column',
              justify: 'space-between'
            }}>
              <div>
                <span style={{ fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                  {product.category}
                </span>
                <h3 style={{ fontSize: 16, margin: '8px 0', color: '#333' }}>
                  {product.title}
                </h3>
              </div>
              
              <Link
                to={`/products/${product.category}/${product.slug}`}
                style={{
                  marginTop: 16,
                  display: 'inline-block',
                  backgroundColor: '#c8102e',
                  color: '#fff',
                  padding: '8px 16px',
                  borderRadius: 4,
                  textDecoration: 'none',
                  textAlign: 'center',
                  fontWeight: 500
                }}
              >
                Переглянути товар
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResultsPage;