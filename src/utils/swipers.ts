import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';

import { elementAnimation } from './text-animations';

export const swipers = () => {
  const swiperModules = [Autoplay, EffectFade, Navigation, Controller];

  function headerSwipers() {
    //Home header swiper
    const swipersEl = document.querySelectorAll(
      '[swiper-option-header]'
    ) as NodeListOf<HTMLElement>;
    if (!swipersEl) return;

    let settings = {};
    let swiperHeaders = [] || null;

    swipersEl.forEach((el) => {
      const elAttr = el.getAttribute('swiper-option-header');

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

    const elButtons = document.querySelector(
      '[swiper-option-header="home-header-buttons"]'
    ) as HTMLElement;
    if (!elButtons) return;
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

      swiperHeaders.forEach((el: Swiper) => {
        el.slideTo(actualSlide);
      });
    });
  }

  headerSwipers();

  function clientsSwiper() {
    //Home header swiper
    const swipersEl = document.querySelectorAll(
      '[swiper-option-clients]'
    ) as NodeListOf<HTMLElement>;
    if (!swipersEl) return;

    let settings = {};
    let swiperHeaders = [] || null;

    swipersEl.forEach((el) => {
      const elAttr = el.getAttribute('swiper-option-clients');

      if (elAttr?.includes('home-clients')) {
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

    const elButtons = document.querySelector(
      '[swiper-option-clients="home-client-buttons"]'
    ) as HTMLElement;
    if (!elButtons) return;
    const elPrev = document.querySelector('[swiper-prev="home-client-buttons"]') as HTMLElement;
    const elNext = document.querySelector('[swiper-next="home-client-buttons"]') as HTMLElement;

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
    swiperButtons.on('slideChange', (el) => {
      const actualSlide = el.activeIndex;

      swiperHeaders.forEach((el: Swiper) => {
        el.slideTo(actualSlide);
      });
    });

    const elTitle = document.querySelectorAll('[text-slide-up-heading]');
    console.log(elTitle);
  }

  clientsSwiper();
};
