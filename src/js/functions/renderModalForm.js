import {createFromTemplate} from "./createFromTemplate";
import {maskedNumber, validationForm} from "../functions/validationForm";
import vars from "../_vars";

export function renderModalForm() {
  const template = `
    <div class="wrapper">
      <div class="wrapper__bg"></div>
      <div class="wrapper__inner">
        <div class="wrapper__stage">
          <div class="wrapper__slide">
            <div class="modal">
              <h2 class="modal__heading heading-reset">
                Оставляйте заявку на консультацию
              </h2>
              <p class="modal__descr heading-reset">
                наши специалисты свяжутся с вами и подберут оптимальное решение для вас!
              </p>
              <button class="modal__close" title="Close"></button>
              <form action="#" class="form-callback">
                <input type="hidden" name="form_name" value="Заявка с сайта">
                <label for="name" class="form-callback__label">
                  <input class="form-callback__input" type="text" name="sm_name" id="name" placeholder="Имя" required>
                </label>
                <label for="email" class="form-callback__label">
                  <input class="form-callback__input form__phone" type="email" name="sm_email" id="email" placeholder="E - mail" required>
                </label>
                <label for="phone" class="form-callback__label">
                  <input class="form-callback__input form__phone" type="tel" name="sm_phone" id="phone" placeholder="+7 (___)-___-__-__" required>
                </label>
                <div class="form-callback__policy">
                    Нажимая на кнопку «Отправить», вы соглашаетесь на обработку <span class="form-callback__confidential">персональных данных</span>
                </div>
                <button class="form-callback__btn btn-reset" type="submit">Отправить</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  const wrapper = createFromTemplate(template);
  const modalCross = wrapper.querySelector('.modal__close');
  const modal = wrapper.querySelector('.modal');
  const form = wrapper.querySelector('.form-callback');


  const mask = '+7 (999)-999-99-99';
  const selector = wrapper.querySelector('#phone');
  //Вешаем маску на форму
  maskedNumber(selector, mask);

  //Вешаем валидацию на форму
  validationForm(form, selector);

  //Обрабатываем клик по крестику
  modalCross.addEventListener('click', (e) => {
    closeModal(wrapper);
  });

  //Обрабатываем клик вне модального окна
  wrapper.addEventListener('click', (e) => {
    if (!e.composedPath().includes(modal)) {
      closeModal(wrapper);
    }
  });

  return wrapper;
}


// Функция закрытия модального окна
function closeModal(wrapper) {
  const scrollWrapper = document.querySelector('.simplebar-content-wrapper');
  wrapper.style.opacity = 0;
  setTimeout(() => {
    wrapper.remove();
    scrollWrapper.classList.remove('overflow');
  }, 300);
  scrollWrapper.classList.remove(vars.burgerClassesOverflow);
}
