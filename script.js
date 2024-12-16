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
