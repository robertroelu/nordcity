export const languageSwitcher = () => {
  const languageDot = document.querySelectorAll('[language-dot]') as NodeListOf<HTMLElement>;
  const url = location.pathname;
  languageDot.forEach((el: HTMLElement) => {
    if (url.includes('/en')) {
      el.style.justifyContent = 'flex-end';
      el.style.opacity = '1';
    } else {
      el.style.opacity = '1';
    }
  });
};
