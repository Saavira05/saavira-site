// Saavira – base script
// --------------------
// 1) Set the current year in the footer
// 2) (Optional) Placeholder for future features (mobile menu, animations, etc.)

document.addEventListener('DOMContentLoaded', () => {
  // Footer year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Future: mobile menu toggle (keep markup light; we’ll add button + CSS later)
  // const toggle = document.querySelector('.nav-toggle');
  // const menu = document.querySelector('nav ul');
  // if (toggle && menu) {
  //   toggle.addEventListener('click', () => {
  //     menu.classList.toggle('open');
  //     toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
  //   });
  // }
});
``
