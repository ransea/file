/* FONT */
function loadGoogleFonts() {
 const preconnect1 = document.createElement('link');
 preconnect1.rel = 'preconnect';
 preconnect1.href = 'https://fonts.googleapis.com';
 document.head.appendChild(preconnect1);
 
 const preconnect2 = document.createElement('link');
 preconnect2.rel = 'preconnect';
 preconnect2.href = 'https://fonts.gstatic.com';
 preconnect2.crossOrigin = 'anonymous';
 document.head.appendChild(preconnect2);
 
 const fontLink = document.createElement('link');
 fontLink.rel = 'stylesheet';
 fontLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&family=Monda:wght@400..700&family=Play:wght@400;700&family=Roboto:ital,wght@0,100..900;1,100..900&display=swap';
 document.head.appendChild(fontLink);
 
 const iconLink = document.createElement('link');
 iconLink.rel = 'stylesheet';
 iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
 document.head.appendChild(iconLink);
 
 console.log('Google Fonts dan Material Symbols berhasil dimuat!');
}

document.addEventListener('DOMContentLoaded', loadGoogleFonts);

/* NAV */
function buildNavigation() {
 const nav = document.createElement('nav');
 nav.className = 'myNav';
 
 const brand = document.createElement('h1');
 brand.className = 'myBrand';
 brand.textContent = 'RANSEA';
 nav.appendChild(brand);
 
 const boxMenu = document.createElement('div');
 boxMenu.className = 'boxMenu';
 
 const menuItems = [
  { icon: 'book_5', href: '/p/doc.html' },
  { icon: 'dashboard', href: 'p/beranda.html' },
  { icon: 'volunteer_activism', href: '/p/dukungan.html' }
 ];
 
 menuItems.forEach(item => {
  const link = document.createElement('a');
  link.className = 'btnMenu';
  link.href = item.href;
  
  const span = document.createElement('span');
  span.className = 'material-symbols-outlined iconMenu';
  span.textContent = item.icon;
  
  link.appendChild(span);
  boxMenu.appendChild(link);
 });
 
 nav.appendChild(boxMenu);
 return nav;
}

function init() {
 if (!document.body) {
  document.addEventListener('DOMContentLoaded', () => {
   document.body.appendChild(buildNavigation());
  });
 } else {
  document.body.appendChild(buildNavigation());
 }
}

init();

/* MathJax */
function loadMathJax() {
 const script = document.createElement('script');
 script.id = 'MathJax-script';
 script.async = true;
 script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
 document.head.appendChild(script);
 console.log('MathJax berhasil dimuat!');
}

document.addEventListener('DOMContentLoaded', () => {
 loadGoogleFonts();
 loadMathJax();
}); 
