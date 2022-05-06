import vars from '../_vars';

function burgerOpenClose(vars) {
  const scrollWrapper = document.querySelector('.simplebar-content-wrapper');
  const scrollBar = document.querySelector('.simplebar-vertical');
  vars.burgerMenu.classList.toggle(vars.burgerClassesOpen);
  vars.header.classList.toggle(vars.burgerClassesWithoutBorder);
  vars.burgerBtn.classList.toggle(vars.burgerClassesBtnOpen);
  vars.burgerLine.classList.toggle(vars.burgerClassesLine);
  scrollWrapper.classList.toggle(vars.burgerClassesOverflow);
  scrollBar.classList.toggle(vars.burgerClassesZIndex);
}

// Открытие закрытие меню
vars.burgerBtn.addEventListener('click' ,() => {
  burgerOpenClose(vars);
});

vars.burgerMenuLink.forEach(link => {
  link.addEventListener('click', () => {
    burgerOpenClose(vars);
  });
});

// Dropdown в бургер

vars.dropdownBtn.forEach(item => {
  item.addEventListener('click', () => {
    vars.dropdownMenu.forEach(elem => {
      if(elem.dataset.target === item.dataset.path) {
        elem.classList.toggle('is-open');
        item.classList.toggle('rotate');
      }
    });
  });
});
