// ハンバーガーメニュー
const header = document.querySelector('header');
const menuBtn = document.querySelector('#nav-trigger');
const overlay = document.querySelector('.overlay');

function initHamburger() {
  if (window.innerWidth <= 1439) {
    menuBtn.addEventListener('click', toggleMenu);
    overlay.addEventListener('click', closeMenu);
  } else {
    menuBtn.removeEventListener('click', toggleMenu);
    overlay.removeEventListener('click', closeMenu);
    header.classList.remove('show');
    menuBtn.classList.remove('close-btn');
  }
}

function toggleMenu(e) {
  e.stopPropagation();
  const isOpen = header.classList.toggle('show');
  menuBtn.classList.toggle('close-btn', isOpen);
}

function closeMenu() {
  header.classList.remove('show');
  menuBtn.classList.remove('close-btn');
}

initHamburger();

window.addEventListener('resize', initHamburger);