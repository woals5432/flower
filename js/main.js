// 헤더
const header = document.querySelector(".main_header");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    header.classList.add("down");
  }
  if (window.scrollY <= 300) {
    header.classList.remove("down");
  }
});

// 메뉴 버튼
const headerInner = document.querySelector(".header_inner");
const nav = document.querySelector(".nav_open");
const navBtn = document.querySelector(".nav_btn");
const navClose = document.querySelector(".nav_closeBtn");

navBtn.addEventListener("click", () => {
  nav.classList.add("open");
});

navClose.addEventListener("click", () => {
  nav.classList.remove("open");
});

// const menuBtn = document.querySelector('.menuBtn');
// const menu = document.querySelector('.menuBg');
// const nav = document.querySelector('nav');

// menuBtn.addEventListener('click', function () {

//   if (menu.style.opacity === '0') {
//     menu.style.opacity = '1'; // 열기
//     menu.style.visibility = "visible";
//     menuBtn.style.background = "black";
//     nav.style.background = "#000";
//     nav.style.color = "white";
//     nav.style.border = "none";
//     document.querySelector('.menuBtn span').style.background = "url('img/noun-flower-1002754-FFFFFF.svg') no-repeat center center / 100%"
//     menu.style.visibility = "visible";
//   } else {
//     menu.style.opacity = '0'; // 닫기
//     menu.style.visibility = "hidden";
//     menuBtn.style.background = "white";
//     nav.style.background = "white";
//     nav.style.color = "#000";
//     nav.style.borderBottom = "1px solid #eee";
//     document.querySelector('.menuBtn span').style.background = "url('img/noun-flower-1002754.svg') no-repeat center center / 100%"
//     menu.style.visibility = "hidden";
//   }
// })

// 꽃사전 슬라이더
var swiper = new Swiper(".month_flower", {
  slidesPerView: 5,
  spaceBetween: 20,
  loop: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },
});
