if (window.innerWidth <= 576) {
  const accordion = document.querySelectorAll('.accordion-320');
  if (accordion.length > 0) {
    accordion.forEach(item => {
      item.addEventListener('click', () => {
        item.classList.toggle('accord-close');
      });
    });
  }
}
