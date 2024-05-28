export const blog = () => {
  const dateEl = document.querySelectorAll('[sort="date"]') as NodeListOf<HTMLElement>;
  if (!dateEl) return;

  // FUNCTIONS BLOCK

  function clicked(el: HTMLElement) {
    const inputEl = el.querySelector('input') as HTMLInputElement;
    el.style.pointerEvents = 'none';
    inputEl.checked = true;
    checked();
  }

  function checked() {
    dateEl.forEach((el: HTMLElement) => {
      const inputEl = el.querySelector('input') as HTMLInputElement;
      if (inputEl.checked === true) {
        el.style.pointerEvents = 'none';
      } else {
        el.style.pointerEvents = 'auto';
      }
    });
  }

  // CODE BLOCK

  dateEl.forEach((el: HTMLElement) => {
    el.addEventListener('click', (event) => {
      clicked(event.currentTarget as HTMLElement);
    });
  });

  checked();
};
