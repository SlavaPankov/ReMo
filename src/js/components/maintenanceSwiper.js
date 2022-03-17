import Swiper, { Pagination } from "swiper";

// swiper core style
import 'swiper/css'

// modules styles
import 'swiper/css/navigation'
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
});
