import React, { useState } from "react";
import "./SalesPage.css";

// --- Дані: міжнародні партнери з продажу -----------------------------------
// Контактні дані (адреси, телефони, e-mail, сайти) залишені без перекладу,
// оскільки це фактичні реквізити компаній-партнерів.

const salesPartners = [
  {
    country: "Аргентина",
    flag: "flag_argentina.jpg",
    lines: [
      "FERROCEMENT ARGENTINA",
      "Av. Presidente Perón 9430 (B1714OMQ)",
      "Ituzaingó, Buenos Aires, Argentina",
      "Тел.: +5411 462129917",
      "Факс: +5411 44811422",
      "eloy.peyru@ferrocement.com.ar",
      "www.ferrocement.com.ar",
    ],
  },
  {
    country: "Австралія",
    flag: "flag_australia.jpg",
    lines: [
      "Danterr PTY LTD",
      "3 Sedgemoor Court Warrnambool",
      "Victoria, Australia 3280",
      "Тел.: +61 1800 262 383",
      "Факс: +61 (3) 5561 5499",
      "sales@danterr.com",
      "www.pagel.com.au",
    ],
  },
  { country: "Австрія", flag: "flag_austria.jpg", lines: [] },
  {
    country: "Бельгія",
    flag: "flag_belgium.jpg",
    lines: [
      "REWAH N.V",
      "Nijverheidsweg 24",
      "B-2240 Zandhoven",
      "Тел.: +32 3 4751414",
      "Факс: +32 3 4751094",
      "info@rewah.com",
      "www.rewah.com",
    ],
  },
  {
    country: "Болгарія",
    flag: "flag_bulgaria.jpg",
    lines: [
      "TERRA Ltd",
      "76 Vasil Aprilov St",
      "BG-5890 Valchitran",
      "Тел.: +359 877959649 або +359 879422448",
      "terra3d@abv.bg",
      "petioborisov@abv.bg",
      "www.pagel.bg",
    ],
  },
  {
    country: "Чилі",
    flag: "flag_chile.jpg",
    lines: [
      "GREPATEC Technologie ltda.",
      "Hermanos Cabott 6740, apt. 112",
      "Las Condes / Santiago de Chile",
      "Тел.: +56 9 9079 1842",
      "info@grepatec.cl",
      "www.grepatec.cl",
    ],
  },
  {
    country: "Китай",
    flag: "flag_china.jpg",
    lines: [
      "Beijing Ouhualian Science & Technology Ltd. (BOST)",
      "Room 1306, 13th floor, 2# Building",
      "Huangping Road, Huilongguan, Changping District",
      "100096 Beijing P.R. China",
      "Тел.: +86 10 82920623/24",
      "Факс: +86 10 82927921",
      "pagel_china@ouhualian.com",
      "www.pagel.com.cn",
    ],
  },
  {
    country: "Хорватія",
    flag: "flag_croatia.jpg",
    lines: [
      "PSB SPECIJALNI BETON d.o.o.",
      "Balokovićeva 67",
      "HR-10020 Zagreb",
      "Тел.: +385 1 5590411",
      "Факс: +385 1 5606180",
      "Моб.: +385 91 3023902",
      "pagel.info@gmail.com",
    ],
  },
  {
    country: "Чехія",
    flag: "flag_czech_republic.jpg",
    lines: [
      "HIC & SERVICES S.R.O.",
      "Teplárenská 611/1",
      "CZ-10800 Praha 10",
      "Тел.: +420 2 72702112",
      "Факс: +420 2 72702123",
      "hic@hic.cz",
      "www.hic.cz",
    ],
  },
  {
    country: "Данія",
    flag: "flag_denmark.jpg",
    lines: [
      "MB Projekt ApS",
      "Mølledamsvej 12",
      "DK-3460 Birkerød",
      "Тел.: +45 45820318",
      "Факс: +45 45820518",
      "info@mbprojekt.dk",
      "www.mbprojekt.dk",
    ],
  },
  {
    country: "Естонія",
    flag: "flag_estonia.jpg",
    lines: [
      "Selbu Holding OÜ",
      "Ülase 8-10",
      "EST-75501 Saku, Harjumaa",
      "Тел.: +372 6 088 080",
      "Моб.: +372 53 58 3696",
      "info@betoniplast.eu",
      "www.betoniplast.eu",
    ],
  },
  {
    country: "Фінляндія",
    flag: "flag_finland.jpg",
    lines: [
      "ALIMEX OY",
      "Alhotie 4",
      "FIN-04430 Järvenpää",
      "Тел.: +358 9 2922350",
      "Моб.: +358 40 5000987",
      "myynti@alimex.fi",
      "www.alimex.fi",
    ],
  },
  {
    country: "Франція",
    flag: "flag_france.jpg",
    lines: [
      "PAGEL SAS",
      "Espace Cristal, 22 rue Gustave Eiffel, BP10058",
      "F-78306 Poissy Cedex",
      "Тел.: +33 1 39223900",
      "Факс: +33 1 39224039",
      "Моб.: +33 6 12821911",
      "info@pagel.fr",
      "www.pagel.fr",
    ],
  },
  {
    country: "Греція",
    flag: "flag_greece.jpg",
    lines: [
      "SINTECNO S.A.",
      "4, Anaxagora str.",
      "GR-19400 Koropi",
      "Тел.: +30 210 6026020",
      "Факс: +30 210 6624568",
      "sintecno@otenet.gr",
      "www.sintecno.gr",
    ],
  },
  {
    country: "Угорщина",
    flag: "flag_hungary.jpg",
    lines: [
      "EXTRACEM Kft.",
      "Feszty Árpád utca 27.",
      "HU-2800 Tatabánya",
      "Тел.: +36 30375 7531, +36 20973 4098",
      "extracemkft@gmail.com",
    ],
  },
  {
    country: "Індія",
    flag: "flag_india.jpg",
    lines: [
      "Pidilite Industries Limited",
      "Ramakrishna Mandir Road, Kondivita, Andheri-East",
      "IND-Mumbai 400059",
      "Тел.: +91 22 2835 7757/7444",
      "Факс: +91 22 2835 7008",
      "Моб.: +91 858 4034424",
      "sumit.kumarpal@pidilite.com",
      "www.pidilite.com",
    ],
  },
  {
    country: "Іран",
    flag: "flag_iran.jpg",
    lines: [
      "PAGEL IRAN ARSHIA ORANG CO.",
      "No.20, 5th St., North Falamak Ave., Shahrak Gharb",
      "IR-1467885484 Tehran",
      "Тел.: +98 21 88370130",
      "Факс: +98 21 88075715",
      "info@arshiaorang.com",
      "www.arshiaorang.com",
    ],
  },
  {
    country: "Ірландія",
    flag: "flag_ireland.jpg",
    lines: [
      "ARC Construction Solution Ireland",
      "Ballykillduff, Tobinstown, Tullow, Co. Carlow, R93HD99",
      "Тел.: +353 83 0964453",
      "philip@acsi.ie",
      "www.acsi.ie",
    ],
  },
  {
    country: "Ісландія",
    flag: "flag_iceland.jpg",
    lines: [
      "Murbudin ehf.",
      "Pall Olafson, Kletthals 7",
      "IS-110 Reykjavík",
      "pall@murbudin.is",
      "www.murbudin.is",
    ],
  },
  {
    country: "Ізраїль",
    flag: "flag_israel.jpg",
    lines: [
      "SEALTEC CONSTRUCTION CO. LTD",
      "1 Bareket St.",
      "IL-37807 Beit Hananya",
      "Тел.: +04 6100333",
      "Факс: +04 6101510",
      "Моб.: +050 5210364",
      "sealtec@netvision.net.il",
      "www.sealtec.co.il",
    ],
  },
  {
    country: "Італія",
    flag: "flag_italy.jpg",
    lines: [
      "PAGEL ITALIA",
      "Via Valpolicella 58",
      "IT-37029 San Pietro in Cariano (Verona)",
      "Тел.: +39 3450 117540",
      "info@pagel.it",
      "www.pagel.it",
    ],
  },
  {
    country: "Японія",
    flag: "flag_japan.jpg",
    lines: [
      "PAGEL NIPPON CO. LTD.",
      "Matsushut Bldg. 3F, 2-12-13 Shinkawa Chuo-Ku",
      "J-100 Tokyo",
      "Тел.: +81 3 35535264",
      "Факс: +81 3 35535984",
      "pagel-nippon@mwe.biglobe.ne.jp",
      "www.b-info.jp/pagel-nippon/",
    ],
  },
  {
    country: "Корея",
    flag: "flag_korea.jpg",
    lines: [
      "IZIN CORPORATION CO.",
      "#302 Hee mang Bldg, 1207-5, Gaepo-Dong",
      "Kangnam-Gu, ROK-Seoul",
      "Тел.: +82 2 5734893",
      "Факс: +82 2 5734894",
      "Моб.: +82 10 45857589",
      "izin0325@naver.com",
    ],
  },
  {
    country: "Латвія",
    flag: "flag_latvia.jpg",
    lines: [
      "SIA “OK BUVMATERIALI”",
      "Piedrujas iela 15",
      "LV-1073 Riga",
      "Тел.: +371 673 65636",
      "Факс: +371 673 65626",
      "okbuv@okbuv.lv",
      "www.okbuv.lv",
    ],
  },
  {
    country: "Литва",
    flag: "flag_lithuania.jpg",
    lines: [
      "UAB MOSAS",
      "Birželio 23-iosios g. 5",
      "LT-03206 Vilnius",
      "Тел.: +370 5 2610179",
      "Факс: +370 5 2608355",
      "vytautas@mosas.lt",
      "www.mosas.lt",
    ],
  },
  {
    country: "Марокко",
    flag: "flag_morocco.jpg",
    lines: [
      "PROJET-TS",
      "BD Hassan II Résidence Galia, GH7 Appt 20",
      "MA-Mohammedia",
      "Тел.: +212 661 687 876",
      "i.jawad@projet-ts.ma",
      "www.project-ts.ma",
    ],
  },
  {
    country: "Нідерланди",
    flag: "flag_netherlands.jpg",
    lines: [
      "VERWAARD HANDELSONDERNEMING B.V.",
      "Dukaatlaan 7",
      "NL-2742 LH Waddinxveen",
      "Тел.: +31 88 5401100",
      "Моб.: +31 6 20091680",
      "info@verwaard-bv.nl",
      "www.verwaard-bv.nl",
    ],
  },
  {
    country: "Нова Зеландія",
    flag: "flag_new_zealand.jpg",
    lines: [
      "Everitt Site Supplies Ltd",
      "Unit 3/28 Anvil Road",
      "NZ-Silverdale, Auckland",
      "Тел.: +64 09 4268101",
      "Факс: +64 09 4268102",
      "steve@everitts.co.nz",
      "www.everitts.co.nz",
    ],
  },
  {
    country: "Норвегія",
    flag: "flag_norway.jpg",
    lines: [
      "PAGEL INDUSTRIMØRTEL A/S",
      "Postboks 135",
      "N-1751 Halden",
      "Тел.: +47 69 192514",
      "Факс: +47 69 191840",
      "Моб.: +47 95 107110",
      "larssen@pagel.no",
    ],
  },
  {
    country: "Польща",
    flag: "flag_poland.jpg",
    lines: [
      "PAGEL POLSKA",
      "ul. Lipowa 7, Komorniki",
      "PL-55-300 Środa Śląska, w. dolnośląskie",
      "Тел.: +48 71 3172806",
      "Факс: +48 71 3176136",
      "Моб.: +48 601 701877",
      "info@pagel.pl",
      "www.pagel.pl",
    ],
  },
  {
    country: "Португалія",
    flag: "flag_portugal.jpg",
    lines: [
      "BIU INTERNACIONAL",
      "Consultoria e Comércio Lda. Rua Gil Vicente, N° 4",
      "P-2615 Alverca",
      "Тел.: +351 21 9578888",
      "Факс: +351 21 9578890",
      "info@biu.pt",
      "www.biu.pt",
    ],
  },
  {
    country: "Катар",
    flag: "flag_qatar.jpg",
    lines: [
      "CIKO Middle East",
      "“C” Ring Road",
      "Q-Doha",
      "Тел.: +974 441147-87 / -90 / -94",
      "Факс: +974 441147-92",
      "manchuv@cikome.com",
      "www.cikome.com",
    ],
  },
  {
    country: "Румунія",
    flag: "flag_romania.jpg",
    lines: [
      "PAGEL ROMANIA S.R.L.",
      "Str. G-ral. Candiano Popescu Nr. 63A, Ap.1 Sector 4",
      "RO-040581 Bucuresti",
      "Тел.: +40 21 3206859",
      "Факс: +40 21 3224254",
      "office@pagel.ro",
      "www.pagel.ro",
    ],
  },
  {
    country: "Росія",
    flag: "flag_russia.jpg",
    lines: [
      "ASOKA Aktiengesellschaft (AO «ASOKA»)",
      "Savvinskaya Nab. 15",
      "RUS 119435, Moskau",
      "Тел.: +7 495 221-84-06",
      "asoka@asoka.ru",
      "www.asoka.ru",
    ],
  },
  {
    country: "Словаччина",
    flag: "flag_slovakia.jpg",
    lines: [
      "ALLMEDIA s.r.o.",
      "Pod gaštanmi 4",
      "SK-821 07 Bratislava",
      "Тел.: +421 2 62310920",
      "Факс: +421 2 62413041",
      "allmedia@allmedia.sk",
      "www.allmedia.sk",
    ],
  },
  {
    country: "Південна Африка",
    flag: "flag_south_africa.jpg",
    lines: [
      "Megapascal Contracting Technologies",
      "123 New Road, Grand Central",
      "ZA-1685 Midrand",
      "Тел.: +27 11 8050683",
      "Факс: +27 11 8052020",
      "Моб.: +27 829069701",
      "megapascalc@mweb.co.za",
    ],
  },
  {
    country: "Іспанія",
    flag: "flag_spain.jpg",
    lines: [
      "BIU INTERNACIONAL",
      "Consultoria e Comércio Lda. Rua Gil Vicente, N° 4",
      "P-2615 Alverca",
      "Тел.: +34 671 165 580",
      "info@biu.pt",
      "www.biu.pt/es",
    ],
  },
  {
    country: "Шрі-Ланка",
    flag: "flag_sri_lanka.jpg",
    lines: [
      "CONCRETE CHEMICAL PRODUCTS",
      "73, Pepiliyana Road",
      "LK-Nugegoda",
      "Тел.: +94 114803218 / +94 112812916",
      "Факс: +94 114304890",
      "Моб.: +94 777714411",
      "concreteralf@eureka.lk",
    ],
  },
  {
    country: "Швеція",
    flag: "flag_sweden.jpg",
    lines: [
      "B-Tech Injektering AB",
      "Lyftkransvägen 2",
      "SE-142 50 Skogås Stockholm",
      "Тел.: +46 70 5762893",
      "jim@betongtech.se",
      "www.betongtech.se",
    ],
  },
  {
    country: "Швейцарія",
    flag: "flag_switzerland.jpg",
    lines: [
      "Eberle Bautechnik AG",
      "Gewerbestraße 11",
      "CH-8162 Steinmaur",
      "Тел.: +41 44 8846161",
      "Факс: +41 44 8846162",
      "info@et-eberle.ch",
      "www.et-eberle.ch",
    ],
  },
  {
    country: "Тайвань",
    flag: "flag_taiwan.jpg",
    lines: [
      "TAIWAN POLIMAX CO., LTD.",
      "11F, No. 257, Wen Tsz Rd., Tzuo Ying District",
      "RC-Kaohsiung City, Taiwan",
      "Тел.: +886 734 38910",
      "Факс: +886 734 30476",
      "Моб.: +886 933 324207",
      "bat10001@ms32.hinet.net",
    ],
  },
  {
    country: "Туреччина",
    flag: "flag_turkey.jpg",
    lines: [
      "Endura Mühendislik Ltd.",
      "Kozyatağı Mahallesi, Gülbahar Sok No 13/3, AR Plaza C Blok Kat 4",
      "Kadiköy, TR-34742 Istanbul",
      "Тел.: +90 216 212 0682",
      "info@enduraltd.com",
      "www.enduraltd.com",
    ],
  },
  {
    country: "Україна",
    flag: "flag_ukraine.jpg",
    lines: [
      "ТзОВ «N-Group»",
      "а/с 6571",
      "UA-Львів, 79026",
      "Тел.: +38 097 4416979, +38 050 3706578",
      "ngroup.ua@gmail.com",
      "www.knp.lviv.ua",
    ],
  },
  {
    country: "Уругвай",
    flag: "flag_uruguay.jpg",
    lines: [
      "FERROCEMENT URUGUAY",
      "Juan Carlos Gómez 1388, of. 901",
      "UY-11000 Montevideo",
      "Тел.: +598 29150297",
      "info@ferrocement.com.uy",
    ],
  },
  {
    country: "Велика Британія",
    flag: "flag_united_kingdom.jpg",
    lines: [
      "PES (UK) LIMITED",
      "Unit 1, Watling Close, Sketchley Meadows Business Park",
      "GB-Hinckley, Leicestershire, LE10 3EZ",
      "Тел.: +44 1455 251251",
      "Факс: +44 1455 251252",
      "sales@pesukltd.com",
      "www.pesukltd.com",
    ],
  },
  {
    country: "США",
    flag: "flag_usa.jpg",
    lines: [
      "PAGEL-USA LLC",
      "4290 Shoreline Drive",
      "USA-Spring Park, Minnesota 55384",
      "Тел.: +1 952 9426105",
      "Факс: +1 952 9426108",
      "sales@pagel-usa.com",
      "www.pagel-usa.com",
    ],
  },
];

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

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({ ...prev, [name]: type === "checkbox" ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message || !form.consent) return;
    setSubmitted(true);
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
            <p className="salesinfo-eyebrow">Наш відділ продажів та виїзна служба</p>
            <h1>Технічна консультація, продажі та контакти</h1>
            <p className="salesinfo-intro">
              Задоволеність наших клієнтів завжди є для нас пріоритетом. Завдяки
              розгалуженій мережі збуту PAGEL гарантує клієнтам максимальну
              підтримку. Якщо у вас виникли запитання щодо наших продуктів, їх
              застосування чи використання, поруч із вами завжди є компетентний
              технічний консультант, готовий надати професійну пораду.
            </p>
          </section>

          <div className="fl-separator" />

          <section className="salesinfo-block">
            <h2 className="section-heading">
              Внутрішній відділ продажів / управління продажами
            </h2>
            <div className="salesinfo-domestic-grid">
              <figure className="salesinfo-photo">
                <img
                  src="https://www.pagel.com/wp-content/uploads/2020/12/wp_pagel_labor.jpg"
                  alt="Офіс PAGEL в Ессені"
                />
              </figure>
              <AccordionGroup items={domesticSections} renderContent={(item) => item.content} />
            </div>
          </section>

          <div className="fl-separator" />

          <section className="salesinfo-block">
            <h2 className="section-heading">Міжнародні партнери з продажу</h2>
            <figure className="salesinfo-photo salesinfo-worldmap">
              <img
                src="https://www.pagel.com/wp-content/uploads/2021/04/weltkarte_gb.jpg"
                alt="Карта міжнародних партнерів PAGEL"
              />
            </figure>

            <div className="salesinfo-partners-columns">
              <AccordionGroup
                items={salesPartners.slice(0, Math.ceil(salesPartners.length / 2))}
                renderContent={(item) =>
                  item.lines.length ? (
                    <p>
                      {item.lines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  ) : (
                    <p>&nbsp;</p>
                  )
                }
              />
              <AccordionGroup
                items={salesPartners.slice(Math.ceil(salesPartners.length / 2))}
                renderContent={(item) =>
                  item.lines.length ? (
                    <p>
                      {item.lines.map((line, i) => (
                        <React.Fragment key={i}>
                          {line}
                          <br />
                        </React.Fragment>
                      ))}
                    </p>
                  ) : (
                    <p>&nbsp;</p>
                  )
                }
              />
            </div>

            <a
              className="salesinfo-pdf-button"
              href="https://www.pagel.com/all/pdf/general/international_adresses.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Огляд міжнародних продажів (PDF)
            </a>
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
                    placeholder="Ваше повідомлення. Якщо ви вкажете поштовий індекс, ми зможемо направити ваш запит безпосередньо відповідальному представнику відділу продажів."
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

                <button type="submit" className="salesinfo-submit-button">
                  Надіслати
                </button>
              </form>
            )}
          </section>
        </div>
      </main>
    </>
  );
}