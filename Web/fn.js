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
 fontLink.href = 'https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&family=Audiowide&family=Beau+Rivage&family=Electrolize&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Monda:wght@400..700&family=Orbitron:wght@400..900&family=Oxanium:wght@200..800&family=Roboto:ital,wght@0,100..900;1,100..900&family=Rubik:ital,wght@0,300..900;1,300..900&family=Fira+Code:wght@300..700&display=swap';
 document.head.appendChild(fontLink);
 
 
 const iconLink = document.createElement('link');
 iconLink.rel = 'stylesheet';
 iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
 document.head.appendChild(iconLink);
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
  { icon: 'book_5', href: 'https://www.ransea.online/2026/03/Doc.html' },
  { icon: 'dashboard', href: 'https://www.ransea.online/2026/03/Beranda.html' },
  { icon: 'volunteer_activism', href: 'https://www.ransea.online/2026/03/Dukungan.html' }
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
}

document.addEventListener('DOMContentLoaded', () => {
 loadGoogleFonts();
 loadMathJax();
});

function wrapXFormula() {
  const formulas = document.querySelectorAll('.xFormula');
  formulas.forEach(el => {
    let rawContent = el.textContent.trim();
    if (rawContent) {
      el.textContent = `$$${rawContent}$$`;
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  wrapXFormula();
  if (window.MathJax) {
    MathJax.typesetPromise();
  }
});
