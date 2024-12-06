const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    menu.classList.toggle('active');
});

// свайпер
const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 5,
    pagination: {
        el: '.swiper-pagination',
    },
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    },
});

//модальне вікно

const openModalBtn = document.querySelector('.open-modal-btn');
const closeModalBtn = document.querySelector('.close-modal-btn');
const modalOverlay = document.querySelector('.modal-overlay');

openModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    modalOverlay.classList.add('active');
});

closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.remove('active');
});

modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        modalOverlay.classList.remove('active');
    }
});

// генерація карточок

const bikes = [
    {
        img: "img/bike1.png",
        alt: "Велосипед в лісі",
        name: "Велосипед для лісових прогулянок",
        description: "Ідеальний велосипед для прогулянок по лісових стежках з надійними покришками та амортизацією.",
        price: "200 грн/день"
    },
    {
        img: "img/bike2.png",
        alt: "Велосипед на асфальті",
        name: "Шосейний велосипед",
        description: "Швидкий велосипед для рівних асфальтованих доріг, який забезпечить вам комфорт на довгих трасах.",
        price: "150 грн/день"
    },
    {
        img: "img/bike3.png",
        alt: "Велосипед на піску",
        name: "Фетбайк для піщаних трас",
        description: "Велосипед з широкими покришками, ідеальний для їзди по пляжах та піщаних поверхнях.",
        price: "250 грн/день"
    },
    {
        img: "img/bike4.png",
        alt: "Велосипед у горах",
        name: "Гірський велосипед",
        description: "Для складних гірських трас і спусків. Має амортизаційну вилку та посилену раму.",
        price: "300 грн/день"
    }
];

const kits = [
    {
        img: "img/nabir1.webp",
        alt: "Набір для велосипедиста",
        name: "Набір для ремонту велосипеда NEO Tools 15",
        description: "Міні-насос, Мультитул велосипедний, Лопатки бортувальні, Металевий шестигранний ключ, Латки для шин, Силіконові трубки",
        price: "150 грн/день"
    },
    {
        img: "img/nabir2.jpg",
        alt: "Набір для гірського велосипедиста",
        name: "Набір для гірського велосипедиста",
        description: "Набір для активного відпочинку в горах: верхній та нижній захист та захист для колін.",
        price: "200 грн/день"
    }
];

function generateCards(data, containerId) {
    const container = document.getElementById(containerId);

    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('pricing-card');

        card.innerHTML = `
            <img src="${item.img}" alt="${item.alt}">
            <h3>${item.name}</h3>
            <p class="description">${item.description}</p>
            <p class="price">${item.price}</p>
            <button class="rent-button">Орендувати</button>
        `;

        container.appendChild(card);
    });
}

generateCards(bikes, 'bikes-cards');
generateCards(kits, 'kits-cards');

