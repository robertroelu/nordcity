import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';

export const swipersBuildings = () => {
  const swiperModules = [Autoplay, EffectFade, Navigation, Controller];

  const swiperBuilding = document.querySelector('[swiper-option="home-building"]') as HTMLElement;
  const swiperBuildingPrev = document.querySelector('[swiper-prev="home-building"]') as HTMLElement;
  const swiperBuildingNext = document.querySelector('[swiper-next="home-building"]') as HTMLElement;

  let swiperButtons = new Swiper(swiperBuilding, {
    modules: swiperModules,
    speed: 500,
    spaceBetween: 80,
    allowTouchMove: false,
    navigation: {
      nextEl: swiperBuildingNext,
      prevEl: swiperBuildingPrev,
    },
  });

  const elDots = document.querySelectorAll('[popover-dot]') as NodeListOf<HTMLElement>;
  const arrowSwiper = document.querySelectorAll(
    '.home_buildings_main-arrow-wrap'
  ) as NodeListOf<HTMLElement>;
  elDots.forEach((el) => {
    // Desktop
    el.addEventListener('mouseover', () => {
      const elChild = el.children[0] as HTMLElement;
      elChild.style.transform = 'scale(1)';
      elChild.style.opacity = '1';
      el.style.zIndex = '50';
      arrowSwiper.forEach((arrowEl) => {
        arrowEl.style.zIndex = '0';
      });
    });

    el.addEventListener('mouseout', () => {
      const elChild = el.children[0] as HTMLElement;
      elChild.style.transform = 'scale(0)';
      elChild.style.opacity = '0';
      el.style.zIndex = '30';
      arrowSwiper.forEach((arrowEl) => {
        arrowEl.style.zIndex = '10';
      });
    });

    // Mobile
    el.addEventListener('touchstart', () => {
      const elAttr = el.getAttribute('popover-dot');
      const elParents = el.parentNode?.childNodes as NodeListOf<HTMLElement>;

      elParents.forEach((elNode) => {
        if (elNode.getAttribute('popover-mobile') === elAttr) {
          elNode.style.transform = 'scale(1) translate(-50%, -50%)';
          elNode.style.opacity = '1';
        }
      });
    });

    el.addEventListener('touchend', () => {
      const elAttr = el.getAttribute('popover-dot');
      const elParents = el.parentNode?.childNodes as NodeListOf<HTMLElement>;

      elParents.forEach((elNode) => {
        if (elNode.getAttribute('popover-mobile') === elAttr) {
          elNode.style.transform = 'scale(0) translate(-50%, -50%)';
          elNode.style.opacity = '0';
        }
      });
    });
  });
};
