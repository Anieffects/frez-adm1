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

let currentIndex = 0;
const slides = document.querySelector('.slides1');
const slideCount = document.querySelectorAll('.slide1').length;

setInterval(() => {
    currentIndex = (currentIndex + 1) % slideCount; // Переход к следующему слайду, с возвращением к первому после последнего
    const offset = -currentIndex * 100; // Расчет смещения
    slides.style.transform = `translateX(${offset}%)`; // Применение смещения
}, 3000); // Задержка в 3000 мс (3 секунды) между слайдами


document.addEventListener('DOMContentLoaded', function () {
    console.log("DOM загружен"); // Для проверки, что DOM полностью загружен
    document.querySelectorAll('nav a').forEach(anchor => {
        console.log("Добавление обработчика для", anchor); // Проверка, что обработчик добавляется
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetClass = this.getAttribute('data-target');
            const targetElement = document.querySelector(targetClass);
            console.log("Клик по", anchor, "Целевой элемент", targetElement); // Проверка, что элемент найден
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
        modal.style.display = "block";
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
\

document.addEventListener('DOMContentLoaded', function () {
    var modal = document.querySelector('.modal1');
    var openButton = document.getElementById('open-feedback'); // Идентификатор вашей кнопки
    var closeButton = document.querySelector('.close-button');

    // Обработчик клика для открытия модального окна
    openButton.addEventListener('click', function () {
        modal.style.display = 'flex';
    });

    // Обработчик клика для закрытия модального окна
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
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


ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [59.995033, 30.274177],
        zoom: 17
    });

    var myPlacemark = new ymaps.Placemark([59.995033, 30.274177], {
        hintContent: 'Адмаркет',
        balloonContent: 'Фрезерная и лазерная резка, гравировка.</br> Фрезеровка Санкт- Петербург.</br> Фрезеровка спб'
    });

    myMap.geoObjects.add(myPlacemark);
	myMap.behaviors.disable('scrollZoom');

}
document.querySelector('.hamburger').addEventListener('click', function() {
    document.querySelector('#menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    const modal3 = document.getElementById('modal3');

    // Открываем модальное окно при клике на статью
    document.querySelectorAll('.article3-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            modal3.style.display = 'flex';
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

document.getElementById('article3-link1').addEventListener('click', function() {
    document.getElementById('modal3-1').style.display = 'flex';
});

document.getElementById('article3-link2').addEventListener('click', function() {
    document.getElementById('modal3-2').style.display = 'flex';
});

document.getElementById('article3-link3').addEventListener('click', function() {
    document.getElementById('modal3-3').style.display = 'flex';
});


document.getElementById('article3-link4').addEventListener('click', function() {
    document.getElementById('modal3-4').style.display = 'flex';
});

document.getElementById('article3-link5').addEventListener('click', function() {
    document.getElementById('modal3-5').style.display = 'flex';
});
document.getElementById('article3-link6').addEventListener('click', function() {
    document.getElementById('modal3-6').style.display = 'flex';
});

// Аналогичные обработчики для остальных статей и модальных окон...
