import { gsap } from 'gsap';

export const hoverAnimation = () => {
  const el = document.querySelectorAll('[hover-scale]') as NodeListOf<HTMLElement>;
  if (!el) return;

  el.forEach((item) => {
    const image = item.querySelector('img') as HTMLElement;

    item.addEventListener('mouseenter', function () {
      gsap.to(image, { scale: 1.1, duration: 1, ease: 'power2.out', overwrite: true });
    });

    item.addEventListener('mouseleave', function () {
      gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
    });
  });
};
