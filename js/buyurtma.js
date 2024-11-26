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
const t2 = gsap.timeline({ defaults: { duration: 0.50 } });
t2.from('.main__info1', { opacity: 0, x: -90, })

// FADE ANIMATION 3
const t3 = gsap.timeline({ defaults: { duration: 0.50 } });
t3.from('.main__info3', { opacity: 0, x: 90, })

// GAMBURGER
const hamburger = document.querySelector('.hamburger');
const menubar = document.querySelector('.menubar');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    menubar.classList.toggle('active');
});

console.log(hamburger);
console.log(menubar);

// MAIN
const mainInfo1 = document.querySelector('.main__info1');
const mainInfo2 = document.querySelector('.main__info2');
const mainInfo3 = document.querySelector('.main__info3');
const mainBtn1 = document.querySelector('.main__btn1');
const mainBtn2 = document.querySelector('.main__btn2');
const mainBtn3 = document.querySelector('.main__btn3');
const mainTitle1 = document.querySelector('.main__title1');
const mainTitle2 = document.querySelector('.main__title2');
const mainTitle3 = document.querySelector('.main__title3');
const mainText1 = document.querySelector('.main__text1');
const mainText2 = document.querySelector('.main__text2');
const mainText3 = document.querySelector('.main__text3');
const mainTexts1 = document.querySelector('.main__texts1');
const mainTexts2 = document.querySelector('.main__texts2');
const mainTexts3 = document.querySelector('.main__texts3');
const mainImg1 = document.querySelector('.main__img1');
const mainImg2 = document.querySelector('.main__img2');
const mainImg3 = document.querySelector('.main__img3');
const mainCheck1 = document.querySelector('.main__check1');
const mainCheck2 = document.querySelector('.main__check2');
const mainCheck3 = document.querySelector('.main__check3');

mainBtn1.addEventListener('click', function () {
    mainText1.classList.toggle('activeText1')
    mainInfo1.classList.toggle('active1')
    mainTitle1.classList.toggle('activeTitle1')
    mainImg1.classList.toggle('activeImg1')
    mainTexts1.classList.toggle('activeTexts1')
    mainCheck1.classList.toggle('activeCheck1')
})

mainBtn2.addEventListener('click', function () {
    mainText2.classList.toggle('activeText2')
    mainInfo2.classList.toggle('active2')
    mainTitle2.classList.toggle('activeTitle2')
    mainImg2.classList.toggle('activeImg2')
    mainTexts2.classList.toggle('activeTexts2')
    mainCheck2.classList.toggle('activeCheck2')
})

mainBtn3.addEventListener('click', function () {
    mainText3.classList.toggle('activeText3')
    mainInfo3.classList.toggle('active3')
    mainTitle3.classList.toggle('activeTitle3')
    mainImg3.classList.toggle('activeImg3')
    mainTexts3.classList.toggle('activeTexts3')
    mainCheck3.classList.toggle('activeCheck3')
})

console.log(mainBtn1);
console.log(mainBtn2);
console.log(mainBtn3);
console.log(mainInfo1);
console.log(mainInfo2);
console.log(mainInfo3);
console.log(mainCheck1);
console.log(mainCheck2);
console.log(mainCheck3);
console.log(mainText1);
console.log(mainText2);
console.log(mainText3);
console.log(mainTexts1);
console.log(mainTexts2);
console.log(mainTexts3);
console.log(mainImg1);
console.log(mainImg2);
console.log(mainImg3);