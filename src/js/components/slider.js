let slideIndex = 1;
slides = document.querySelectorAll('.slider__item'),
slides2 = document.querySelectorAll('.slider-two__item'),
slides3 = document.querySelectorAll('.slider-three__item'),
prev = document.querySelector('.slider-nav__prev'),
next = document.querySelector('.slider-nav__next'),
prev2 = document.querySelector('.slider-two-nav__prev'),
next2 = document.querySelector('.slider-two-nav__next'),
prev3 = document.querySelector('.slider-three-nav__prev'),
next3 = document.querySelector('.slider-three-nav__next'),

showSlides(slideIndex);

function showSlides(n) {
  if (n > 3) {
      slideIndex = 1;
      // next.style.display = 'none'
  }
  if (n < 1) {
      // slideIndex = slides.length;
      slideIndex = 3;
  }

  slides.forEach((item) => item.style.display = 'none');
  slides2.forEach((item) => item.style.display = 'none');
  slides3.forEach((item) => item.style.display = 'none');

  slides[slideIndex - 1].style.display = 'block';
  slides2[slideIndex - 1].style.display = 'block';
  slides3[slideIndex - 1].style.display = 'block';
};

function plusSlides(n) {
  showSlides(slideIndex += n);
};
function currentSlide(n) {
  showSlides(slideIndex = n);
};

const animateFunction = function(n) {
  n.classList.remove('animate');
}

prev.addEventListener('click', function() {
  prev.classList.add('animate')
  plusSlides(-1);
});
prev.addEventListener("animationend", () => {
  animateFunction(prev)
}, false);

next.addEventListener('click', function() {
  next.classList.add('animate');
  plusSlides(1);
});
next.addEventListener("animationend", () => {
  animateFunction(next)
}, false);

prev2.addEventListener('click', function() {
  prev2.classList.add('animate');
  plusSlides(-1);
});
prev2.addEventListener("animationend", () => {
  animateFunction(prev2)
}, false);

next2.addEventListener('click', function() {
  next2.classList.add('animate');
  plusSlides(1);
});
next2.addEventListener("animationend", () => {
  animateFunction(next2)
}, false);

prev3.addEventListener('click', function() {
  prev3.classList.add('animate');
  plusSlides(-1);
});
prev3.addEventListener("animationend", () => {
  animateFunction(prev3)
}, false);

next3.addEventListener('click', function() {
  next3.classList.add('animate');
  plusSlides(1);
});
next3.addEventListener("animationend", () => {
  animateFunction(next3)
}, false);

