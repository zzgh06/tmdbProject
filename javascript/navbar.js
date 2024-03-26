document.querySelectorAll('.dropdown-container').forEach(container => {
  const button = container.querySelector('.dropbtn');
  const dropdownContent = container.querySelector('.dropdown-content');

  button.addEventListener('click', () => {
    dropdownContent.classList.toggle('show');
  });

  container.addEventListener('mouseover', () => {
    closeAllDropdowns();
    dropdownContent.classList.add('show')
  })

  container.addEventListener('mouseleave', () => {
    closeAllDropdowns();
  });
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.dropdown-container')) {
    closeAllDropdowns();
  }
});

function closeAllDropdowns() {
  document.querySelectorAll('.dropdown-content').forEach(dropdown => {
    dropdown.classList.remove('show');
  });
}