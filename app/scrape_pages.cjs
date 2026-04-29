const fs = require('fs');

async function extractPage(url, key) {
    try {
        const res = await fetch(url);
        const text = await res.text();
        
        let content = "İçerik bulunamadı.";
        
        // Journal3 text block usually has 'journal-content' or similar. 
        // For simple extraction, let's just strip HTML tags. This is just for demonstration or we can preserve HTML.
        const match = text.match(/<div class="journal-content-article">([\s\S]*?)<\/div>/) || text.match(/<div class="col-sm-12">([\s\S]*?)<\/div>/);
        if (match) {
            content = match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
        }
        
        return { key, content };
    } catch(e) {
        return { key, content: "Hata oluştu." };
    }
}

async function run() {
    const pages = [
        { key: "faq", url: "https://sinomach.com.tr/soru-amp-cevap-8-tr" },
        { key: "privacy", url: "https://sinomach.com.tr/gizlilik-politikasi-3-tr" }
    ];
    
    const results = {};
    for (let p of pages) {
        let data = await extractPage(p.url, p.key);
        results[p.key] = data.content;
    }
    
    console.log(JSON.stringify(results, null, 2));
}

run();
