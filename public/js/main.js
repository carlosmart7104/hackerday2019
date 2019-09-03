console.log()

/* Open when someone clicks on the span element */
function openNav() {
  document.getElementById("js-menu").style.width = "100%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
  document.getElementById("js-menu").style.width = "0%";
}

/* Open */
function openNav() {
  document.getElementById("js-menu").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("js-menu").style.height = "0%";
}

/* Open */
function openNav() {
  document.getElementById("js-menu").style.display = "block";
}

/* Close */
function closeNav() {
  document.getElementById("js-menu").style.display = "none";
}


let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});