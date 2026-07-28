import React from "react";
import "./companyPages.css";

export default function InnovationsPage() {
  return (
    <div className="company-page">
      <span className="kicker">PAGEL Spezial-Beton</span>
      <h1>Інновації</h1>

      <div className="content-card">
        <h2>Один розчин для майже всіх застосувань?</h2>
        <h1 style={{ fontSize: 22 }}>Ін’єкційний розчин V1®/80 PAGEL</h1>
        <h3>Подальший розвиток нашої серії PAGEL V1®</h3>
        <p>
          У новому ін’єкційному розчині V1®/80 PAGEL ми, компанія PAGEL
          Spezial-Beton, застосовуємо новий інноваційний склад сировини, який
          знижує викиди й водночас забезпечує все, що важливо на практиці:
          високу міцність, різноманітні варіанти застосування, високу
          плинність та низьку усадку. Це гарантує надійну обробку та стабільні
          результати на весь термін експлуатації.
        </p>
        <div className="media-row">
          <img
            src="https://www.pagel.com/wp-content/uploads/2020/12/wp_verguss.jpg"
            alt="Ін’єкційний розчин"
          />
          <img
            src="https://www.pagel.com/wp-content/uploads/2026/02/Brueckenlager_ICE_02-1024x768.jpg"
            alt="Опора мосту ICE"
          />
        </div>
        <ul>
          <li>Фракція: 0–8 мм</li>
          <li>Клас усадки: SKVB 0</li>
          <li>Клас міцності на стиск: (C60/75)</li>
          <li>Висота заливки: 30–200 (250) мм</li>
        </ul>
        <h3>Надзвичайно низька усадка: клас усадки SKVB 0</h3>
        <p>
          Точність — це не бонус, а обов’язкова умова. V1®/80 віднесено до
          класу SKVB 0, що забезпечує надзвичайно низьку усадку — ідеально
          для відповідальних завдань заливки, де важливі геометрична
          точність, силове замикання та довгострокова стабільність.
        </p>
        <h3>Гнучкість застосування: висота підливки 30–200 (250) мм</h3>
        <p>
          Поєднання надзвичайно низької усадки та чудової гранулометричної
          кривої V1®/80 дозволяє надійно заливати шар товщиною від 30 до 200
          (250) мм. Для фундаментів під обладнання, сталевих опор, опорних
          плит, опорних основ чи ремонтних ділянок — ви отримуєте переваги
          гнучкого застосування та видатних властивостей нового розчину
          V1/80 PAGEL.
        </p>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>Чи готові ми до змін?</h2>
        <h1 style={{ fontSize: 22 }}>Переходимо на CUBE</h1>
        <div className="video-frame">
          <iframe
            src="https://player.vimeo.com/video/466869879?color=969696&title=0&byline=0&portrait=0"
            title="CUBE"
            allowFullScreen
          />
        </div>
        <p>
          Будівельна галузь частково відповідальна за прогресуючу зміну
          клімату через виснаження цінних ресурсів та величезні викиди CO2.
          Щоб зберегти наш життєвий простір, будівельна галузь повинна
          змінюватися. Але чи готові ми до змін? Вуглецевий бетон є справжнім
          проривом у цьому напрямку. Сам по собі вуглецевий бетон не є
          рішенням, але він робить значний внесок у стале використання
          цінних ресурсів.
        </p>
        <p>
          У лютому 2019 року консорціум C³ доручив компанії PAGEL розробити
          розчин, який можна було б наносити методом торкретування для
          зведення стін і перекриттів CUBE. Розробка розчину розпочалась
          навесні 2019 року, перші позитивні результати були отримані влітку
          2019-го. Восени 2019 року команда PAGEL виготовила тестові зразки,
          на основі яких навесні 2020 року було надано індивідуальний дозвіл
          (ZiE) на розчини PAGEL C20.2 білий та PAGEL C20.2 сірий. Через
          пандемію коронавірусу зведення стін і перекриттів було відкладено
          до осені 2021 року. Ми раді бути частиною цього інноваційного
          проєкту.
        </p>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>Бетонний університет Баугауз у Веймарі</h2>
        <h1 style={{ fontSize: 22 }}>3D-друк бетоном</h1>
        <div className="video-frame">
          <iframe
            src="https://www.youtube-nocookie.com/embed/RvMnVriYr2I"
            title="3D-друк бетоном"
            allowFullScreen
          />
        </div>
        <p>
          PAGEL Spezial-Beton виступає інноваційним партнером і розробляє
          розчин для монтажу унікальної скульптури. Новий процес друку
          бетоном базується на принципі тросового робота, що застосовується
          для виготовлення фасадних елементів.
        </p>
        <a
          className="btn-pill"
          href="https://www.youtube.com/watch?v=RvMnVriYr2I"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▶ Дивитись відео на YouTube
        </a>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>Ремонтний бетон PAGEL® RB/50</h2>
        <h1 style={{ fontSize: 22 }}>
          Виконання складних ремонтних та реставраційних робіт у стислі
          терміни
        </h1>
        <div className="two-col">
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2020/12/rb50.jpg"
            alt="Ремонтний бетон RB/50"
          />
          <div>
            <p>
              Доступність транспортної інфраструктури стає дедалі важливішою.
              Завдяки швидкотвердіючим продуктам PAGEL ремонтні та
              реставраційні роботи можна виконувати за кілька годин — часто з
              мінімальними обмеженнями руху або взагалі без них. Ремонтний
              бетон PAGEL RB/50 відповідає всім вимогам до будівельних
              матеріалів для конструктивного обслуговування транспортних зон.
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/pdf/de/flyer_rb50_de.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Флаєр RB/50
            </a>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>Наш заливний бетон C45</h2>
        <h1 style={{ fontSize: 22 }}>
          Нові концепції конструктивної реновації паркінгів
        </h1>
        <div className="two-col">
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2020/12/c45.jpg"
            alt="Заливний бетон C45"
          />
          <div>
            <p>
              У цій статті розглянуто окремі аспекти реновації, конструктивного
              обстеження та різних принципів відновлення. Також представлено
              нові продукти та їх класифікацію в чинній нормативній базі.
              Показано застосування розчинів PCC та SPCC у різних
              реставраційних роботах.
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/pdf/publications/201901_gehrke_werner_parkbauten.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Перейти до статті
            </a>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>Зупинити протікання за допомогою ущільнювального розчину</h2>
        <h1 style={{ fontSize: 22 }}>Не вистачає одного цегли?</h1>
        <div className="two-col">
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2020/12/ka-s-1.jpg"
            alt="Ущільнювальний розчин KA-S"
          />
          <div>
            <p>
              Інститут підземної інфраструктури IKT у Гельзенкірхені
              (Німеччина) протестував дев’ять різних ущільнювальних розчинів,
              представлених на ринку, у межах незалежного випробування.
              Ущільнювальний розчин KA-S від PAGEL здобув найкращий результат
              серед усіх дев’яти.
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/pdf/de/flyer_ka_s_de.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Флаєр IKT
            </a>
          </div>
        </div>
      </div>

      <hr className="section-divider" />

      <div className="content-card">
        <h2>POSSEHL Швидкий бетон SB20</h2>
        <h1 style={{ fontSize: 22 }}>
          Запобігання шкідливій лужно-кремнеземній реакції в бетоні дорожніх
          плит
        </h1>
        <div className="two-col">
          <img
            className="single-image"
            src="https://www.pagel.com/wp-content/uploads/2018/12/sb20_05.jpg"
            alt="POSSEHL Швидкий бетон SB20"
          />
          <div>
            <p>
              Шкідлива лужно-кремнезема реакція є дуже поширеною проблемою на
              німецьких автомагістралях та інших транспортних зонах. У статті
              розглянуто заходи з обслуговування бетонних транспортних зон із
              використанням швидкого бетону POSSEHL з нововинайденою добавкою,
              що запобігає шкідливим лужно-кремнеземним реакціям.
            </p>
            <a
              className="btn-pill"
              href="https://www.pagel.com/all/pdf/references/de/dm1_akr_performance_schaeffel.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              📄 Перейти до статті
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
