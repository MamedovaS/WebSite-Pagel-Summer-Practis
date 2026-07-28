import React from "react";
import "./companyPages.css";

export default function QualityAssurancePage() {
  return (
    <div className="company-page">
      <img
        className="company-hero-image"
        src="https://www.pagel.com/wp-content/uploads/2019/03/sl_background-1.jpg"
        alt="PAGEL Spezial-Beton"
      />

      <span className="kicker">PAGEL Spezial-Beton</span>
      <h1>Контроль якості</h1>

      <nav className="jump-nav">
        <a href="#consistency">💧 Класи консистенції</a>
        <a href="#early-strength">⏱ Рання міцність</a>
        <a href="#compressive">🧱 Міцність на стиск</a>
        <a href="#shrinkage">📏 Класи усадки</a>
        <a href="#lab">🔬 Лабораторія</a>
      </nav>

      <div className="content-card">
        <h2>Настанова щодо ін’єкційних розчинів</h2>
        <h3>
          Виробництво та застосування цементозв’язаного заливного бетону та
          заливного розчину (настанова DAfStb)
        </h3>

        <h2>Сертифікат відповідності</h2>
        <p>
          Як виробник продукції, що підпадає під будівельні норми, PAGEL®
          Spezial-Beton GmbH &amp; Co. KG зобов’язана декларувати
          відповідність наших заливних розчинів і бетонів технічним
          будівельним нормам. Це підтверджується маркуванням знаком «Ü».
          Правильне маркування має вирішальне значення для користувача,
          оскільки будівельну продукцію можна використовувати лише за умови
          відповідності будівельним нормам.
        </p>
        <p>
          Це вимагає заводського контролю виробництва. У PAGEL® цей контроль
          здійснює Об’єднання якості німецької будівельної хімії
          (Qualitätsgemeinschaft Deutsche Bauchemie e.V.) як визнаний орган
          сертифікації відповідно до переліку PÜZ інституту DIBt.
        </p>
        <div className="two-col">
          <img
            className="single-image"
            style={{ height: 180, objectFit: "contain", background: "#fafafa" }}
            src="https://www.pagel.com/all/images/VeBMR/de/UE-Zeichen%20QDB_Beschriftung.png"
            alt="Знак Ü QDB"
          />
          <div>
            <p>
              Дизайн знака «Ü» визначено у MÜZVO: він містить літеру «Ü»,
              назву виробника, підставу для підтвердження відповідності
              (настанова DAfStb VeBMR, редакція липня 2019 року), основні
              характеристики та знак органу сертифікації (QDB).
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/images/VeBMR/de/infoflyer_u%CC%88bereinstimmungszertifikat.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Детальніше
            </a>
          </div>
        </div>
      </div>

      <div className="content-card">
        <h2>Заголовок до VeBMR</h2>
        <p>
          Виробництво та застосування заливного бетону та заливного розчину
          для несучих елементів вимагають глибоких знань і практичного
          досвіду роботи з цими будівельними матеріалами.
        </p>
        <p>
          Настанова стосується заливного бетону та заливного розчину, які
          зазвичай обробляються у плинній консистенції. Положення настанови
          щодо сухого бетону, що відхиляються від DIN EN 206-1/DIN 1045-2,
          було враховано та відповідно інтегровано в цю настанову.
        </p>
        <p>
          Вимоги DIN EN 1992-1-1 у поєднанні з DIN EN 1992-1-1/NA
          застосовуються до розрахункових значень деформаційних властивостей
          та міцності. У певних випадках, наприклад при заливці сильно
          навантажених фундаментів для обладнання, може знадобитися окремо
          визначити деформаційні та міцнісні характеристики.
        </p>

        <h3>Заливний бетон і заливний розчин</h3>
        <p>
          Заливний бетон і заливний розчин складаються з цементу,
          мінерального заповнювача, бетонних добавок та, за потреби, бетонних
          присадок. Заливний бетон визначається заповнювачем із максимальним
          розміром зерна &gt; 4 мм, заливний розчин — заповнювачем із
          максимальним розміром зерна ≤ 4 мм.
        </p>

        <h3>Контроль на виробничому підприємстві</h3>
        <p>
          Контроль включає внутрішній контроль виробництва, зовнішній
          моніторинг цього контролю та сертифікацію заливного бетону і
          заливного розчину. Ми перевіряємо властивості сировини та готового
          продукту аж до передачі (відповідно до DIN EN 206-1 та DIN 1045-2),
          результати документуються та статистично обробляються.
        </p>
        <p>
          Сертифікацію та державний нагляд за нашою продукцією здійснюють
          визнані органи. Ми фасуємо заливний бетон і розчин у тару (мішки
          або біг-беги); одержувач повинен зберігати матеріал у прохолодному,
          захищеному від морозу та сухому місці, що гарантує термін
          придатності 12 місяців від дати виробництва.
        </p>
      </div>

      <hr className="section-divider" />

      <h1 style={{ fontSize: 24 }}>Технічні характеристики</h1>

      <div id="consistency" className="content-card">
        <h3>
          Класи плинності / класи консистенції розтікання (класи
          консистенції)
        </h3>
        <p>
          За визначенням, заливний матеріал — це плинний розчин/бетон. Для
          класифікації плинності окремих продуктів їх поділяють на класи
          консистенції. Заливний бетон класифікується за класами розтікання
          від a1 до a3, а заливний розчин — за класами розтікання від f1 до
          f3.
        </p>
        <p>
          <strong>Метод випробування:</strong>
        </p>
        <ul>
          <li>
            Заливний бетон — класи розтікання (a1–a3), випробування через 5
            хвилин після виготовлення (DIN EN 12350-5)
          </li>
          <li>
            Заливний розчин — класи розтікання (f1–f3), лоток розтікання як
            еталон
          </li>
        </ul>
        <div className="media-row">
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Ausflie%C3%9Fma%C3%9Fklassen_f%C3%BCr_Vergussbeton.png"
            alt="Класи розтікання для заливного бетону"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Flie%C3%9Fma%C3%9Fklassen_f%C3%BCr_Vergussm%C3%B6rtel.png"
            alt="Класи розтікання для заливного розчину"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
        </div>

        <div className="spec-table-wrap">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Категорія</th>
                <th>Продукт</th>
                <th>Клас</th>
                <th>1</th>
                <th>2</th>
                <th>3</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6}>Стандартний заливний розчин</td>
                <td>V80 C45</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V160 C45</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V1®/10</td>
                <td>f</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V1®/50</td>
                <td>a</td>
                <td></td>
                <td></td>
                <td>•</td>
              </tr>
              <tr>
                <td>V1®/80</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V1®/160</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={5}>Високоміцний заливний розчин</td>
                <td>V1®/30HF</td>
                <td>f</td>
                <td>•</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>V1®/50HF</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V1®/60HF</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>HF10</td>
                <td>f</td>
                <td></td>
                <td></td>
                <td>•</td>
              </tr>
              <tr>
                <td>HF50</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td rowSpan={3}>Швидкотвердіючий заливний розчин</td>
                <td>V2/20</td>
                <td>f</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
              <tr>
                <td>V2/50</td>
                <td>a</td>
                <td></td>
                <td></td>
                <td>•</td>
              </tr>
              <tr>
                <td>V2/160</td>
                <td>a</td>
                <td></td>
                <td>•</td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="early-strength" className="content-card">
        <h3>Класи ранньої міцності</h3>
        <p>
          Клас ранньої міцності описує, наскільки швидко заливний матеріал
          стає несучим або здатним витримувати навантаження після укладання.
          Міцність на стиск вимірюється через 24 ± 0,5 години (DIN EN
          12390-3).
        </p>
        <p>
          <strong>Зразки для випробувань:</strong> бетонний куб (150 × 150 ×
          150 мм) та розчинова призма (40 × 40 × 160 мм).
        </p>
        <div className="media-row">
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Fr%C3%BChfestigkeitsklasse_f%C3%BCr_Vergussbeton.png"
            alt="Клас ранньої міцності для заливного бетону"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Fr%C3%BChfestigkeitsklasse_f%C3%BCr_Vergussm%C3%B6rtel.png"
            alt="Клас ранньої міцності для заливного розчину"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
        </div>
      </div>

      <div id="compressive" className="content-card">
        <h3>Класи міцності на стиск</h3>
        <p>
          Міцність на стиск є ключовим показником несучої здатності в
          кінцевому стані. Настанова вимагає дотримання необхідної міцності
          на стиск згідно з DIN EN 13670 у поєднанні з DIN 1045-3.
        </p>
        <p>
          Ця настанова застосовується до заливного бетону та заливного
          розчину з високою ранньою міцністю та класом міцності на стиск не
          нижче <strong>C50/60</strong>. Міцність визначається через 28 днів
          (циліндр Ø 150 мм / 300 мм — 50 Н/мм², куб 150 мм — 60 Н/мм²).
        </p>

        <div className="spec-table-wrap">
          <table className="spec-table">
            <thead>
              <tr>
                <th>Категорія</th>
                <th>Продукт</th>
                <th>Клас міцності (28 днів)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td rowSpan={6}>Стандартний заливний розчин</td>
                <td>V80 C45</td>
                <td>C50/60</td>
              </tr>
              <tr>
                <td>V160 C45</td>
                <td>C50/60</td>
              </tr>
              <tr>
                <td>V1®/10</td>
                <td>C55/67</td>
              </tr>
              <tr>
                <td>V1®/50</td>
                <td>C60/75</td>
              </tr>
              <tr>
                <td>V1®/80</td>
                <td>C60/75</td>
              </tr>
              <tr>
                <td>V1®/160</td>
                <td>C60/75</td>
              </tr>
              <tr>
                <td rowSpan={5}>Високоміцний заливний розчин</td>
                <td>V1®/30HF</td>
                <td>C100/115</td>
              </tr>
              <tr>
                <td>V1®/50HF</td>
                <td>C90/105</td>
              </tr>
              <tr>
                <td>V1®/60HF</td>
                <td>C100/115</td>
              </tr>
              <tr>
                <td>HF10</td>
                <td>C100/115</td>
              </tr>
              <tr>
                <td>HF50</td>
                <td>C100/115</td>
              </tr>
              <tr>
                <td rowSpan={3}>Швидкотвердіючий заливний розчин</td>
                <td>V2/20</td>
                <td>C60/75</td>
              </tr>
              <tr>
                <td>V2/50</td>
                <td>C70/85</td>
              </tr>
              <tr>
                <td>V2/160</td>
                <td>C70/85</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div id="shrinkage" className="content-card">
        <h3>Класи усадки</h3>
        <p>
          Усадка — це зменшення довжини/об’єму під час висихання та
          тверднення. Надмірна усадка може призвести до тріщин, розкриття
          швів або втрати міцності, що особливо критично в підрізах і швах
          заливки. Тому в PAGEL ми не використовуємо класи усадки SKVB II та
          SKVM III у наших заливних сумішах, щоб активно запобігати цим
          проблемам.
        </p>
        <div className="media-row">
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Schwindklassen_f%C3%BCr_Vergussbeton.png"
            alt="Класи усадки для заливного бетону"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
          <img
            src="https://www.pagel.com/all/images/VeBMR/de/Schwindklassen_f%C3%BCr%20Vergussm%C3%B6rtel.png"
            alt="Класи усадки для заливного розчину"
            style={{ objectFit: "contain", background: "#fafafa" }}
          />
        </div>
      </div>

      <hr className="section-divider" />

      <div id="lab" className="content-card">
        <h1 style={{ fontSize: 22 }}>Наша лабораторія будматеріалів</h1>

        <div className="two-col">
          <div>
            <h3>Лабораторія будматеріалів PAGEL</h3>
            <p>
              PAGEL має сучасну, оснащену за найновішими стандартами
              лабораторію будматеріалів. Окрім механічних методів
              випробувань, ми також можемо вимірювати деформації набухання та
              усадки матеріалів. Наші продукти перевіряються на практичну
              придатність у кліматичній камері та в кліматичних шафах у
              діапазоні температур від -20 °C до +60 °C.
            </p>
          </div>
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2018/12/lab_labor.jpg"
            alt="Лабораторія PAGEL"
          />
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <div>
            <h3>Випробувальні преси</h3>
            <ul>
              <li>Навантаження стиску: 5000 кН</li>
              <li>Міцність на стиск на призмі, кубі та циліндрі</li>
              <li>Міцність на згин на призмі та бруску</li>
              <li>Міцність на розколювання на циліндрі</li>
              <li>Статичний модуль пружності Юнга</li>
            </ul>
          </div>
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2018/12/lab_pressen.jpg"
            alt="Випробувальні преси"
          />
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <div>
            <h3>Випробування температури</h3>
            <ul>
              <li>
                Кліматична камера для підготовки зразків та випробувань
                свіжого бетону від -10 °C до +50 °C
              </li>
              <li>
                Кліматичні шафи для зберігання зразків від -20 °C до +60 °C
                та вологості 0–100%
              </li>
              <li>Зберігання зразків у воді від 5 °C до 35 °C</li>
            </ul>
          </div>
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2018/12/lab_klima.jpg"
            alt="Кліматичні шафи для зберігання зразків"
          />
        </div>

        <div className="two-col" style={{ marginTop: 24 }}>
          <div>
            <h3>Вимірювання деформацій</h3>
            <p>
              Усадковий конус Schleibinger при температурах від +5 °C до +35
              °C для перевірки поведінки стиснення та розширення.
            </p>
          </div>
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2018/12/lab_schwindkegel.jpg"
            alt="Усадковий конус Schleibinger"
          />
        </div>

        <h3 style={{ marginTop: 24 }}>Додаткові випробування</h3>
        <ul>
          <li>Автоматичне визначення показника Блейна</li>
          <li>Ситовий аналіз</li>
          <li>Випробування Віка: початковий і кінцевий час тужавлення</li>
          <li>Випробування на відрив</li>
          <li>Випробування на стирання за методом Бьоме</li>
          <li>
            Акустичний аналіз резонансної частоти для неруйнівного визначення
            динамічного та статичного модуля Юнга
          </li>
          <li>
            Характеристики свіжоукладеного розчину відповідно до DIN EN
            12350, настанови VeBMR та ASTM
          </li>
        </ul>
      </div>
    </div>
  );
}
