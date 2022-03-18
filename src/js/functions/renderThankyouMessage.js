import {createFromTemplate} from "./createFromTemplate";

export function renderThankyouMessage() {
  const template = `
    <div class="message">
        <h2 class="message__heading heading-reset">
            Спасибо за заявку
        </h2>
        <div class="message__subscribe">
            С вами скоро свяжутся
        </div>
    </div>>
  `;

  return createFromTemplate(template);
}
