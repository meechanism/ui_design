function ready(fn) {
  console.log('setup ');
  if (document.readyState != 'loading') {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(setupMobileMenu);

function toggleMenu() {
  const menuEl = document.getElementById('mobile-menu');
  const isOpen = menuEl.dataset.state === 'open';
  console.log(`Toglge: ${isOpen}`);
  if (isOpen) {
    menuEl.dataset.state = 'closed';
    menuEl.style.display = 'none';
  } else {
    menuEl.dataset.state = 'open';
    menuEl.style.display = 'block';
  }
}

function setupMobileMenu() {
  console.log('setup mobile');
  const menuBtn = document.getElementById('menu-button');
  menuBtn.addEventListener('click', toggleMenu);
}
