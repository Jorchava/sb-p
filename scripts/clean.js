const sh = require('shelljs');
const upath = require('upath');

const destPath = upath.resolve(upath.dirname(__filename), '../../jorchava.github.io');

sh.rm('-rf', `${destPath}/*`)

