// Mobile nav toggle
const toggle = document.querySelector('.nav-toggle');
const menu = document.querySelector('#nav-menu');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
const y = document.querySelector('#year');
if (y) y.textContent = String(new Date().getFullYear());
