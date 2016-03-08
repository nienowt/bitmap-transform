'use strict';

const fs = require('fs');

exports.fileRead  = function() {
  fs.readFile(__dirname + '/media/' + process.argv[2], function(err, data){
    if (err) throw err;
    global.eventEmitter.emit('newBitmap', data);
  });
};

var fileWrite = function(fileName, transBitmap) {
  fs.writeFile(fileName, transBitmap, function(err){
    if (err) throw err;
    console.log('File saved to: '+ fileName);
  });
};

eventEmitter.on('write', exports.fileWrite = fileWrite);
