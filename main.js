document.getElementById('year').textContent = new Date().getFullYear();
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');
if(toggle){
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!expanded));
    menu.classList.toggle('show');
  });
}
// Smooth internal nav
for(const a of document.querySelectorAll('a[href^="#"]')){
  a.addEventListener('click', e => {
    const t = document.querySelector(a.getAttribute('href'));
    if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth'}); menu && menu.classList.remove('show'); toggle && toggle.setAttribute('aria-expanded','false'); }
  })
}
