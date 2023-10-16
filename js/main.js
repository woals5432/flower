const headerInner = document.querySelector('.header_inner');
const nav = document.querySelector('.nav_open');
const navBtn = document.querySelector('.nav_btn');
const navClose = document.querySelector('.nav_closeBtn');
navBtn.addEventListener('click', () => {
  headerInner.style.color = 'white';
  nav.style.display = 'block';
});
navClose.addEventListener('click', () => {
  headerInner.style.color = '';
  nav.style.display = '';
})