import Swiper, { Pagination } from "swiper";

// swiper core style
import 'swiper/css'

// modules styles
import 'swiper/css/pagination'

Swiper.use([Pagination]);

new Swiper('.maintenance__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 2,
  spaceBetween: 6,

  // Меняем классы для слайдов
  slideActiveClass: 'maintenance__slide-active',
  slideNextClass: 'maintenance__slide-next',

  // Пагинация
  pagination: {
    clickable: true,
    el: '.maintenance__pagination',
    bulletClass: 'maintenance__bullet',
    bulletActiveClass: 'maintenance__bullet-active',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },

    576: {
      slidesPerView: 3,
      slidesPerGroup: 2,
      spaceBetween: 6,
    }
  }
});
