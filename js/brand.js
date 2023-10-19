let observer = new IntersectionObserver((e) => {
  e.forEach((박스,idx) => {
    if (박스.isIntersecting) {
      박스.target.style.opacity = 1;
    } else {
      박스.target.style.opacity = 0;
    }
  })
})
let section = document.querySelectorAll('section');
observer.observe(section[0]);
observer.observe(section[1]);
observer.observe(section[2]);
observer.observe(section[3]);
observer.observe(section[4]);