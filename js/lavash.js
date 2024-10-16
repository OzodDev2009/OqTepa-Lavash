const hamburger = document.querySelector('.hamburger');
const menubar = document.querySelector('.menubar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menubar.classList.toggle('active');
});