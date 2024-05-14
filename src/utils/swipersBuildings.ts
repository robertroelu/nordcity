import 'swiper/css/bundle';

import Swiper from 'swiper';
import { Autoplay, EffectFade, Navigation, Controller } from 'swiper/modules';

export const swipersBuildings = () => {
  const swiperModules = [Autoplay, EffectFade, Navigation, Controller];

  const elBuilding = document.querySelector(
    '[swiper-option-hotspot="home-building"]'
  ) as HTMLElement;
  if (!elBuilding) return;
  const swiperBuildingPrev = document.querySelector('[swiper-prev="home-building"]') as HTMLElement;
  const swiperBuildingNext = document.querySelector('[swiper-next="home-building"]') as HTMLElement;

  let swiperBuilding = new Swiper(elBuilding, {
    modules: swiperModules,
    speed: 500,
    spaceBetween: 80,
    allowTouchMove: false,
    navigation: {
      nextEl: swiperBuildingNext,
      prevEl: swiperBuildingPrev,
    },
    initialSlide: 1,
  });

  const elGallery = document.querySelector('[swiper-option-hotspot="home-gallery"]') as HTMLElement;
  if (!elGallery) return;

  let swiperButtons = new Swiper(elGallery, {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 0,
    allowTouchMove: false,
    initialSlide: 1,
  });

  const elTitle = document.querySelector('[swiper-option-hotspot="home-titles"]') as HTMLElement;
  if (!elTitle) return;

  let swiperTitles = new Swiper(elTitle, {
    modules: swiperModules,
    effect: 'fade',
    fadeEffect: { crossFade: true },
    speed: 500,
    allowTouchMove: false,
    initialSlide: 1,
  });

  swiperBuilding.on('slideChange', (el) => {
    const actualSlide = el.activeIndex;
    console.log(actualSlide);
    swiperTitles.slideTo(actualSlide);
    swiperButtons.slideTo(actualSlide);
  });

  // Dots hover on desktop and mobile
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
    el.addEventListener('mouseover', () => {
      const elAttr = el.getAttribute('popover-dot');
      const elParents = el.parentNode?.childNodes as NodeListOf<HTMLElement>;

      elParents.forEach((elNode) => {
        if (elNode.getAttribute('popover-mobile') === elAttr) {
          elNode.style.transform = 'translate(-50%, -50%) scale(1)';
          elNode.style.opacity = '1';
          elNode.style.zIndex = '60';
        }
      });
    });

    el.addEventListener('mouseout', () => {
      const elAttr = el.getAttribute('popover-dot');
      const elParents = el.parentNode?.childNodes as NodeListOf<HTMLElement>;

      elParents.forEach((elNode) => {
        if (elNode.getAttribute('popover-mobile') === elAttr) {
          elNode.style.transform = 'translate(-50%, -50%) scale(0)';
          elNode.style.opacity = '0';
          elNode.style.zIndex = '0';
        }
      });
    });
  });
};
