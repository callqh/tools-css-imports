const cssImports = require('../dist/index').default;
const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.resolve(__dirname, './test1.css'));

console.log(cssImports(code));
