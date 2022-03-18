import JustValidate from "just-validate";
import Inputmask  from "inputmask/lib/inputmask";
import {renderThankyouMessage} from "./renderThankyouMessage";

export function maskedNumber(selector, mask) {
  const maskedField = selector;
  const im = new Inputmask(mask);
  im.mask(maskedField);
}

export function validationForm(form, selector) {
  const validate = new JustValidate(form);
  validate
    .addField('#name', [
      {
        rule: 'required',
        errorMessage: 'Введите имя',
      },
      {
        rule: 'minLength',
        value: 3,
        errorMessage: 'Слишком короткое имя',
      },
      {
        rule: 'maxLength',
        value: 30,
        errorMessage: 'Слишком длинное имя',
      },
      {
        rule: 'customRegexp',
        value: /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/u,
        errorMessage: 'Некорректный ввод'
      }
    ])
    .addField('#phone', [
      {
        rule: 'required',
        errorMessage: 'Введите телефон'
      },
      {
        rule: 'function',
        validator: function () {
          const phone = selector.inputmask.unmaskedvalue();
          return phone.length === 10;
        },
        errorMessage: 'Введите корректный телефон',
      }
    ])
    .addField('#email', [
      {
        rule: 'required',
        errorMessage: 'Введите email'
      },
    ])
    .onSuccess(event => {
      let formData = new FormData(event.target);
      console.log('Валидация пройдена');
      console.log(formData);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log('Отправлено');
          }
        }
      }
      // xhr.open('POST', '/integrationBitrix.php', true);
      // xhr.send(formData);

      if (document.querySelector('.modal')) {
        document.querySelector('.modal__heading').remove();
        document.querySelector('.modal__descr').remove();
        document.querySelector('.form-callback').remove();
        document.querySelector('.modal').append(renderThankyouMessage());
      }

      event.target.reset();
    })
}
