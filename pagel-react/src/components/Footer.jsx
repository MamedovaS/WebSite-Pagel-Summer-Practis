import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-white !text-black">
      <section className="sales-section py-10">
        <div className="wrap">
          <h2 className="sales-title">N-GROUP - Представництво PAGEL в Україні</h2>
          <div className="sales-grid">
            <div className="sales-col">
              <h3>Відділ продажів</h3>
              <p>Тел.: +380974416979</p>
              <p>ngroup.ua@gmail.com</p>
            </div>

            <div className="sales-col">
                <h3>Технічна консультація</h3>
                <p>Тел.: +380503706578</p>
            </div>

            <div className="sales-col">
              <h3>Склад матеріалів Pagel</h3>
              <p>
                с. Солонка, Львівська область<br />
                вул. Стрийська, 55
              </p>
              <p>
                <a href="https://maps.app.goo.gl/u27CezM5tz9bzRzN9" target="_blank" rel="noreferrer">Показати на карті</a>
              </p>

            </div>

          </div>
        </div>
      </section>
    </footer>
  );
}