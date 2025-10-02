function toggleMenu() {
  const nav = document.getElementById('nav');
  const menu = document.getElementById('menu');
  nav.classList.toggle('show');
  menu.classList.toggle('show');
}

(function() {
  const nav = document.getElementById('nav');
  nav.addEventListener('click', toggleMenu);
})();
