// install babel hooks in the main process
require('babel-register')({
    ignore: /(processCss\.js|node_modules)/ // regex matching all files used by css-modules-require-hook to process your css files
});
require('./main.js');
