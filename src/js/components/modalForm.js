import { renderModalForm } from "../functions/renderModalForm";
import vars from '../_vars';
import {maskedNumber, validationForm} from "../functions/validationForm";

document.querySelectorAll('.btn-open').forEach(item => {
  item.addEventListener('click', () => {

    const url = window.location.origin;
    const urlSend = url + '/wp-admin/admin-ajax.php?action=callback_mail';

    vars.siteContainer.append(renderModalForm());
    const scrollWrapper = document.querySelector('.simplebar-content-wrapper');
    const scrollBar = document.querySelector('.simplebar-vertical');
    const wrapperBg = document.querySelector('.wrapper__bg');
    const wrapperSlide = document.querySelector('.wrapper__slide');
    const form = document.querySelector('.form-callback');
    form.setAttribute('action', urlSend);
    setTimeout(() => {
      wrapperBg.classList.add('modal-is-open');
      wrapperSlide.classList.add('wrapper-slide--current');
    },300);



    scrollWrapper.classList.add(vars.burgerClassesOverflow);
    scrollBar.classList.add(vars.burgerClassesZIndex);
  })
})

if (document.querySelector('.form-app')) {
  const mask = '+7 (999)-999-99-99';
  const selector = document.querySelector('#phone')
  maskedNumber(selector, mask);
  validationForm(document.querySelector('.form-app'), selector);
}
