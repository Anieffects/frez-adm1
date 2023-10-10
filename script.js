document.addEventListener('DOMContentLoaded', function() {
    var menu = document.getElementById('menu');
    
    menu.addEventListener('click', function(e) {
        if(e.target.tagName === 'A') {
            var activeLink = menu.querySelector('a.active');
            if(activeLink) activeLink.classList.remove('active'); // Удаляем класс active с текущего активного пункта
            e.target.classList.add('active'); // Добавляем класс active к кликнутому пункту
        }
    });
});


document.addEventListener('DOMContentLoaded', function() {
    let slides = document.querySelectorAll('.slideshow-container .slide');
    let index = 0;

    function showSlide() {
        slides[index].style.opacity = 0;
        index = (index + 1) % slides.length;
        slides[index].style.opacity = 1;
    }

    setInterval(showSlide, 5000); // Переключение слайдов каждые 5 секунд
});


document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides1');
    const slideCount = document.querySelectorAll('.slide1').length;
    let currentIndex = 0;
    let timeout;

    function switchSlide() {
        const offset = -currentIndex * 100; 
        slides.style.transform = `translateX(${offset}%)`; 
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slideCount;
        switchSlide();
        resetTimer();
    }

    function previousSlide() {
        currentIndex = (currentIndex - 1 + slideCount) % slideCount;
        switchSlide();
        resetTimer();
    }

    function resetTimer() {
        clearTimeout(timeout);
        timeout = setTimeout(nextSlide, 5000);
    }

    document.querySelector('.arrow-left').addEventListener('click', previousSlide);
    document.querySelector('.arrow-right').addEventListener('click', nextSlide);

    resetTimer();  // Начинаем автоматическое переключение
});



document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM загружен");
    document.querySelectorAll('nav a').forEach(anchor => {
        console.log("Добавление обработчика для", anchor);
        anchor.addEventListener('click', function (e) {
            // Если у ссылки есть класс icon-link, то не блокируем действие по умолчанию
            if (this.classList.contains('icon-link')) {
                return;
            }
            
            e.preventDefault();
            const targetClass = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetClass);
            console.log("Клик по", anchor, "Целевой элемент", targetElement);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function () {
    // Получение модального окна
    const modal = document.getElementById("myModal");
    const span = document.getElementsByClassName("close")[0];
    
    // Отображение модального окна при клике на пункт меню
    document.querySelector('nav a[data-toggle="modal"]').addEventListener('click', function (e) {
        e.preventDefault();
        modal.style.display = "flex";
    });

    // Закрытие модального окна при клике на "x"
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    var modal = document.querySelector('.modal1');
    var openButton = document.getElementById('open-feedback'); // Идентификатор вашей кнопки
    var closeButton = document.querySelector('.close-button');

    // Обработчик клика для открытия модального окна
    openButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Закрытие модального окна при клике вне его
    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    var modal = document.querySelector('.modal1');
    var openButton = document.getElementById('open-feedback');
    var closeButton = document.querySelector('.close-but-os');

    openButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});


AOS.init({
    startEvent: 'DOMContentLoaded', // имя события, которое AOS должен использовать для инициализации
    offset: 120, // смещение (в px) от начальной точки триггера
    delay: 0, // значения от 0 до 3000 мс, с шагом 50 мс
    duration: 1500, // значения от 0 до 3000 мс, с шагом 50 мс
    easing: 'ease', // предоставляет разные кривые скорости, такие как 'ease', 'ease-in-out', 'linear' и т. д.
    once: false, // должна ли анимация проигрываться только один раз
    anchorPlacement: 'top-bottom', // определяет, какой частью элемента AOS должен определить "видимость" (триггер)
});


document.addEventListener("DOMContentLoaded", function() {
    document.body.classList.add('loaded');
});


ymaps.ready(function () {
    if(!document.getElementById('map').classList.contains('initialized')) {
        var myMap = new ymaps.Map('map', {
            center: [59.995033, 30.274177],
            zoom: 17
        }, {
            searchControlProvider: 'yandex#search'
        });

        var myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Адмаркет',
            balloonContent: 'Фрезерная и лазерная резка, гравировка.</br> Фрезеровка Санкт- Петербург.</br> Фрезеровка спб'
        });

        myMap.geoObjects.add(myPlacemark);
        document.getElementById('map').classList.add('initialized');
    }
});




document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const modal3 = document.getElementById('modal3');

    // Открываем модальное окно при клике на статью
    document.querySelectorAll('.article3-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
        });
    });

    // Закрываем модальное окно при клике вне его области
    window.onclick = (event) => {
        if (event.target === modal3) {
            modal3.style.display = 'none';
        }
    };
});

// Получите все модальные окна
let modals = document.getElementsByClassName('modal3');

// Добавьте обработчики событий для каждого модального окна
for(let modal of modals) {
    modal.addEventListener('click', function(event) {
        // Проверьте, был ли клик сделан вне содержимого модального окна (modal-content)
        if(event.target === modal) {
            modal.style.display = 'none';
        }
    });
}
class ModalManager {
    constructor() {
        this.modals = document.querySelectorAll('.modal3');
        this.modalLinks = [
            'article3-link1',
            'article3-link2',
            'article3-link3',
            'article3-link4',
            'article3-link5',
            'article3-link6'
        ];
        this.init();
    }

    init() {
        this.modalLinks.forEach((link, index) => {
            document.getElementById(link).addEventListener('click', () => {
                this.openModal(index);
            });
        });

        this.modals.forEach((modal, index) => {
            modal.addEventListener('click', (event) => {
                if (event.target === modal || event.target.classList.contains('close-button')) {
                    this.closeModal(index);
                }
            });
        });
    }

    openModal(index) {
        if (index >= 0 && index < this.modals.length) {
            this.modals[index].style.display = 'flex';
        }
    }

    closeModal(index) {
        if (index >= 0 && index < this.modals.length) {
            this.modals[index].style.display = 'none';
        }
    }
}

// Инициализация менеджера модальных окон
const modalManager = new ModalManager();
