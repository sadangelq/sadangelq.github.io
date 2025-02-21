// Пример анимации на странице для плавных эффектов
document.querySelectorAll('.social-icons a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'scale(1.2)';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'scale(1)';
    });
});

// Функция для создания снежинок
function createSnowflakes() {
    const numberOfSnowflakes = 100;
    const snowContainer = document.body;

    for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Задаем случайную позицию и скорость для каждой снежинки
        const size = Math.random() * 10 + 10;
        snowflake.style.fontSize = `${size}px`;

        // Случайная позиция по горизонтали и скорость падения
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 6 + 6}s`;
        snowflake.style.animationDelay = `${Math.random() * 5}s`;

        snowContainer.appendChild(snowflake);

        // Удаляем снежинку, когда она выходит за пределы экрана и создаем новую
        snowflake.addEventListener('animationiteration', () => {
            snowflake.style.left = `${Math.random() * 100}vw`;
            snowflake.style.animationDuration = `${Math.random() * 6 + 6}s`;
            snowflake.style.animationDelay = `${Math.random() * 5}s`;
        });
    }
}

// Запускаем функцию при загрузке страницы
window.onload = createSnowflakes;


/// Переводы для разных языков
const translations = {
    ru: {
        heading: "SADANGELQ",
        description: "Начинающий кодер на Java,HTML,PHP, перевод плагинов и не только.",
        "portfolio-title": "Мои работы",
        "portfolio-description": "Я создал такие сайты как эти:",
        "ks-description": "Основной сайт для майнкрафт проэкта KosmosTimes (KS)",
        "ks-admin-description": "Админский сайт для администрации майнкрафт проэкта KosmosTimes (KS ADMIN)",
        "fm-description": "Основной сайт для майнкрафт проэкта FantastikMine (FM)",
        "fm-tf-description": "Cайт Торговой Федерации для майнкрафт проэкта FantastikMine (FM TF)",
        "social-title": "Я в социальных сетях",
        "footer1-description": "2023 Sadangelq Корпарейшен. Все права защищены.",
        "footer2-description": "Sadangelq Корпарейшен и KosmosTimes Корпарейшен не связаны с Mojang Studios и Microsoft и их EULA.",
        "home": "Главная",
        "portfolio": "Портфолио",
        "contacts": "Контакты",
        "manager": "Менеджер",
        "main-title": "SADANGELQ",
        "main-description": "Начинающий кодер на Java,HTML,PHP, перевод плагинов и не только.",
        "menager-title": "Мененджер",
        "menager-description": "Для связи с менеджером, напишите в Discord: @sadmenager",
        "discord-button": "Перейти в Discord Сервер",
        "timer-title": "Обратный отсчёт до разбана",
        "timer-days": "Дней",
        "timer-hours": "Часов",
        "timer-minutes": "Минут",
        "timer-seconds": "Секунд"
    },
    en: {
        heading: "SADANGELQ",
        description: "A beginner coder in Java, HTML, PHP, plugin translation, and more.",
        "portfolio-title": "My Work",
        "portfolio-description": "I created websites like these:",
        "ks-description": "The main website for the Minecraft project KosmosTimes (KS)",
        "ks-admin-description": "Admin website for the Minecraft project KosmosTimes (KS ADMIN)",
        "fm-description": "The main website for the Minecraft project FantastikMine (FM)",
        "fm-tf-description": "The Trade Federation website for the Minecraft project FantastikMine (FM TF)",
        "social-title": "I'm on social media",
        "footer1-description": "2023 Sadangelq Corporation. All rights reserved.",
        "footer2-description": "Sadangelq Corporation and KosmosTimes Corporation are not affiliated with Mojang Studios and Microsoft and their EULA.",
        "home": "Home",
        "portfolio": "Portfolio",
        "contacts": "Contacts",
        "manager": "Manager",
        "main-title": "SADANGELQ",
        "main-description": "Beginning coder in Java, HTML, PHP, plugin translations and more.",
        "menager-title": "Manager",
        "menager-description": "To contact the manager, write on Discord: @sadmenager",
        "discord-button": "Join Discord Server",
        "timer-title": "Countdown to unban",
        "timer-days": "Days",
        "timer-hours": "Hours",
        "timer-minutes": "Minutes",
        "timer-seconds": "Seconds"
    },
    uk: {
        heading: "SADANGELQ",
        description: "Початківець-кодер у Java, HTML, PHP, переклад плагінів та не тільки.",
        "portfolio-title": "Мої роботи",
        "portfolio-description": "Я створив такі сайти, як ці:",
        "ks-description": "Основний сайт для Minecraft проєкту KosmosTimes (KS)",
        "ks-admin-description": "Адмінський сайт для Minecraft проєкту KosmosTimes (KS ADMIN)",
        "fm-description": "Основний сайт для Minecraft проєкту FantastikMine (FM)",
        "fm-tf-description": "Сайт Торгової Федерації для Minecraft проєкту FantastikMine (FM TF)",
        "social-title": "Я у соціальних мережах",
        "footer1-description": "2023 Sadangelq Корпорація. Всі права захищено.",
        "footer2-description": "Sadangelq Корпорація та KosmosTimes Корпорація не пов'язані з Mojang Studios та Microsoft та їх EULA.",
        "home": "Головна",
        "portfolio": "Портфоліо",
        "contacts": "Контакти",
        "manager": "Менеджер",
        "main-title": "SADANGELQ",
        "main-description": "Початковий кодер на Java, HTML, PHP, переклади плагінів та інше.",
        "menager-title": "Менеджер",
        "menager-description": "Для зв'язку з менеджером напишіть у Discord: @sadmenager",
        "discord-button": "Приєднатися до серверу Discord",
        "timer-title": "Зворотний відлік до розбану",
        "timer-days": "Днів",
        "timer-hours": "Годин",
        "timer-minutes": "Хвилин",
        "timer-seconds": "Секунд"
    },
    pl: {
        heading: "SADANGELQ",
        description: "Początkujący programista w Java, HTML, PHP, tłumaczenie wtyczek i więcej.",
        "portfolio-title": "Moje prace",
        "portfolio-description": "Stworzyłem takie strony, jak te:",
        "ks-description": "Główna strona projektu Minecraft KosmosTimes (KS)",
        "ks-admin-description": "Strona administracyjna projektu Minecraft KosmosTimes (KS ADMIN)",
        "fm-description": "Główna strona projektu Minecraft FantastikMine (FM)",
        "fm-tf-description": "Strona Federacji Handlowej projektu Minecraft FantastikMine (FM TF)",
        "social-title": "Jestem w sieciach społecznościowych",
        "footer1-description": "2023 Sadangelq Corporation. Wszystkie prawa zastrzeżone.",
        "footer2-description": "Sadangelq Corporation i KosmosTimes Corporation nie są powiązane z Mojang Studios i Microsoft oraz ich EULA.",
        "home": "Strona Główna",
        "portfolio": "Portfolio",
        "contacts": "Kontakt",
        "manager": "Menadżer",
        "main-title": "SADANGELQ",
        "main-description": "Początkowy programista w Java, HTML, PHP, tłumaczenie wtyczek i więcej.",
        "menager-title": "Menadżer",
        "menager-description": "Aby skontaktować się z menadżerem, napisz na Discordzie: @sadmenager",
        "discord-button": "Dołącz do serwera Discord",
        "timer-title": "Odliczanie do odbanowania",
        "timer-days": "Dni",
        "timer-hours": "Godzin",
        "timer-minutes": "Minut",
        "timer-seconds": "Sekund"
    },
    by: {
        heading: "SADANGELQ",
        description: "Пачатковец-кодэр на Java, HTML, PHP, пераклад убудоў і не толькі.",
        "portfolio-title": "Мае працы",
        "portfolio-description": "Я стварыў такія сайты, як гэтыя:",
        "ks-description": "Асноўны сайт для праекта Minecraft KosmosTimes (KS)",
        "ks-admin-description": "Адмінскі сайт для праекта Minecraft KosmosTimes (KS ADMIN)",
        "fm-description": "Асноўны сайт для праекта Minecraft FantastikMine (FM)",
        "fm-tf-description": "Сайт Гандлёвай Федэрацыі для праекта Minecraft FantastikMine (FM TF)",
        "social-title": "Я ў сацыяльных сетках",
        "footer1-description": "2023 Sadangelq Корпарацыя. Усе правы абаронены.",
        "footer2-description": "Sadangelq Корпарацыя і KosmosTimes Корпарацыя не звязаны з Mojang Studios і Microsoft і іх EULA.",
        "home": "Галоўная",
        "portfolio": "Партфоліо",
        "contacts": "Кантакты",
        "manager": "Менеджар",
        "main-title": "SADANGELQ",
        "main-description": "Пачатковы кодэр на Java, HTML, PHP, пераклад плагінаў і не толькі.",
        "menager-title": "Менеджар",
        "menager-description": "Для сувязі з менеджарам напішыце ў Discord: @sadmenager",
        "discord-button": "Перайсці на сервер Discord",
        "timer-title": "Адлік часу да разбана",
        "timer-days": "Дзён",
        "timer-hours": "Гадзін",
        "timer-minutes": "Хвілін",
        "timer-seconds": "Секунд"
    },
};

// Получение сохранённого языка из localStorage при загрузке страницы
window.onload = () => {
    const savedLanguage = localStorage.getItem("language") || "ru"; // Если язык не сохранён, по умолчанию русский
    document.getElementById("language-select").value = savedLanguage;

    // Применение перевода
    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.getAttribute("data-lang");
        if (translations[savedLanguage][key]) {
            element.textContent = translations[savedLanguage][key];
        }
    });
};

// Обработчик смены языка
document.getElementById("language-select").addEventListener("change", (event) => {
    const selectedLanguage = event.target.value;

    // Сохранить выбранный язык в localStorage
    localStorage.setItem("language", selectedLanguage);

    // Применить перевод
    document.querySelectorAll("[data-lang]").forEach((element) => {
        const key = element.getAttribute("data-lang");
        if (translations[selectedLanguage][key]) {
            element.textContent = translations[selectedLanguage][key];
        }
    });
});
