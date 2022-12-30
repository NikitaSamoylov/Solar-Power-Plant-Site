const showBtn = document.querySelectorAll('.btn-launch-modal');
const modal = document.querySelector('.modal');
const substrate = document.querySelector('.substrate');
const closeBtn = document.querySelector('.modal__close-btn');

const CLOSE_MODAL_KEY = {
  ESC: 'Esc',
  ESCAPE: 'Escape'
};

showBtn.forEach(function (el) {
  el.addEventListener('click', function() {
    console.log('ok')
    modal.classList.remove('modal--hidden');
    substrate.style.display = 'block';
    document.body.style.overflowY = 'hidden';
  })
})

closeBtn.addEventListener('click', () => {
  modal.classList.add('modal--hidden');
  substrate.style.display = 'none';
  document.body.style.overflowY = '';
});

document.addEventListener('keydown', function(e) {
  if (e.key === CLOSE_MODAL_KEY.ESC || e.key === CLOSE_MODAL_KEY.ESCAPE) {
    modal.classList.add('modal--hidden');
    substrate.style.display = 'none';
    document.body.style.overflowY = '';
    showBtn.forEach((i) => {
      i.classList.remove('focus-visible');
    });
  };
});
