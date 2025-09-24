const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const menuImg = menuToggle.querySelector('img');

const menuIcon = 'menu.png';   
const closeIcon = 'close.png'; 

menuImg.src = menuIcon; 

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();

  const isOpen = nav.classList.toggle('show');
  nav.style.display = isOpen ? 'flex' : 'none';


  menuImg.src = isOpen ? closeIcon : menuIcon;


  menuImg.style.height = isOpen ? '32px' : '44px';
});


document.addEventListener('click', (e) => {
  if (nav.classList.contains('show') && !nav.contains(e.target) && e.target !== menuToggle) {
    nav.classList.remove('show');
    nav.style.display = 'none';
    menuImg.src = menuIcon;
    menuImg.style.height = '44px';
  }
});


nav.addEventListener('click', (e) => {
  e.stopPropagation();
});
