import Swiper, {Pagination, Grid} from "swiper";

// swiper core style
import 'swiper/css';

// modules styles
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Grid]);

new Swiper('.services__swiper', {
  pagination: {
    clickable: true,
    el: '.services__pagination',
    bulletClass: 'maintenance__bullet',
    bulletActiveClass: 'maintenance__bullet-active',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      grid: {
        rows: 1,
        fill: 'row',
      }
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 4,
      grid: {
        rows: 2,
        fill: 'row',
      }
    },

    992 : {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 4,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  }
});
