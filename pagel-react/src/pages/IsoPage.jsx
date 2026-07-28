import React from "react";
import "./companyPages.css";

export default function IsoPage() {
  return (
    <div className="company-page">
      <span className="kicker">PAGEL Spezial-Beton</span>
      <h1>ISO 9001 та ISO 14001</h1>
      <h2>Якість на найвищому рівні</h2>

      <div className="content-card">
        <h1 style={{ fontSize: 22 }}>
          Сертифікація згідно з EN ISO 9001 та EN ISO 14001
        </h1>

        <div className="two-col">
          <a
            href="https://www.pagel.com/wp-content/uploads/2025/02/qm_um_zertifikat_de.jpg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="single-image"
              style={{ height: 300 }}
              src="https://www.pagel.com/wp-content/uploads/2025/02/qm_um_zertifikat_de.jpg"
              alt="Сертифікат ISO 9001 / ISO 14001"
            />
          </a>

          <div>
            <p>
              Ще у 1995 році наша компанія успішно пройшла сертифікацію
              згідно з EN ISO 9001, а у 2024 році — згідно з EN ISO 14001.
            </p>
            <p>
              Наша продукція відповідає нормам та умовам маркування CE, а
              також ми проводимо та сертифікуємо власний контроль продукції
              відповідно до:
            </p>
            <ul>
              <li>DIN EN 934-4</li>
              <li>DIN EN 1504-2</li>
              <li>DIN EN 1504-3</li>
              <li>DIN EN 1504-6</li>
              <li>DIN EN 1504-7</li>
            </ul>
            <p>
              Наші розчини, ін’єкційні суміші та бетони відповідають
              директиві щодо «виробництва та застосування цементозв’язаних
              заливних розчинів, ін’єкційних сумішей та бетону» (VeBMR)
              Німецького комітету залізобетону (DAfStb). Детальну інформацію
              можна знайти в наших технічних паспортах.
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/pdf/general/de/qm_um_zertifikat_de.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Сертифікат ISO 9001:2015 / ISO 14001:2015
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
