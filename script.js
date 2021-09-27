const toggleBtn = document.querySelector('.nav-menu-toggle');
const openToggleImg = document.querySelector('.open-toggle');
const closeToggleImg = document.querySelector('.close-toggle');
const menu = document.querySelector('.nav-list');

toggleBtn.addEventListener('click', function () {
  if (!menu.classList.contains('open')) {
    menu.classList.add('open');
    openToggleImg.style.display = 'none';
    closeToggleImg.style.display = 'block';
  } else {
    menu.classList.remove('open');
    openToggleImg.style.display = 'block';
    closeToggleImg.style.display = 'none';
  }
})

document.addEventListener('keyup', function (e) {
  if (menu.classList.contains('open') && e.key === 'Escape'){
    menu.classList.remove('open');
    openToggleImg.style.display = 'block';
    closeToggleImg.style.display = 'none';
  }
})