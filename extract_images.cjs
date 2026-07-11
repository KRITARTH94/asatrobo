const fs = require('fs');
const html = fs.readFileSync('asatrobo.html', 'utf-8');

// A crude way to find images and surrounding text
const regex = /<img[^>]+src="([^">]+)"[^>]*alt="([^">]*)"/g;
let match;
while ((match = regex.exec(html)) !== null) {
  let url = match[1];
  let alt = match[2];
  if (url.startsWith('https://static.wixstatic.com/media')) {
    // Some wix urls have format .../media/filename~mv2.jpg/v1/fill/...
    // Let's strip it to the base image
    const baseMatch = url.match(/(https:\/\/static\.wixstatic\.com\/media\/[a-zA-Z0-9_\-.~]+(?:png|jpg|jpeg|webp))/);
    if (baseMatch) {
       console.log(`ALT: "${alt}"\nURL: ${baseMatch[1]}\n`);
    }
  }
}
