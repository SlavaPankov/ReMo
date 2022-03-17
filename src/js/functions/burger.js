import vars from '../_vars';

vars.burgerBtn.addEventListener('click' ,() => {
  const scrollWrapper = document.querySelector('.simplebar-content-wrapper');
  const scrollBar = document.querySelector('.simplebar-vertical');
  vars.burgerMenu.classList.toggle(vars.burgerClassesOpen);
  vars.header.classList.toggle(vars.burgerClassesWithoutBorder);
  vars.burgerBtn.classList.toggle(vars.burgerClassesBtnOpen);
  vars.burgerLine.classList.toggle(vars.burgerClassesLine);
  scrollWrapper.classList.toggle(vars.burgerClassesOverflow);
  scrollBar.classList.toggle(vars.burgerClassesZIndex);
});
