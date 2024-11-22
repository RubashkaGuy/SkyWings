console.log('ok');


// Находим элементы
const toggleButton = document.getElementById('pc__button');
const menuSection = document.getElementById('mb');

// Добавляем обработчик события для кнопки
toggleButton.addEventListener('click', () => {
    // Проверяем, видима ли секция, и переключаем состояние
    if (menuSection.style.display === 'none' || menuSection.style.display === '') {
        menuSection.style.display = 'grid'; // Показываем секцию
    } else {
        menuSection.style.display = 'none'; // Скрываем секцию
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const scrollUp = document.querySelector(".scrollup");
    const header = document.querySelector("header"); // Обязательно убедитесь, что секция имеет тег <header>

    // Показать кнопку, когда прокрутили вниз на 300px
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            scrollUp.style.display = "block";
        } else {
            scrollUp.style.display = "none";
        }
    });

    // Прокрутка к началу страницы
    scrollUp.addEventListener("click", (e) => {
        e.preventDefault(); // Предотвращаем переход по ссылке
        header.scrollIntoView({ behavior: "smooth" });
    });
});
