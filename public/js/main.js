console.log()

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsdml0Y2giLCJhIjoiY2p6dGw1a2IzMDZoazNjcDlocDhqNWM2bSJ9.bDEhLLP89f3bqEfFinF_0w';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9',
	center: [-96.161224, 19.199093],
	zoom: 20
});

var Swiper = new Swiper ('.swiper-container', {
	slidesPerView: 3,
	//centeredSlides: true,
    //spaceBetween: 30,
    // Optional parameters
    //direction: 'horizontal',
    loop: true,

    autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    //scrollbar: {
    //  el: '.swiper-scrollbar',
    //},
  });

