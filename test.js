var mime=require('mime');
var parent=require('./parent');

console.log(mime.getType('/path/to/file.txt'));                 // => 'html'
console.log(mime.getExtension('application/octet-stream'));     // => 'bin'
parent.world();