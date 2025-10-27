// === Переводы ===
const translations = {
  ru: { heading: "SADANGELQ", description: "Начинающий кодер на Java, HTML, PHP, перевод плагинов и не только.", "portfolio-title": "Мои работы", "portfolio-description": "Я создал такие сайты как эти:", "ks-description": "Основной сайт для майнкрафт проекта KosmosTimes (KS)", "fm-description": "Основной сайт для майнкрафт проекта FantastikMine (FM)", "fm-tf-description": "Сайт Торговой Федерации для майнкрафт проекта FantastikMine (FM TF)", "social-title": "Я в социальных сетях", "footer1-description": "2023 Sadangelq Корпарейшен. Все права защищены.", "footer2-description": "Sadangelq Корпарейшен и KosmosTimes Корпарейшен не связаны с Mojang Studios и Microsoft и их EULA.", home: "Главная", portfolio: "Портфолио", contacts: "Контакты", manager: "Менеджер", "timer-title": "Обратный отсчёт до разбана", "timer-days": "Дней", "timer-hours": "Часов", "timer-minutes": "Минут", "timer-seconds": "Секунд" },
  en: { heading: "SADANGELQ", description: "A beginner coder in Java, HTML, PHP, plugin translation, and more.", "portfolio-title": "My Work", "portfolio-description": "I created websites like these:", "ks-description": "The main website for the Minecraft project KosmosTimes (KS)", "fm-description": "The main website for the Minecraft project FantastikMine (FM)", "fm-tf-description": "The Trade Federation website for the Minecraft project FantastikMine (FM TF)", "social-title": "I'm on social media", "footer1-description": "2023 Sadangelq Corporation. All rights reserved.", "footer2-description": "Sadangelq Corporation and KosmosTimes Corporation are not affiliated with Mojang Studios and Microsoft and their EULA.", home: "Home", portfolio: "Portfolio", contacts: "Contacts", manager: "Manager", "timer-title": "Countdown to unban", "timer-days": "Days", "timer-hours": "Hours", "timer-minutes": "Minutes", "timer-seconds": "Seconds" },
  uk: { heading: "SADANGELQ", description: "Початківець-кодер у Java, HTML, PHP, переклад плагінів та не тільки.", "portfolio-title": "Мої роботи", "portfolio-description": "Я створив такі сайти, як ці:", "ks-description": "Основний сайт для Minecraft проєкту KosmosTimes (KS)", "fm-description": "Основний сайт для Minecraft проєкту FantastikMine (FM)", "fm-tf-description": "Сайт Торгової Федерації для Minecraft проєкту FantastikMine (FM TF)", "social-title": "Я у соціальних мережах", "footer1-description": "2023 Sadangelq Корпорація. Всі права захищено.", "footer2-description": "Sadangelq Корпорація та KosmosTimes Корпорація не пов'язані з Mojang Studios та Microsoft та їх EULA.", home: "Головна", portfolio: "Портфоліо", contacts: "Контакти", manager: "Менеджер", "timer-title": "Зворотний відлік до розбану", "timer-days": "Днів", "timer-hours": "Годин", "timer-minutes": "Хвилин", "timer-seconds": "Секунд" },
  pl: { heading: "SADANGELQ", description: "Początkujący programista w Java, HTML, PHP, tłumaczenie wtyczek i więcej.", "portfolio-title": "Moje prace", "portfolio-description": "Stworzyłem takie strony, jak te:", "ks-description": "Główna strona projektu Minecraft KosmosTimes (KS)", "fm-description": "Główna strona projektu Minecraft FantastikMine (FM)", "fm-tf-description": "Strona Federacji Handlowej projektu Minecraft FantastikMine (FM TF)", "social-title": "Jestem w sieciach społecznościowych", "footer1-description": "2023 Sadangelq Corporation. Wszystkie prawa zastrzeżone.", "footer2-description": "Sadangelq Corporation i KosmosTimes Corporation nie są powiązane z Mojang Studios i Microsoft oraz ich EULA.", home: "Strona Główna", portfolio: "Portfolio", contacts: "Kontakt", manager: "Menadżer", "timer-title": "Odliczanie do odbanowania", "timer-days": "Dni", "timer-hours": "Godzin", "timer-minutes": "Minut", "timer-seconds": "Sekund" },
  by: { heading: "SADANGELQ", description: "Пачатковец-кодэр на Java, HTML, PHP, пераклад убудоў і не толькі.", "portfolio-title": "Мае працы", "portfolio-description": "Я стварыў такія сайты, як гэтыя:", "ks-description": "Асноўны сайт для праекта Minecraft KosmosTimes (KS)", "fm-description": "Асноўны сайт для праекта Minecraft FantastikMine (FM)", "fm-tf-description": "Сайт Гандлёвай Федэрацыі для праекта Minecraft FantastikMine (FM TF)", "social-title": "Я ў сацыяльных сетках", "footer1-description": "2023 Sadangelq Корпарацыя. Усе правы абаронены.", "footer2-description": "Sadangelq Корпарацыя і KosmosTimes Корпарацыя не звязаны з Mojang Studios і Microsoft і іх EULA.", home: "Галоўная", portfolio: "Партфоліо", contacts: "Кантакты", manager: "Менеджар", "timer-title": "Адлік часу да разбана", "timer-days": "Дзён", "timer-hours": "Гадзін", "timer-minutes": "Хвілін", "timer-seconds": "Секунд" }
};

// === Язык ===
const langSelect = document.getElementById('language-select');

function applyLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(el => {
    const key = el.getAttribute('data-lang');
    if (translations[lang]?.[key]) {
      el.textContent = translations[lang][key];
    }
  });
  localStorage.setItem('language', lang);
}

// Загрузка языка
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('language') || 'ru';
  langSelect.value = savedLang;
  applyLanguage(savedLang);
});

langSelect.addEventListener('change', (e) => applyLanguage(e.target.value));

// === Обратный отсчёт ===
function updateCountdown() {
  const target = new Date('2025-03-23T13:29:00').getTime();
  const now = Date.now();
  const diff = target - now;

  if (diff <= 0) {
    document.getElementById('countdown').innerHTML = '<h3>Событие наступило!</h3>';
    return;
  }

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);

  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

setInterval(updateCountdown, 1000);
updateCountdown();

// === Снежинки ===
function createSnow() {
  const container = document.getElementById('snowflakes');
  const count = window.innerWidth > 768 ? 80 : 40;

  for (let i = 0; i < count; i++) {
    const flake = document.createElement('div');
    flake.classList.add('snowflake');
    flake.textContent = '❄';
    flake.style.left = `${Math.random() * 100}vw`;
    flake.style.fontSize = `${Math.random() * 10 + 10}px`;
    flake.style.animationDuration = `${Math.random() * 5 + 5}s`;
    flake.style.animationDelay = `${Math.random() * 5}s`;
    container.appendChild(flake);
  }
}

window.addEventListener('load', createSnow);
window.addEventListener('resize', () => {
  document.getElementById('snowflakes').innerHTML = '';
  createSnow();
});
