const showBtn = document.querySelector('.btn');
const modal = document.querySelector('.modal');
const substrate = document.querySelector('.substrate');
const closeBtn = document.querySelector('.modal__close-btn');

showBtn.addEventListener('click', () => {
  modal.classList.remove('modal--hidden');
  substrate.style.display = 'block';
  document.body.style.overflowY = 'hidden';
});
closeBtn.addEventListener('click', () => {
  modal.classList.add('modal--hidden');
  substrate.style.display = 'none';
  document.body.style.overflowY = '';
})
