import React, { useState } from 'react';
import './evolin.css';
import { 
  Leaf, 
  ShieldCheck, 
  Factory, 
  FileCheck, 
  ChevronRight, 
  CheckCircle2, 
  ArrowRight, 
  Calculator
} from 'lucide-react';

const productsData = [
  {
    id: 'v1-10',
    name: 'V1/10 PAGEL-Verguss',
    category: 'Заливальний розчин',
    description: 'Плинний прецизійний розчин для анкерування та підливки обладнання.',
    epdStandard: 0.67491,
    pagelStandard: 0.41910,
    evolineCO2: 0.14611,
    savingEpd: '78.4%',
    savingStandard: '65.1%',
  },
  {
    id: 'v1-50',
    name: 'V1/50 PAGEL-Verguss',
    category: 'Заливальний розчин',
    description: 'Універсальний прецизійний розчин для надійного анкерування без деформацій.',
    epdStandard: 0.67491,
    pagelStandard: 0.39860,
    evolineCO2: 0.14379,
    savingEpd: '78.7%',
    savingStandard: '63.9%',
  },
  {
    id: 'v1-80',
    name: 'V1/80 PAGEL-Verguss',
    category: 'Заливальний розчин',
    description: 'Спеціальний розчин з високою початковою та кінцевою міцністю.',
    epdStandard: 0.67491,
    pagelStandard: 0.34350,
    evolineCO2: 0.13421,
    savingEpd: '80.1%',
    savingStandard: '60.9%',
  },
  {
    id: 'v1-160',
    name: 'V1/160 PAGEL-Verguss',
    category: 'Заливальний розчин',
    description: 'Крупнофракційний розчин для заповнення великих об\'ємів та товстих шарів.',
    epdStandard: 0.67491,
    pagelStandard: 0.40800,
    evolineCO2: 0.14406,
    savingEpd: '78.7%',
    savingStandard: '64.7%',
  },
  {
    id: 'v80c45',
    name: 'V80C45 Vergussbeton',
    category: 'Заливальний бетон',
    description: 'Високоміцний бетон для важких конструкцій та об\'єктів інфраструктури.',
    epdStandard: 0.67491,
    pagelStandard: 0.30910,
    evolineCO2: 0.13253,
    savingEpd: '80.4%',
    savingStandard: '57.1%',
  },
  {
    id: 'v160c45',
    name: 'V160C45 Vergussbeton',
    category: 'Заливальний бетон',
    description: 'Плинний бетон для бетонування великих масивів підливки.',
    epdStandard: 0.67491,
    pagelStandard: 0.30830,
    evolineCO2: 0.13169,
    savingEpd: '80.5%',
    savingStandard: '57.3%',
  },
  {
    id: 'hf50',
    name: 'HF50 Hochfestverguss',
    category: 'Високоміцний заливальний розчин',
    description: 'Надвисокоміцний розчин С100/115 для екстремальних динамічних навантажень та вітроенергетики.',
    epdStandard: 0.67491,
    pagelStandard: 0.36840,
    evolineCO2: 0.14094,
    savingEpd: '79.1%',
    savingStandard: '61.7%',
  },
  {
    id: 'twn20',
    name: 'TWN20 Trinkwassermörtel',
    category: 'Ремонт та захист',
    description: 'Спеціальний розчин Тип 1 для гігієнічних покриттів та ремонту резервуарів питної води.',
    epdStandard: 0.67491,
    pagelStandard: 0.40610,
    evolineCO2: 0.12359,
    savingEpd: '81.7%',
    savingStandard: '69.6%',
  },
];

