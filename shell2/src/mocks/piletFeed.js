const fs = require('fs');
const path = require('path');

const page = {
  source : '../pilet2/dist',
  target: '/assets/pilets/pilet2/v1.0.0',
  spec  : {
    name: 'Pilet 2',
    version: '1.0.0',
    spec: 'v2',
    dependencies: {},
    config: {},
    custom: {},
    requireRef: 'webpackChunkpr_pilet2',
    link: '/assets/pilets/pilet2/v1.0.0/index.js'
  }
};

const pilets = {
  items: [page.spec]
}

const targets = {

}

const headers = {
  'content-type': 'application/json',
};

function returnFile(fileSource, req, res) {
  const file =path.resolve(process.cwd(), fileSource);
  return new Promise((resolve, reject) => {
    fs.readFile(path.resolve(process.cwd(), fileSource), 'utf8', (err, data) => {
      if (err) {
        console.error(err);
        reject(res({
          headers,
          content: err,
        }));
      }
      console.log (data); 
      resolve(res({
        headers,
        content: data,
      }));
    });
  });

}

module.exports = function(_, req, res) {
  try {

    if (req.url === '/api/v1/feed/lms') { 
      return res({
        headers,
        content: JSON.stringify(pilets),
      });
    } else if (req.url.includes(page.target)) {
      let file = req.url.match(/\/[^\/]+$/)[0] || "index.js"
      file = file.split('?')[0];
      return returnFile(page.source + file, req, res)      
    }
  } catch (e) {
    console.log(e);
  }
};
