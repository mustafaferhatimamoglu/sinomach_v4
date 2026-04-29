const fs = require('fs');

const extract = () => {
  const html = fs.readFileSync('../shantui_home.html', 'utf8');
  const links = Array.from(new Set(Array.from(html.matchAll(/href="([^"]+)"/g)).map(m => m[1])));
  const products = links.filter(l => l.includes('shantuiismakinalari.com/product') || l.includes('kategori'));
  console.log('Shantui links:', products.slice(0, 10));
};

extract();
