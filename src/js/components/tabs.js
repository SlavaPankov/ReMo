import vars from '../_vars';

vars.tabsBtn.forEach(item => {
  item.addEventListener('click', (e) => {
    vars.tabsBtn.forEach(elem => {
      elem.classList.remove(vars.tabsActiveClass);
    });
    e.currentTarget.classList.add(vars.tabsActiveClass);
  });
});
