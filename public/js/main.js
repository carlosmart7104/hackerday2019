console.log()

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});

console.log()

mapboxgl.accessToken = 'pk.eyJ1IjoidmFsdml0Y2giLCJhIjoiY2p6dGw1a2IzMDZoazNjcDlocDhqNWM2bSJ9.bDEhLLP89f3bqEfFinF_0w';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/light-v9',
	center: [-96.161224, 19.199093],
	zoom: 3
});

//map.addControl (new mapboxgl.NavigationControl());

	
