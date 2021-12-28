window.addEventListener('scroll', () => {
  const toTop = document.querySelector('.to-top');
  (window.pageYOffset > 150) ? toTop.style.display = 'block' : toTop.style.display = 'none';
  toTop.addEventListener('click', () => window.scrollTo(0, 0));
});
