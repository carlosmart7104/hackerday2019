console.log()

const mainNav = document.getElementById('js-menu')
const navBarToggle = document.getElementById('js-navbar-toggle')

navBarToggle.addEventListener('click', function() {
  mainNav.classList.toggle('active')
})

mapboxgl.accessToken =
  'pk.eyJ1IjoiY2FybG9zbWFydDcxMDQiLCJhIjoiY2p5b3Z4anp0MTk4azNqbzloZWZpd2R5bCJ9.zY0vP4G4sBCXxsVlKTPDaw'

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/carlosmart7104/ck11p5avf0ulw1cpcnb3b0t5o',
  center: [-96.161224, 19.199093],
  zoom: 14.75
})

const marker = new mapboxgl.Marker()
  .setLngLat([-96.161224, 19.199093])
  .addTo(map)

var Swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  // centeredSlides: true,
  // spaceBetween: 30,
  // Optional parameters
  // direction: 'horizontal',
  loop: true,

  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }

  // And if we need scrollbar
  // scrollbar: {
  //  el: '.swiper-scrollbar',
  // },
})
