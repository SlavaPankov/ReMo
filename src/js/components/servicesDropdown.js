if (window.innerWidth <= 576) {
  const listItems = document.querySelectorAll('.dropdown-title');
  const list = document.querySelector('.category-list-320');

  listItems[0].addEventListener('click', () => {
    list.classList.toggle('dropdown-open');
  });

  listItems.forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target !== listItems[0]) {
        const firstTitle = listItems[0].textContent;
        listItems[0].textContent = e.target.textContent;
        e.target.textContent = firstTitle;
        e.target.classList.remove('is-active');
        listItems[0].classList.add('dropdown-open');
        list.classList.remove('dropdown-open');
      }
    });
  });
}
