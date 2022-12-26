const form = document.querySelector('.modal-form');
const modalField = document.querySelectorAll('.modal-form__field');
const modalTitle = document.querySelector('.modal__title');

const message = {
  success: 'Сообщение отправлено. Скоро с вами свяжемся. Спасибо',
  failure: 'Ошибка. Обновите страницу и отправьте форму еще раз'
}

form.addEventListener('submit', async(evt) => {
  evt.preventDefault();
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: new FormData(form),
    });
    const result = await response.json()
    modalTitle.textContent = message.success;
    modalTitle.style.backgroundColor = 'green';
    modalField.forEach((item) => {
      item.value = '';
    })

  } catch (error) {
    modalTitle.textContent = message.failure;
    modalTitle.style.backgroundColor = 'red';
  }
})
