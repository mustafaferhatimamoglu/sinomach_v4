const fs = require('fs');
const path = require('path');
const https = require('https');

const modelsFile = path.join('c:', 'Users', 'TOKGOZ', 'Downloads', 'sinomach-main', 'sinomach-main', 'app', 'src', 'data', 'models.json');
const logoFile = path.join('c:', 'Users', 'TOKGOZ', 'Downloads', 'sinomach-main', 'sinomach-main', 'app', 'src', 'data', 'logo.json');
const publicDir = path.join('c:', 'Users', 'TOKGOZ', 'Downloads', 'sinomach-main', 'sinomach-main', 'app', 'public');
const modelsImagesDir = path.join(publicDir, 'images', 'models');

const download = (url, dest) => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to get '${url}' (status code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close(resolve);
      });
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
};

async function run() {
  // 1. Download Logo
  const logoData = JSON.parse(fs.readFileSync(logoFile, 'utf8'));
  const logoDest = path.join(publicDir, 'logo.png');
  console.log(`Downloading logo: ${logoData.logoUrl} -> ${logoDest}`);
  await download(logoData.logoUrl, logoDest);
  logoData.logoUrl = '/logo.png';
  fs.writeFileSync(logoFile, JSON.stringify(logoData, null, 2));

  // 2. Download Models
  const modelsData = JSON.parse(fs.readFileSync(modelsFile, 'utf8'));
  for (const model of modelsData) {
    const ext = path.extname(new URL(model.image).pathname) || '.jpeg';
    const filename = `${model.id}${ext}`;
    const dest = path.join(modelsImagesDir, filename);
    console.log(`Downloading model image: ${model.image} -> ${dest}`);
    try {
      await download(model.image, dest);
      model.image = `/images/models/${filename}`;
    } catch (err) {
      console.error(`Failed to download ${model.image}: ${err.message}`);
    }
  }
  fs.writeFileSync(modelsFile, JSON.stringify(modelsData, null, 2));
  
  console.log('All downloads and updates complete.');
}

run().catch(console.error);
