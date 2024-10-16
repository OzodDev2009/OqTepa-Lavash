AOS.init();

var swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

console.log(swiper);

const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
    navbar.classList.toggle("active");
    mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());
console.log(mobileNav);
console.log(navbar);

const mainBtn = document.querySelector('.button-37');
const mainInfo = document.querySelectorAll('.main__info');
const mainImgs = document.querySelectorAll('.main__info-img');
const mainTexts = document.querySelectorAll('.main-info-text');

mainBtn.addEventListener('click', function () {
    mainInfo.forEach(el => {
        el.classList.toggle('activeHidden')
    });

    mainImgs.forEach(el => {
        el.addEventListener('dblclick', function () {
            el.classList.toggle('imgsActive');
        })
    });

    mainTexts.forEach(el => {
        el.classList.toggle('textsActive')
    });
})

console.log(mainBtn);
console.log(mainInfo);
console.log(mainImgs);
console.log(mainTexts);


const targetNumbers = [1000];
let stage = 0;
let count = 0;

const numberElement = document.querySelector('.number');

function animateNumber() {
    if (stage < targetNumbers.length) {
        const target = targetNumbers[stage];
        numberElement.textContent = `+${count}`;

        let delay = (count >= 700 && target === 1000) ? 10 : 1;

        if (count < target) {
            count++;
            setTimeout(animateNumber, delay);
        } else {
            stage++;
            count = 0;
            setTimeout(animateNumber, 500);
        }
    }
}

animateNumber();

$(".tab_content").hide();
$(".tab_content:first").show();

$("ul.tabs li").click(function () {

    $(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();

    $("ul.tabs li").removeClass("active");
    $(this).addClass("active");

    $(".tab_drawer_heading").removeClass("d_active");
    $(".tab_drawer_heading[rel^='" + activeTab + "']").addClass("d_active");

});

$(".tab_drawer_heading").click(function () {

    $(".tab_content").hide();
    var d_activeTab = $(this).attr("rel");
    $("#" + d_activeTab).fadeIn();

    $(".tab_drawer_heading").removeClass("d_active");
    $(this).addClass("d_active");

    $("ul.tabs li").removeClass("active");
    $("ul.tabs li[rel^='" + d_activeTab + "']").addClass("active");
});

function toggleText(tabId) {
    const tabContent = document.getElementById(tabId);
    const textElement = tabContent.querySelector('.tab__info-text');
    const rotateImage = tabContent.querySelector('.rotate-image');

    if (textElement.classList.contains('show')) {
        textElement.classList.remove('show');
        rotateImage.classList.remove('rotated');
    } else {
        textElement.classList.add('show');
        rotateImage.classList.add('rotated');
    }
}
