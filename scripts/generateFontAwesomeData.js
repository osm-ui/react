require('isomorphic-fetch');
const fs = require('fs');
const mkdirp = require('mkdirp');
const getDirName = require('path').dirname;
const yamljs = require('yamljs');

const version = '5.2.0';
const url = `https://raw.githubusercontent.com/FortAwesome/Font-Awesome/${version}/advanced-options/metadata`;
const iconCategoriesUrl = `${url}/categories.yml`;
const iconsUrl = `${url}/icons.yml`;

const categoryMainIcons = {
  accessibility: 'wheelchair',
  animals: 'crow',
  arrows: 'arrow-right',
  'audio-video': 'microphone-alt',
  automotive: 'car',
  buildings: 'building',
  business: 'file-alt',
  charity: 'hand-holding-heart',
  chat: 'comment',
  chess: 'chess',
  code: 'code',
  communication: 'phone-volume',
  computers: 'desktop',
  currency: 'euro-sign',
  'date-time': 'clock',
  design: 'pencil-ruler',
  editors: 'edit',
  education: 'graduation-cap',
  emoji: 'surprise',
  files: 'folder-open',
  gender: 'venus-mars',
  hands: 'hand-point-right',
  health: 'heartbeat',
  images: 'image',
  interfaces: 'check-circle',
  logistics: 'dolly',
  maps: 'map',
  mathematics: 'superscript',
  medical: 'briefcase-medical',
  moving: 'box-open',
  objects: 'thumbtack',
  'payments-shopping': 'credit-card',
  shapes: 'shapes',
  spinners: 'spinner',
  sports: 'futbol',
  status: 'ban',
  travel: 'plane-departure',
  'users-people': 'child',
  vehicles: 'bus-alt',
  writing: 'pencil-alt'
};

function fetchYaml(url) {
  return fetch(url)
  .then(result => result.text())
  .then(text => yamljs.parse(text))
  .catch(e => console.error(`Error in fetching yaml ${e}`));
}

function fetchFontAwesomeData() {
  const iconCategoriesP = fetchYaml(iconCategoriesUrl)
  .then(categories => {
    const updatedCategories = { ...categories };
    Object.keys(updatedCategories).forEach(key => updatedCategories[key].main = categoryMainIcons[key]);

    return updatedCategories;
  });

  const iconsP = fetchYaml(iconsUrl)
  .then(icons => {
    const newIcons = {};

    Object.keys(icons).forEach(key => {
      const icon = icons[key];

      newIcons[key] = icon.styles;
    });

    return newIcons;
  });

  return Promise.all([iconsP, iconCategoriesP]);
}

function writeFile(path, contents, cb) {
  mkdirp(getDirName(path), function (err) {
    if (err) return cb(err);

    fs.writeFile(path, contents, cb);
  });
}

fetchFontAwesomeData()
.then(([icons, categories]) => {
  writeFile(`${__dirname}/../src/data/icons.json`, JSON.stringify(icons), err => { if(err) console.log(err) });
  writeFile(`${__dirname}/../src/data/categories.json`, JSON.stringify(categories), err => { if(err) console.log(err) });
});

