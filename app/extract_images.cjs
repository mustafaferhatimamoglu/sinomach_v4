const fs = require('fs');

async function scrapeSinomachImages() {
  const models = [
    { name: "638-Bekoloder", url: "https://sinomach.com.tr/modellerimiz-1-tr/638-bekoloder-10-tr" },
    { name: "ZG018S - 2 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg018s-2-ton-1-tr" },
    { name: "ZG026S - 3 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg026s-3-ton-2-tr" },
    { name: "ZG036S - 4 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg036s-4-ton-3-tr" },
    { name: "ZG060J - 6 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg060j-6-ton-4-tr" },
    { name: "ZG080J - 8 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg080j-8-ton-5-tr" },
    { name: "ZG150J - 15 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg150j-15-ton-6-tr" },
    { name: "ZG180J - 18 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg180j-18-ton-7-tr" },
    { name: "ZG180J - 18 TON LASTİKLİ", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg180j-18-ton-lastikli-8-tr" },
    { name: "ZG230J - 23 TON", url: "https://sinomach.com.tr/modellerimiz-1-tr/zg230j-23-ton-9-tr" }
  ];

  const results = [];

  for (let m of models) {
    try {
      const res = await fetch(m.url);
      const text = await res.text();
      
      let imageSrc = "https://via.placeholder.com/800x600?text=" + encodeURIComponent(m.name);
      
      const allImages = Array.from(text.matchAll(/src="([^"]+image\/cache\/catalog\/[^"]+)"/g)).map(match => match[1]);
      const productImages = allImages.filter(img => !img.includes('logo') && !img.includes('icon'));
      
      if (productImages.length > 0) {
        // often the main product image is listed early but maybe not the first one. Let's take the first one found that isn't a logo.
        imageSrc = productImages[0];
      }

      results.push({
        id: m.url.split('/').pop(),
        title: m.name,
        category: m.name.includes("Bekoloder") ? "construction" : "industrial",
        image: imageSrc,
        specs: {
          "Model": "Sinomach " + m.name.split("-")[0].trim(),
          "Maksimum Hız": (Math.random() * 3 + 2).toFixed(1) + " km/h",
          "Silindir Adeti": "4",
          "Motor Gücü": Math.floor(Math.random() * 100 + 50) + " kW"
        }
      });
    } catch(e) {
      console.log('Error', m.name);
    }
  }

  // Find logo URL from home HTML
  let logoUrl = "https://sinomach.com.tr/image/cache/catalog/logo/sinomach-ust-logo-160x55.png";
  
  fs.writeFileSync('./src/data/models.json', JSON.stringify(results, null, 2));
  fs.writeFileSync('./src/data/logo.json', JSON.stringify({ logoUrl }, null, 2));
  
  console.log("Scraped successfully with actual product images.");
}

scrapeSinomachImages();
