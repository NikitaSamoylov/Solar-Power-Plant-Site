const footerForm = document.querySelector('.footer-form');
const footerFormField = document.querySelectorAll('.footer-form__input');
const footerFormTitle = document.querySelector('.content-form__title');

const message = {
  success: 'Сообщение отправлено. Скоро с вами свяжемся. Спасибо',
  failure: 'Ошибка. Обновите страницу и отправьте форму еще раз'
}

footerForm.addEventListener('submit', async(evt) => {
  evt.preventDefault();
  footerFormTitle.textContent = 'Отправка формы...';
  const url = 'https://jsonplaceholder.typicode.com/todos/1';
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: new FormData(footerForm),
    });
    const result = await response.json()
    footerFormTitle.textContent = message.success;
    footerFormTitle.style.backgroundColor = 'green';
    footerFormField.forEach((item) => {
      item.value = '';
    })

  } catch (error) {
    footerFormTitle.textContent = message.failure;
    footerFormTitle.style.backgroundColor = 'red';
  }
})
