/* ================== SHOW MENU ====================== */
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.querySelector(".nav__close");

/* ============ MENU SHOW ============ */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', function () {
        navMenu.classList.add('show-menu');
    })
}
 
/* =========== CLOSE MENU =========== */
if (navClose) {
    navClose.addEventListener('click', function () {
        navMenu.classList.remove('show-menu');
    })
}

/* ========================= SINGLE PRODUCT ======================== */
const singleProductLink = document.querySelectorAll(".linked__sproduct");

singleProductLink.forEach(function (e) {
    e.addEventListener('click', function () {
        window.location.href = 'sproduct.html'
    })
})

/*  FILTER IMAGES */
const mainImg = document.querySelector(".sproduct__MainImg");
const smallImg = document.querySelectorAll(".sproduct__small-img");

smallImg.forEach(function (img) {
    img.addEventListener('click', function (e) {
        mainImg.src = e.target.src;
        
    })
})