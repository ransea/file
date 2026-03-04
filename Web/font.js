// Font
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
 fontLink.href = 'https://fonts.googleapis.com/css2?family=Audiowide&family=Electrolize&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Merriweather:ital,opsz,wght@0,18..144,300..900;1,18..144,300..900&family=Monda:wght@400..700&family=Orbitron:wght@400..900&family=Oxanium:wght@200..800&family=Tomorrow:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap';
 document.head.appendChild(fontLink);
 
 const iconLink = document.createElement('link');
 iconLink.rel = 'stylesheet';
 iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
 document.head.appendChild(iconLink);
}

document.addEventListener('DOMContentLoaded', loadGoogleFonts); 
