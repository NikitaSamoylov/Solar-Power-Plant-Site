const arrowTop = document.querySelector('.arrow');

window.addEventListener('scroll', () => {
  window.scrollY >= 1000 ? arrowTop.style.display = 'block' : arrowTop.style.display = 'none'
});

arrowTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

