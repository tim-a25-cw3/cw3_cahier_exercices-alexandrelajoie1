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
    const swiper = new Swiper('.js-swiper', {
      pagination: {
        el: '.swiper-paginaion',
      },
    });
  }
}
new Main();
