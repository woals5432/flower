const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('.menuBg');

menuBtn.addEventListener('click', function () {
  if (menu.style.opacity === '0') {
    menu.style.opacity = '1'; // 열기
  } else {
    menu.style.opacity = '0'; // 닫기
  }
})