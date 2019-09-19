console.log()

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});


mapboxgl.accessToken = 'pk.eyJ1IjoidmFsdml0Y2giLCJhIjoiY2p6dGw1a2IzMDZoazNjcDlocDhqNWM2bSJ9.bDEhLLP89f3bqEfFinF_0w';

var map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/mapbox/streets-v11',
	center: [-96.161222, 19.199093],
	zoom: 3
});

//map.addControl (new mapboxgl.NavigationControl());

//	<!-- Facebook Pixel Code -->
//	<!--<script>
//		if (window.location.hostname.includes('hackerday.org'))
//			{
//			  !function(f,b,e,v,n,t,s)
//			  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
//			  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
//			  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
//			  n.queue=[];t=b.createElement(e);t.async=!0;
//			  t.src=v;s=b.getElementsByTagName(e)[0];
//			  s.parentNode.insertBefore(t,s)}(window, document,'script',
//			  'https://connect.facebook.net/en_US/fbevents.js');
//			  fbq('init', '2817447391806773');
//			  fbq('track', 'PageView');
//			}
//	</script>
//	<noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=2817447391806773&ev=PageView&noscript=1"/>
//	</noscript>-->
