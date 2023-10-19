// 헤더
const header = document.querySelector('header');
window.addEventListener('scroll', () => {
  if(window.scrollY > 300) {
    header.classList.add('on');
  };
  if(window.scrollY <= 300) {
    header.classList.remove('on');
  };
});

// 메뉴 버튼
const headerInner = document.querySelector('.header_inner');
const nav = document.querySelector('.nav_open');
const navBtn = document.querySelector('.nav_btn');
const navClose = document.querySelector('.nav_closeBtn');
navBtn.addEventListener('click', () => {
  headerInner.style.color = 'black';
  nav.style.display = 'block';

  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
      header.classList.remove('on');
    };
  });
});
navClose.addEventListener('click', () => {
  headerInner.style.color = '';
  nav.style.display = '';
  
  window.addEventListener('scroll', () => {
    if(window.scrollY > 300) {
      header.classList.add('on');
    };
  });
})
