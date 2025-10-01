function toggleMenu() {
  const nav = document.getElementById('nav-menu');
  const menu = document.getElementById('menu-list');
  nav.classList.toggle('show');
  menu.classList.toggle('show');
}

(function() {
  const nav = document.getElementById('nav-menu');
  nav.addEventListener('click', toggleMenu);
})();
