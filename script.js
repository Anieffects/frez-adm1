document.addEventListener('DOMContentLoaded', function () {
    var menu = document.getElementById('menu');

    menu.addEventListener('click', function (e) {
        if (e.target.tagName === 'A') {
            var activeLink = menu.querySelector('a.active');
            if (activeLink) activeLink.classList.remove('active');
            e.target.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    let slides = document.querySelectorAll('.slideshow-container .slide');
    let index = 0;

    function showSlide() {
        slides[index].style.opacity = 0;
        index = (index + 1) % slides.length;
        slides[index].style.opacity = 1;
    }

    setInterval(showSlide, 5000);
});

// ... (остальной предыдущий код)

document.addEventListener("DOMContentLoaded", function () {
    document.body.classList.add('loaded');
});

ymaps.ready(function () {
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
});

document.querySelector('.hamburger').addEventListener('click', function () {
    document.querySelector('#menu').classList.toggle('active');
});

document.addEventListener('DOMContentLoaded', () => {
    // Обработка кликов по ссылкам
    document.querySelectorAll('.article-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const modalId = link.getAttribute('data-modal-id');
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.style.display = 'flex';
            }
        });
    });

    // Обработка кликов вне модальных окон
    document.querySelectorAll('.modal').forEach(modal => {
        modal.addEventListener('click', (event) => {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        });
    });
});
