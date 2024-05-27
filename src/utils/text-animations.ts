import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import SplitType from 'split-type';
gsap.registerPlugin(ScrollTrigger);

export function elementAnimation(element: HTMLElement[]) {
  // Link timelines to scroll position
  function createScrollTrigger(triggerElement: HTMLElement, timeline: GSAPTimeline) {
    // Play tl when scrolled into view (60% from top of screen)
    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 75%',
      onEnter: () => timeline.play(),
    });
  }

  element.forEach((el) => {
    el.style.opacity = '1';
    new SplitType(el, {
      types: 'lines,words',
      tagName: 'span',
    });

    const words = el.querySelectorAll('.word');

    let tl = gsap.timeline({ paused: true });
    tl.from(words, {
      y: '100%',
      opacity: 1,
      duration: 0.35,
      ease: 'power1.out',
      stagger: 0.2,
    });
    createScrollTrigger(el, tl);
  });
}

export const textAnimations = () => {
  const textSlideUp = document.querySelectorAll('[text-slide-up]') as NodeListOf<HTMLElement>;
  if (!textSlideUp) return;

  elementAnimation([...textSlideUp]);
};
