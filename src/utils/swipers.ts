import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade, Navigation, Controller];

  const swipersEl = document.querySelectorAll('[swiper-option]') as NodeListOf<HTMLElement>;
  if (!swipersEl) return;

  let settings = {};
  let swiperHeaders = [] || null;

  swipersEl.forEach((el) => {
    const elAttr = el.getAttribute('swiper-option');

    //Home header swiper combination
    if (elAttr?.includes('home-headers')) {
      settings = {
        modules: swiperModules,
        effect: 'fade',
        speed: 500,
        allowTouchMove: false,
        fadeEffect: { crossFade: true },
      };

      const newSwiper = new Swiper(el, settings) || null;
      swiperHeaders.push(newSwiper);
    }
  });

  const elButtons = document.querySelector('[swiper-option="home-header-buttons"]') as HTMLElement;
  const elPrev = document.querySelector('[swiper-prev="home-header-buttons"]') as HTMLElement;
  const elNext = document.querySelector('[swiper-next="home-header-buttons"]') as HTMLElement;

  let swiperButtons = new Swiper(elButtons, {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 0,
    allowTouchMove: false,
    navigation: {
      nextEl: elNext,
      prevEl: elPrev,
    },
  });

  //Text initialization and counting
  const length = swiperButtons.slides.length;
  const actualSlide = swiperButtons.activeIndex + 1;
  const counterText = document.querySelector('[counter-text]') as HTMLElement;
  counterText.textContent = actualSlide + '/' + length;
  swiperButtons.on('slideChange', (el) => {
    const actualSlide = el.activeIndex;
    counterText.textContent = actualSlide + 1 + '/' + length;

    swiperHeaders.forEach((el) => {
      el.slideTo(actualSlide);
    });
  });
};
