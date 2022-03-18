import Swiper, {Pagination, Grid} from "swiper";

// swiper core style
import 'swiper/css';

// modules styles
import 'swiper/css/pagination';
import 'swiper/css/grid';

Swiper.use([Pagination, Grid]);

new Swiper('.services__swiper', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 4,

  modules: [Pagination, Grid],
  grid: {
    rows: 2,
    fill: 'row'
  },

  pagination: {
    clickable: true,
    el: '.services__pagination',
    bulletClass: 'maintenance__bullet',
    bulletActiveClass: 'maintenance__bullet-active',
  }
});
