import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import GroutPage from './pages/GroutPage';
import ConcreteRepairPage from './pages/ConcreteRepairPage';
import IndustrialFloorsPage from './pages/IndustrialFloorsPage';
import ProductPage from './pages/ProductPage';

function Placeholder({ title }) {
  return (
    <main className="site-inner">
      <div className="wrap" style={{ padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{ fontSize: 28, marginBottom: 12 }}>{title}</h1>
        <p style={{ color: '#666' }}>Ця сторінка ще в розробці.</p>
        <a href="/" style={{ color: '#c8102e', marginTop: 16, display: 'inline-block' }}>← На головну</a>
      </div>
    </main>
  );
}

export default function App() {
  return (
    <div className="site-container">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        
        {/* Категорії */}
        <Route path="/products/grout" element={<GroutPage />} />
        <Route path="/products/concrete-repair" element={<ConcreteRepairPage />} />
        <Route path="/products/industrial-floors" element={<IndustrialFloorsPage />} />
        <Route path="/products/reaction-resins" element={<Placeholder title="Реакційні смоли" />} />
        
        {/* Універсальний маршрут для всіх продуктів */}
        <Route path="/products/:category/:slug" element={<ProductPage />} />
        
        {/* Запасний варіант для продуктів без категорії */}
        <Route path="/products/:slug" element={<Placeholder title="Продукт" />} />
        
        {/* Інші сторінки */}
        <Route path="/references" element={<Placeholder title="Референції" />} />
        <Route path="/innovations" element={<Placeholder title="Інновації" />} />
        <Route path="/quality-assurance" element={<Placeholder title="Контроль якості" />} />
        <Route path="/sales" element={<Placeholder title="Продажі" />} />
        <Route path="/contact" element={<Placeholder title="Контакти" />} />
        <Route path="/downloads" element={<Placeholder title="Завантаження" />} />
        <Route path="/site-notice" element={<Placeholder title="Правова інформація" />} />
        <Route path="/privacy-policy" element={<Placeholder title="Конфіденційність" />} />
        <Route path="*" element={<Placeholder title="Сторінку не знайдено" />} />
      </Routes>
      <Footer />
    </div>
  );
}