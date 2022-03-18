import { renderModalForm } from "../functions/renderModalForm";
import vars from '../_vars';

document.querySelectorAll('.btn-open').forEach(item => {
  item.addEventListener('click', () => {
    vars.siteContainer.append(renderModalForm());
    const scrollWrapper = document.querySelector('.simplebar-content-wrapper');
    const scrollBar = document.querySelector('.simplebar-vertical');
    const wrapper = document.querySelector('.wrapper');
    const wrapperBg = document.querySelector('.wrapper__bg');
    const wrapperSlide = document.querySelector('.wrapper__slide');
    setTimeout(() => {
      wrapperBg.classList.add('modal-is-open');
      wrapperSlide.classList.add('wrapper-slide--current');
    },300);



    scrollWrapper.classList.add(vars.burgerClassesOverflow);
    scrollBar.classList.add(vars.burgerClassesZIndex);
  })
})
