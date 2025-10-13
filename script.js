const themeBtn = document.querySelector('.theme-btn');
const themeIcon = document.getElementById('icon-theme');
const body = document.body;

// ================= Theme Toggle =================

// Check saved theme in localStorage
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  body.classList.add(savedTheme);
  updateIcon(savedTheme);
} else {
  // Default theme = dark
  body.classList.add('dark');
  updateIcon('dark');
}

// Event listener
themeBtn.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    body.classList.replace('dark', 'light');
    localStorage.setItem('theme', 'light');
    updateIcon('light');
  } else {
    body.classList.replace('light', 'dark');
    localStorage.setItem('theme', 'dark');
    updateIcon('dark');
  }
});

// Helper function to update icon
function updateIcon(theme) {
  if (theme === 'dark') {
    themeIcon.classList.add('bxr', 'bx-sun-bright');
    themeIcon.classList.remove('bxr', 'bx-moon-star');
  } else {
    themeIcon.classList.add('bxr', 'bx-moon-star');
    themeIcon.classList.remove('bxr', 'bx-sun-bright');
  }
}

const menuBtn = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
const menuIcon = menuBtn.querySelector('i');
const navLinks = document.querySelectorAll('.nav a');

// toggle open/close
menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  nav.classList.toggle('display-menu-toggle');
  if (nav.classList.contains('display-menu-toggle')) {
    menuIcon.classList.remove('bx-menu-select');
    menuIcon.classList.add('bx-x');
  } else {
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu-select');
  }
});

// close when link clicked
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('display-menu-toggle');
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu-select');
  });
});

// close when clicking outside
document.addEventListener('click', (e) => {
  if (
    nav.classList.contains('display-menu-toggle') &&
    !nav.contains(e.target) &&
    !menuBtn.contains(e.target)
  ) {
    nav.classList.remove('display-menu-toggle');
    menuIcon.classList.remove('bx-x');
    menuIcon.classList.add('bx-menu-select');
  }
});

// ================ FOOTER ========================
const currentYear = new Date().getFullYear();
const footer = document.getElementById('footer');
const p = footer.querySelector('p');
p.innerHTML = `&copy; ${currentYear} Issa Koné - sly.codes`;

console.log(currentYear);
