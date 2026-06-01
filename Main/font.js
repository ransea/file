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
 fontLink.href = 'https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&family=Cormorant+Garamond:ital,wght@0,300..700;1,300..700&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Uncial+Antiqua&display=swap';
 document.head.appendChild(fontLink);
 
 const iconLink = document.createElement('link');
 iconLink.rel = 'stylesheet';
 iconLink.href = 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined';
 document.head.appendChild(iconLink);
}
loadGoogleFonts();
