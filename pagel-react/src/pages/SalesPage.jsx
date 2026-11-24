import React, { useState } from "react";
import "./SalesPage.css";



// --- Допоміжний компонент акордеону -----------------------------------------
function AccordionGroup({ items, renderContent }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="salesinfo-accordion">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div
            className={`salesinfo-accordion-item${isOpen ? " is-open" : ""}`}
            key={item.title || item.country}
          >
            <button
              type="button"
              className="salesinfo-accordion-button"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.title || item.country}</span>
              <span className="salesinfo-accordion-icon">{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen && (
              <div className="salesinfo-accordion-panel">{renderContent(item)}</div>
            )}
          </div>
        );
      })}
    </div>
  );
}

// --- Головна секція внутрішнього відділу продажів (Німеччина) --------------
// TO DO: VIK remove info
const domesticSections = [
  {
    title: "Головний офіс",
    content: (
      <>
        <h3>PAGEL Spezial-Beton GmbH & Co. KG</h3>
        <p>
          Wolfsbankring 9<br />
          D-45355 Essen<br />
          Тел. <a href="tel:+49201685040">+49 201 68504-0</a>
          <br />
          Факс <a href="tel:+492016850431">+49 201 68504-31</a>
          <br />
          <a href="mailto:info@pagel.com">info@pagel.com</a>
        </p>
        <p>
          Графік роботи:
          <br />
          Пн–Чт: 7.30–12.00 / 12.30–16.30
          <br />
          Пт: 7.30–12.00 / 12.30–14.00
        </p>
      </>
    ),
  },
  {
    title: "Закордонний відділ продажів",
    content: (
      <>
        <h3>Daniel Valaev</h3>
        <p>
          Моб. <a href="tel:+491705754751">+49 170 5754751</a>
          <br />
          <a href="mailto:valaev@pagel.de">valaev@pagel.de</a>
        </p>
        <h3>Martina Linke</h3>
        <p>
          Тел. <a href="tel:+492016850423">+49 201 68504-23</a>
          <br />
          <a href="mailto:linke@pagel.de">linke@pagel.de</a>
        </p>
      </>
    ),
  },
  {
    title: "Склад / Відвантаження",
    content: (
      <>
        <h3>PAGEL Spezial-Beton GmbH & Co. KG</h3>
        <p>
          Wolfsbankring 9<br />
          D-45355 Essen<br />
          Тел. <a href="tel:+492016850436">+49 201 68504-36</a>
          <br />
          Факс <a href="tel:+492016850431">+49 201 68504-31</a>
          <br />
          <a href="mailto:versand@pagel.de">versand@pagel.de</a>
        </p>
        <p>
          Графік роботи:
          <br />
          Пн–Чт: 6.00–16.00, прийом вантажів до 15.30
          <br />
          Пт: 6.00–14.30, прийом вантажів до 14.00
        </p>
      </>
    ),
  },
  {
    title: "Продажі в Німеччині",
    content: (
      <>
        <h3>Для прямих замовлень звертайтесь:</h3>
        <p>
          Факс <a href="tel:+492016850450">+49 201 68504-50</a>
          <br />
          <a href="mailto:bestellung@pagel.de">bestellung@pagel.de</a>
        </p>
        <h3>Комерційні пропозиції</h3>
        <h3>Arthur Brozyna</h3>
        <p>
          Тел. <a href="tel:+492016850420">+49 201 68504-20</a>
          <br />
          <a href="mailto:brozyna@pagel.de">brozyna@pagel.de</a>
        </p>
        <h3>Stephan Roos</h3>
        <p>
          Тел. <a href="tel:+492016850429">+49 201 68504-29</a>
          <br />
          <a href="mailto:roos@pagel.de">roos@pagel.de</a>
        </p>
      </>
    ),
  },
];

