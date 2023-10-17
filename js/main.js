const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menuBg');
const nav = document.querySelector('nav');

menuBtn.addEventListener('click', function () {
  
  if (menu.style.opacity === '0') {
    menu.style.opacity = '1'; // 열기
    menu.style.visibility = "visible";
    menuBtn.style.background = "black";
    nav.style.background = "#000";
    nav.style.color = "white";
    nav.style.border = "none";
    document.querySelector('.menuBtn span').style.background = "url('img/noun-flower-1002754-FFFFFF.svg') no-repeat center center / 100%"
    menu.style.visibility = "visible";
  } else {
    menu.style.opacity = '0'; // 닫기
    menu.style.visibility = "hidden";
    menuBtn.style.background = "white";
    nav.style.background = "white";
    nav.style.color = "#000";
    nav.style.borderBottom = "1px solid #eee";
    document.querySelector('.menuBtn span').style.background = "url('img/noun-flower-1002754.svg') no-repeat center center / 100%"
    menu.style.visibility = "hidden";
  }
})