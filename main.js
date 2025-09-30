const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const menuImg = menuToggle.querySelector('img');
const navLinks = nav.querySelectorAll('a');

const menuIcon = 'menu.png';
const closeIcon = 'close.png';

// Default icon
menuImg.src = menuIcon;

menuToggle.addEventListener('click', (e) => {
  e.stopPropagation();

  const isOpen = nav.classList.toggle('show');
  nav.style.display = isOpen ? 'flex' : 'none';

  menuImg.src = isOpen ? closeIcon : menuIcon;
  menuImg.style.height = isOpen ? '32px' : '44px';

  // Toggle body scroll lock
  document.body.classList.toggle('menu-open', isOpen);
});


document.addEventListener('click', (e) => {
  if (nav.classList.contains('show') && !nav.contains(e.target) && e.target !== menuToggle) {
    nav.classList.remove('show');
    nav.style.display = 'none';
    menuImg.src = menuIcon;
    menuImg.style.height = '44px';
    document.body.classList.remove('menu-open');
  }
});


nav.addEventListener('click', (e) => {
  e.stopPropagation();
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (window.getComputedStyle(menuToggle).display !== 'none') {
      nav.classList.remove('show');
      nav.style.display = 'none';
      menuImg.src = menuIcon;
      menuImg.style.height = '44px';
      document.body.classList.remove('menu-open');
    }
  });
});

const donateBtn = document.querySelector('.donate-btn-header');
const donationSection = document.getElementById('donation');

donateBtn.addEventListener('click', () => {
  donationSection.scrollIntoView({ behavior: 'smooth' });
});



// slider js

const slides = document.querySelector('.slides');
let index = 0;
const total = slides.children.length;

setInterval(() => {
  index = (index + 1) % total;
  slides.style.transform = `translateX(-${index * 25}%)`;
}, 3000); 