export default function PagelEvolinePage() {
  const [selectedTab, setSelectedTab] = useState('epd'); // 'epd' | 'standard'
  const [calcProduct, setCalcProduct] = useState(productsData[0]);
  const [tonnage, setTonnage] = useState(10); // тон матеріалу
  const [contactSubmitted, setContactSubmitted] = useState(false);

  // Розрахунок економії CO2
  const epdBaseline = calcProduct.epdStandard * tonnage * 1000; // кг CO2
  const evolineEmission = calcProduct.evolineCO2 * tonnage * 1000; // кг CO2
  const savedCO2 = Math.round(epdBaseline - evolineEmission);

  return (
    <div className="evoline-page min-h-screen bg-slate-50 text-slate-800 font-sans">
      {/* Шапка / Навігація */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="text-2xl font-black tracking-tight text-slate-900">
              PAGEL<span className="text-emerald-600">®</span>
            </span>
            <span className="h-6 w-px bg-slate-300 hidden sm:block"></span>
            <span className="text-lg font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
              evoline
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
            <a href="#vorteile" className="hover:text-emerald-600 transition-colors">Переваги</a>
            <a href="#technologie" className="hover:text-emerald-600 transition-colors">evoZero® та CCS</a>
            <a href="#produkte" className="hover:text-emerald-600 transition-colors">Продукти</a>
            <a href="#rechner" className="hover:text-emerald-600 transition-colors">Калькулятор CO₂</a>
            <a href="#vergleich" className="hover:text-emerald-600 transition-colors">Порівняння</a>
          </nav>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
          >
            Надіслати запит
          </a>
        </div>
      </header>

      {/* Hero-секція */}
      <section className="relative overflow-hidden bg-gradient-to-b from-emerald-950 via-slate-900 to-slate-900 text-white py-20 lg:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-800/20 via-transparent to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium">
                <Leaf className="w-4 h-4 text-emerald-400" />
                <span>Зменшення CO₂ до -81,7% без сторонньої компенсації</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-none">
                PAGEL<span className="text-emerald-400">®</span> evoline
              </h1>
              <p className="text-xl sm:text-2xl text-slate-300 font-light leading-relaxed">
                Екологічне будівництво без компромісів. Максимальні технічні характеристики у поєднанні з підтвердженим зниженням вуглецевого сліду.
              </p>
              <p className="text-slate-400 text-base leading-relaxed">
                Створено на основі інноваційного цементу <strong>evoZero® Carbon Captured Near-Zero</strong> від Heidelberg Materials. Пряме вловлювання CO₂ під час виробничого процесу замість купівлі компенсаційних сертифікатів.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <a
                  href="#produkte"
                  className="px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl shadow-lg shadow-emerald-500/20 transition-all flex items-center space-x-2"
                >
                  <span>Огляд продуктів</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href="#rechner"
                  className="px-6 py-3.5 bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold rounded-xl transition-all flex items-center space-x-2"
                >
                  <Calculator className="w-4 h-4 text-emerald-400" />
                  <span>Розрахувати екологічний ефект</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-6 sm:p-8 backdrop-blur-md shadow-2xl space-y-6">
                <h3 className="text-xl font-bold text-white border-b border-slate-700 pb-4 flex items-center justify-between">
                  <span>Головні переваги</span>
                  <ShieldCheck className="w-6 h-6 text-emerald-400" />
                </h3>
                <ul className="space-y-4 text-sm text-slate-300">
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Скорочення CO₂ до 81,7%</strong> порівняно з еталонним екологічним паспортом (Muster-EPD).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Без втрати якості:</strong> Повна відповідність міцності та зручність у роботі за стандартами PAGEL.</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Технологія CCS:</strong> Довговічне та безпечне зберігання CO₂ на заводі в Бревіку (Норвегія).</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong>Аудит від DNV:</strong> Повна прозорість та відповідність вимогам екологічних тендерів.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Калькулятор CO2 */}
      <section id="rechner" className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Проєктний калькулятор
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
              Розрахунок економії CO₂ для вашого об'єкта
            </h2>
            <p className="text-slate-600 mt-2">
              Оцініть, скільки тон вуглекислого газу ви зможете зберегти завдяки використанню лінійки PAGEL® evoline.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-10 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-2">
                    1. Оберіть продукт:
                  </label>
                  <select
                    className="w-full bg-white border border-slate-300 rounded-lg px-4 py-3 text-slate-900 font-medium focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500"
                    value={calcProduct.id}
                    onChange={(e) => {
                      const p = productsData.find(prod => prod.id === e.target.value);
                      if (p) setCalcProduct(p);
                    }}
                  >
                    {productsData.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.name} (-{p.savingEpd} CO₂)
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label className="text-sm font-semibold text-slate-700">
                      2. Необхідний об'єм (тонн):
                    </label>
                    <span className="text-lg font-bold text-emerald-600">{tonnage} т</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="100"
                    value={tonnage}
                    onChange={(e) => setTonnage(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                  />
                  <div className="flex justify-between text-xs text-slate-400 mt-1">
                    <span>1 т</span>
                    <span>50 т</span>
                    <span>100 т</span>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-900 text-white rounded-xl p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-md">
                <div>
                  <span className="text-emerald-300 text-xs font-semibold uppercase tracking-wider block mb-1">
                    Очікуване скорочення викидів
                  </span>
                  <div className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">
                    {savedCO2.toLocaleString()} <span className="text-xl font-normal text-slate-200">кг CO₂</span>
                  </div>
                  <p className="text-xs text-emerald-200/80 mt-2">
                    Економія порівняно зі стандартом Muster-EPD для матеріалу {calcProduct.name} в об'ємі {tonnage} т.
                  </p>
                </div>

                <div className="border-t border-emerald-800/80 pt-4 text-xs space-y-2 text-slate-300">
                  <div className="flex justify-between">
                    <span>Викиди за Muster-EPD:</span>
                    <span className="font-semibold text-slate-100">
                      {Math.round(calcProduct.epdStandard * tonnage * 1000).toLocaleString()} кг
                    </span>
                  </div>
                  <div className="flex justify-between text-emerald-300 font-semibold">
                    <span>Викиди evoline:</span>
                    <span>
                      {Math.round(calcProduct.evolineCO2 * tonnage * 1000).toLocaleString()} кг
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Технологічна секція: evoZero & CCS */}
      <section id="technologie" className="py-20 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="text-emerald-700 font-bold uppercase tracking-wider text-xs bg-emerald-100 px-3 py-1 rounded-full border border-emerald-300">
                Реальне зниження викидів
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
                Як працює технологія evoZero® Carbon Capture?
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Замість того, щоб компенсувати шкоду довкіллю сторонніми проектами, PAGEL використовує технологію вловлювання CO₂ безпосередньо у місці його утворення — на цементному заводі в Бревіку (Норвегія).
              </p>
              
              <div className="space-y-4 pt-2">
                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                    <Factory className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">1. Вловлювання CO₂ (CCS)</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Газ уловлюється безпосередньо під час випалу цементу та надійно ізолюється у підземних сховищах під морським дном.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                    <FileCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">2. Цифровий Carbon Bank та EACs</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Кожна вилучена тонна CO₂ фіксується у реєстрі цифрових екологічних сертифікатів (EAC) та чітко закріплюється за партією продукції.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                  <div className="p-2.5 bg-emerald-50 rounded-lg text-emerald-600 shrink-0">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">3. Перевірено аудитором DNV</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      Незалежна міжнародна аудиторська компанія DNV гарантує точність обліку та унеможливлює подвійне зарахування показників.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-900 text-white rounded-2xl p-8 shadow-xl border border-slate-800 space-y-6">
              <h3 className="text-2xl font-bold border-b border-slate-800 pb-4 text-emerald-400">
                Структура показника GWP-Total
              </h3>
              <p className="text-slate-300 text-sm">
                Приклад розрахунку потенціалу глобального потепління (GWP-Total) за стадіями життєвого циклу матеріалу PAGEL evoline (кг CO₂-екв / кг):
              </p>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="flex justify-between p-2.5 bg-slate-800/60 rounded-lg">
                  <span className="text-slate-300">A1-A3 (Видобуток сировини та виробництво)</span>
                  <span className="font-mono text-emerald-300 font-semibold">0,08468 кг</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-800/60 rounded-lg">
                  <span className="text-slate-300">A4-A5 (Транспортування та укладання)</span>
                  <span className="font-mono text-emerald-300 font-semibold">0,05731 кг</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-800/60 rounded-lg">
                  <span className="text-slate-300">C1-C4 (Демонтаж та утилізація)</span>
                  <span className="font-mono text-emerald-300 font-semibold">0,01954 кг</span>
                </div>
                <div className="flex justify-between p-2.5 bg-slate-800/60 rounded-lg">
                  <span className="text-slate-300">D (Потенціал вторинної переробки)</span>
                  <span className="font-mono text-emerald-400 font-semibold">-0,01774 кг</span>
                </div>
                <div className="flex justify-between p-3 bg-emerald-950 border border-emerald-800/60 rounded-xl font-bold text-base text-white">
                  <span>Загальний GWP-Total</span>
                  <span className="font-mono text-emerald-400">0,14379 кг CO₂-екв/кг</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Каталог продуктів */}
      <section id="produkte" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <span className="text-emerald-600 font-bold uppercase tracking-wider text-xs bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Каталог
              </span>
              <h2 className="text-3xl font-extrabold text-slate-900 mt-3">
                Лінійка продуктів PAGEL® evoline
              </h2>
            </div>
            <p className="text-slate-600 max-w-md mt-4 md:mt-0 text-sm">
              Спеціалізовані суміші та бетони зі зниженим рівнем CO₂, які зберігають звичні високі технічні стандарти та надійність.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {productsData.map((product) => (
              <div
                key={product.id}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 bg-slate-200/60 px-2.5 py-1 rounded-md">
                      {product.category}
                    </span>
                    <span className="text-xs font-bold text-emerald-700 bg-emerald-100 border border-emerald-200 px-2 py-0.5 rounded-full">
                      -{product.savingEpd} CO₂
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200 space-y-2">
                  <div className="flex justify-between text-xs text-slate-500">
                    <span>Викиди CO₂:</span>
                    <span className="font-mono font-bold text-slate-800">
                      {product.evolineCO2} кг/кг
                    </span>
                  </div>
                  <button 
                    onClick={() => {
                      setCalcProduct(product);
                      document.getElementById('rechner')?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full mt-3 py-2 px-3 bg-white hover:bg-emerald-50 text-emerald-700 border border-emerald-300 text-xs font-bold rounded-lg transition-colors flex items-center justify-center space-x-1"
                  >
                    <span>Розрахувати у калькуляторі</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Порівняльна таблиця */}
      <section id="vergleich" className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <h2 className="text-3xl font-extrabold text-white">
              Порівняння показників викидів CO₂
            </h2>
            <p className="text-slate-400 mt-2 text-sm">
              Зіставте параметри продуктів PAGEL® evoline із галузевими стандартами EPD та базовою лінійкою PAGEL.
            </p>

            <div className="inline-flex p-1 bg-slate-800 rounded-xl mt-6 border border-slate-700">
              <button
                onClick={() => setSelectedTab('epd')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  selectedTab === 'epd'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                проти Muster-EPD (галузевий стандарт)
              </button>
              <button
                onClick={() => setSelectedTab('standard')}
                className={`px-5 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  selectedTab === 'standard'
                    ? 'bg-emerald-500 text-slate-950 shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                проти стандартних продуктів PAGEL
              </button>
            </div>
          </div>

          <div className="overflow-x-auto rounded-2xl border border-slate-800 bg-slate-950 shadow-2xl">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800/80 text-slate-300 uppercase text-xs font-semibold tracking-wider border-b border-slate-700">
                <tr>
                  <th className="py-4 px-6">Продукт</th>
                  <th className="py-4 px-6">
                    {selectedTab === 'epd' ? 'Muster-EPD (кг CO₂/кг)' : 'Стандарт (кг CO₂/кг)'}
                  </th>
                  <th className="py-4 px-6 text-emerald-400">PAGEL evoline (кг CO₂/кг)</th>
                  <th className="py-4 px-6">Економія (кг CO₂/кг)</th>
                  <th className="py-4 px-6 text-right">Зменшення %</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800 text-slate-300">
                {productsData.map((p) => {
                  const baseline = selectedTab === 'epd' ? p.epdStandard : p.pagelStandard;
                  const saving = (baseline - p.evolineCO2).toFixed(5);
                  const reductionPct = selectedTab === 'epd' ? p.savingEpd : p.savingStandard;

                  return (
                    <tr key={p.id} className="hover:bg-slate-900/60 transition-colors">
                      <td className="py-4 px-6 font-semibold text-white">{p.name}</td>
                      <td className="py-4 px-6 font-mono text-slate-400">{baseline.toFixed(5)}</td>
                      <td className="py-4 px-6 font-mono font-bold text-emerald-400">{p.evolineCO2.toFixed(5)}</td>
                      <td className="py-4 px-6 font-mono text-slate-300">{saving}</td>
                      <td className="py-4 px-6 text-right">
                        <span className="inline-block px-2.5 py-1 rounded-md text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                          -{reductionPct}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Форма зворотного зв'язку */}
      <section id="kontakt" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-12 shadow-sm">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-extrabold text-slate-900">
                Отримати консультацію або специфікацію
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Фахівці PAGEL допоможуть підібрати рішення для проєктних кошторисів та екологічних тендерів.
              </p>
            </div>

            {contactSubmitted ? (
              <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="font-bold text-lg">Дякуємо за ваш запит!</h3>
                <p className="text-sm text-emerald-700">
                  Наш технічний спеціаліст зв'яжеться з вами найближчим часом.
                </p>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setContactSubmitted(true);
                }}
                className="space-y-4"
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Ім'я *</label>
                    <input required type="text" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">Прізвище *</label>
                    <input required type="text" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Електронна пошта *</label>
                  <input required type="email" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Продукт або назва об'єкта</label>
                  <input type="text" placeholder="наприклад, V1/50 для будівництва виробничого цеху" className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700 mb-1">Ваше повідомлення</label>
                  <textarea rows={4} className="w-full bg-white border border-slate-300 rounded-lg px-4 py-2.5 text-sm focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" placeholder="Деталі проєкту, необхідні об'єми тощо..."></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl shadow-md transition-colors text-sm"
                >
                  Надіслати запит
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Підвал */}
      <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-xs flex flex-col md:flex-row justify-between items-center gap-4">
          <div>
            <span className="font-bold text-white text-base">PAGEL® Spezial-Beton GmbH & Co. KG</span>
            <p className="mt-1">Wolfsbankring 9, 45355 Essen, Німеччина</p>
          </div>
          <div className="flex space-x-6 text-slate-400">
            <a href="#" className="hover:text-white transition-colors">Правова інформація</a>
            <a href="#" className="hover:text-white transition-colors">Конфіденційність</a>
            <a href="#" className="hover:text-white transition-colors">Умови використання</a>
          </div>
        </div>
      </footer>
    </div>
  );
}