export default function SalesPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.consent) return;

    setLoading(true);
    setErrorMsg("");

    try {
      // Відправка форми напряму на ngroup.ua@gmail.com через FormSubmit.co
      // (безкоштовний сервіс, не потребує реєстрації чи API-ключа).
      // ВАЖЛИВО: при першій реальній відправці FormSubmit надішле лист
      // на ngroup.ua@gmail.com з проханням підтвердити активацію форми
      // для цього сайту (одноразова дія).
      const response = await fetch(
        "https://formsubmit.co/ajax/ngroup.ua@gmail.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
            _subject: "Нове повідомлення з сайту PAGEL",
            _template: "table",
          }),
        }
      );

      const result = await response.json();

      if (response.ok) {
        setSubmitted(true);
      } else {
        setErrorMsg(
          result.message || "Не вдалося надіслати повідомлення. Спробуйте пізніше."
        );
      }
    } catch (err) {
      console.error("Submit Error:", err);
      setErrorMsg("Сталася помилка мережі. Перевірте з'єднання.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="breadcrumbs-outer">
        <div className="wrap">
          <div className="breadcrumb">
            <a href="/">
              <i className="fas fa-home" aria-hidden="true" /> PAGEL
            </a>
            <span aria-hidden="true">/</span> Продажі
          </div>
        </div>
      </div>

      <main className="site-inner">
        <div className="wrap salesinfo-page">
          <section className="salesinfo-hero">
            <h1>Технічна консультація, продажі та контакти</h1>
            <p className="salesinfo-intro">
              ТОВ N-GROUP являється офіційним представником ТМ PAGEL в Україні
            </p>

            <div className="salesinfo-cards">
              <div className="salesinfo-card">
                <h3>Відділ продажів</h3>
                <p>
                  Тел.: <a href="tel:+380674416979">+380674416979</a>
                  <br />
                  <a href="mailto:ngroup.ua@gmail.com">ngroup.ua@gmail.com</a>
                </p>
              </div>

              <div className="salesinfo-card">
                <h3>Технічна консультація</h3>
                <p>
                  Тел.: <a href="tel:+380503706578">+380503706578</a>
                </p>
              </div>

              <div className="salesinfo-card">
                <h3>Робочий час</h3>
                <p>
                  Робочі дні: пн–пт
                  <br />
                  Робочі години: 9:00–17:30
                  <br />
                  Обід: 13:00–14:00
                </p>
              </div>

              <div className="salesinfo-card">
                <h3>Поштова адреса</h3>
                <p>Україна, м.Львів, 79026, а/с 6571</p>
              </div>

              <div className="salesinfo-card">
                <h3>Нова пошта</h3>
                <p>
                  м.Львів, відділення №18,
                  <br />
                  ТОВ "Н-ГРУП", ЄДРПОУ 39398761
                  <br />
                  конт. особа: <a href="tel:+380674416979">+380674416979</a>
                </p>
              </div>

              <div className="salesinfo-card">
                <h3>Склад матеріалів Pagel</h3>
                <p>
                  с. Солонка, Львівська область
                  <br />
                  вул. Стрийська, 55
                </p>
                <p>
                  Зав. складу: <a href="tel:+380974788167">+380974788167</a>
                  <br />
                  Заступник: <a href="tel:+380671442027">+380671442027</a>
                </p>
                <p>
                  <a
                    href="https://maps.app.goo.gl/u27CezM5tz9bzRzN9"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Показати на карті
                  </a>
                </p>
              </div>
            </div>

            <div className="salesinfo-card salesinfo-requisites">
              <h3>Реквізити</h3>
              <dl>
                <dt>Компанія</dt>
                <dd>Товариство з обмеженою відповідальністю «Н-ГРУП»</dd>
                <dt>Юридична адреса</dt>
                <dd>79044, м.Львів, вул.Сахарова 27/107</dd>
                <dt>Поштова адреса</dt>
                <dd>а/с 6571, м.Львів 79026</dd>
                <dt>р/р</dt>
                <dd>UA613052990000026007011010502 у ЛФ ПАТ КБ «ПРИВАТБАНК»</dd>
                <dt>МФО</dt>
                <dd>325321</dd>
                <dt>ЄДРПОУ</dt>
                <dd>39398761</dd>
                <dt>ІПН</dt>
                <dd>393987613059</dd>
                <dt>Директор</dt>
                <dd>Назаревич Вікторія Богданівна, діє на підставі статуту</dd>
                <dt>Ел. пошта</dt>
                <dd>
                  <a href="mailto:ngroup.ua@gmail.com">ngroup.ua@gmail.com</a>
                </dd>
              </dl>
            </div>
          </section>

          <div className="fl-separator" />

          <div className="fl-separator" />

          <section className="salesinfo-block">
            <h2 className="section-heading">Міжнародні партнери з продажу</h2>
            <figure className="salesinfo-photo salesinfo-worldmap">
              <img
                src="https://www.pagel.com/wp-content/uploads/2021/04/weltkarte_gb.jpg"
                alt="Карта міжнародних партнерів PAGEL"
              />
            </figure>
          </section>

          <div className="fl-separator" />

          <section className="salesinfo-block salesinfo-contact-section">
            <h2 className="section-heading">Контактна форма</h2>
            <p>
              Потрібна особиста та фахова консультація? Зв'яжіться з нашими
              технічними консультантами тут:
            </p>

            {submitted ? (
              <p className="salesinfo-form-success">
                Дякуємо за ваше повідомлення! Ми зв'яжемося з вами найближчим часом.
              </p>
            ) : (
              <form className="salesinfo-form" onSubmit={handleSubmit}>
                {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

                <div className="salesinfo-form-group">
                  <label htmlFor="salesinfo-name">Ваше ім'я</label>
                  <input
                    type="text"
                    id="salesinfo-name"
                    name="name"
                    placeholder="Ваше ім'я"
                    value={form.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="salesinfo-form-group">
                  <label htmlFor="salesinfo-email">Ваша електронна адреса</label>
                  <input
                    type="email"
                    id="salesinfo-email"
                    name="email"
                    placeholder="Ваша електронна адреса"
                    value={form.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="salesinfo-form-group">
                  <label htmlFor="salesinfo-message">
                    Ваше повідомлення. Якщо ви вкажете поштовий індекс, ми зможемо
                    направити ваш запит безпосередньо відповідальному
                    представнику відділу продажів.
                  </label>
                  <textarea
                    id="salesinfo-message"
                    name="message"
                    placeholder="Ваше повідомлення..."
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="salesinfo-form-group salesinfo-form-checkbox">
                  <p>
                    Я ознайомився(-лась) з{" "}
                    <a href="/privacy-policy" target="_blank" rel="noopener noreferrer">
                      положенням про захист персональних даних
                    </a>{" "}
                    і даю згоду на електронне збирання та зберігання наданих мною
                    даних. Мої дані використовуються виключно для обробки та
                    відповіді на мій запит.
                  </p>
                  <label htmlFor="salesinfo-consent">
                    <input
                      type="checkbox"
                      id="salesinfo-consent"
                      name="consent"
                      checked={form.consent}
                      onChange={handleChange}
                      required
                    />
                    Так, я даю згоду на обробку моїх даних.
                  </label>
                </div>

                <button
                  type="submit"
                  className="salesinfo-submit-button"
                  disabled={loading}
                >
                  {loading ? "Надсилання..." : "Надіслати"}
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
    </>
  );
}
