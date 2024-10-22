// import { gsap } from 'gsap';

// export const hoverAnimation = () => {
//   const refreshAnimation = () => {
//     const refreshAnimation = document.querySelectorAll(
//       '[refresh-animation]'
//     ) as NodeListOf<HTMLElement>;

//     refreshAnimation.forEach((el) => {
//       el.addEventListener('click', () => {
//         setTimeout(() => {
//           animation();
//         }, 500);
//       });
//     });
//   };

//   const animation = () => {
//     const el = document.querySelectorAll('[hover-scale]') as NodeListOf<HTMLElement>;
//     if (!el) return;

//     console.log(el);
//     el.forEach((item) => {
//       const image = item.querySelector('img') as HTMLElement;

//       item.addEventListener('mouseenter', function () {
//         gsap.to(image, { scale: 1.1, duration: 1, ease: 'power2.out', overwrite: true });
//       });

//       item.addEventListener('mouseleave', function () {
//         gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
//       });
//     });
//   };

//   animation();
//   refreshAnimation();
// };

import { gsap } from 'gsap';

export const hoverAnimation = () => {
  // Observer function to monitor changes in the "blog_posts_list w-dyn-items" container
  const observeBlogPostsList = () => {
    const targetNode = document.querySelector('[refresh-animation]') as HTMLElement;
    if (!targetNode) return;

    const config = { childList: true, subtree: true }; // Detect added or removed child nodes

    const observer = new MutationObserver((mutationsList) => {
      let hasChanges = false;

      mutationsList.forEach((mutation) => {
        if (mutation.type === 'childList') {
          hasChanges = true;
        }
      });

      // If any DOM changes are detected, call the animation function
      if (hasChanges) {
        setTimeout(() => {
          animation(); // Reapply animation when elements are added or reordered
        }, 0); // You can adjust the timeout based on your needs
      }
    });

    // Start observing the target node for changes
    observer.observe(targetNode, config);
  };

  // Function to apply hover animation using GSAP
  const animation = () => {
    const el = document.querySelectorAll('[hover-scale]') as NodeListOf<HTMLElement>;
    if (!el.length) return; // If no elements, exit

    el.forEach((item) => {
      const image = item.querySelector('img') as HTMLElement;

      if (image) {
        // Apply hover animation on mouseenter
        item.addEventListener('mouseenter', function () {
          gsap.to(image, { scale: 1.1, duration: 1, ease: 'power2.out', overwrite: true });
        });

        // Revert animation on mouseleave
        item.addEventListener('mouseleave', function () {
          gsap.to(image, { scale: 1, duration: 0.5, ease: 'power2.out', overwrite: true });
        });
      }
    });
  };

  // Initial setup
  animation(); // Apply animation initially
  observeBlogPostsList(); // Start observing DOM changes for the blog posts list
};
