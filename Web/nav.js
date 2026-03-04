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
