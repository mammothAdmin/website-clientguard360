// Nav scroll shadow
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

// Close dropdown when mouse leaves nav item
document.querySelectorAll('.nav__item').forEach(item => {
  item.addEventListener('mouseleave', () => {
    const btn = item.querySelector('button');
    if (btn) btn.blur();
  });
});

// Mobile menu toggle
const burger = document.getElementById('burger');
const mobileNav = document.getElementById('mobile-nav');
burger.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});
