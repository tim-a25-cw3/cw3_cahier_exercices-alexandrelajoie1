import Icons from './utils/Icons.js';
import Swiper from 'swiper/bundle';

class Main {
  constructor() {
    this.init();
  }

  init() {
    Icons.load();
    this.initPagination();
  }

  initPagination() {
    const target = document.querySelector('.js-swiper-page');
    if (target) {
      const swiper = new Swiper(target, {
        pagination: {
          slidesPerView : 1,
          spaceBetween : 30,
          el: '.swiper-pagination',
        },
      });
    }
  }
}
new Main();
