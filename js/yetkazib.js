// LOADER
window.addEventListener("load", function () {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
        document.getElementById("content").style.display = "block";
    }, 200);
});

// GSAP
gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

// FADE ANIMATION 1
const t1 = gsap.timeline({ defaults: { duration: 0.25 } });
t1.from('.logo', { opacity: 0, y: -50 })
    .from('.header__list', { opacity: 0, y: -50 })
    .from('.header__link1', { opacity: 0, y: -50 })
    .from('.header__link2', { opacity: 0, y: -50 })
    .from('.header__link3', { opacity: 0, y: -50 })
    .from('.header__link4', { opacity: 0, y: -50 })

// FADE ANIMATION 2
const t2 = gsap.timeline({ defaults: { duration: 1 } });
t2.from('.main__motosikl', { opacity: 0, x: -50 })

// FADE ANIMATION 3
const t3 = gsap.timeline({ defaults: { duration: 1 } });
t3.from('.main__tel', { opacity: 0, x: 50 })

// AOS
AOS.init();

// GAMBURGER
const hamburger = document.querySelector('.hamburger');
const menubar = document.querySelector('.menubar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menubar.classList.toggle('active');
});

console.log(hamburger);
console.log(menubar);