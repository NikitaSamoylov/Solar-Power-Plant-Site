const tabHeaderItem = document.querySelectorAll('.advantages-tabs-header__item');
const tabBodyItem = document.querySelectorAll('.advantages-tabs-body__item');

tabHeaderItem.forEach((item, index) => {
  item.addEventListener('click', () => {
    tabBodyItem.forEach((e) => {
      e.classList.remove('advantages-tabs-body__item--active');
    });
    tabHeaderItem.forEach((elem) => {
      elem.classList.remove('advantages-tabs-header__item--active');
    });
    tabHeaderItem[index].classList.add('advantages-tabs-header__item--active');
    tabBodyItem[index].classList.add('advantages-tabs-body__item--active');
    tabBodyItem[index].classList.add('animateFade');
  });
});

