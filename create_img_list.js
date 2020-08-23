const fs = require('fs');
const path = require('path');

const IMG_PATH = './img'
const files = fs.readdirSync(IMG_PATH);

let elements = [];
files.forEach(x => {
  if (['.mp4'].includes(path.extname(x))) {
    elements.push(`<video src="${path.posix.join(IMG_PATH, x)}"></video>`);
  }
  else {
    elements.push(`<img src="${path.posix.join(IMG_PATH, x)}">`);
  }
});

const mainjs = `function init() {
  elements = ${"[" + elements.map(x => `'${x}'`) + "]"};
  elements.sort(() => Math.round(Math.random())-0.5);
  const maindiv = document.getElementById('main');
  elements.forEach(x => {
    maindiv.innerHTML += x + '\\n';
  });
}
init();`;

fs.writeFileSync('main.js', mainjs);