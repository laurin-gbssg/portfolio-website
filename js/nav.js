const toggle = document.querySelector('.nav-toggle');
const navList = document.querySelector('.nav-list');

toggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  toggle.classList.toggle('open', isOpen);
  toggle.setAttribute('aria-expanded', isOpen);
});

// Close menu when a link is clicked
navList.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    toggle.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});
