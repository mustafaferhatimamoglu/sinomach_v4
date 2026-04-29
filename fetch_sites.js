const http = require('https');
const fs = require('fs');

function fetchAndSave(url, filename) {
  return new Promise((resolve, reject) => {
    http.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        fs.writeFileSync(filename, data);
        resolve();
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function run() {
  await fetchAndSave('https://www.shantuiismakinalari.com/', 'shantui_home.html');
  await fetchAndSave('https://sinomach.com.tr/', 'sinomach_home.html');
  console.log('Done');
}

run();
