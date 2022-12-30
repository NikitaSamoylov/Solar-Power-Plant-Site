const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  loop: true,
  paginationClickable: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.navigation.prevEl.style.display = 'none';
swiper.navigation.nextEl.style.display = 'none';

const clientsButtons = document.querySelector('.clients-buttons');
clientsButtons.addEventListener('click', function(evt) {
  evt.target.classList.add('animate');
  evt.target.addEventListener('animationend', function() {
    evt.target.classList.remove('animate')
  }, false);
  evt.target.classList.contains('clients-buttons__prev') ? swiper.navigation.prevEl.click() : swiper.navigation.nextEl.click();
});

