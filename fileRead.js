'use strict';

const fs = require('fs');

exports.fileRead  = function() {
  fs.readFile(__dirname + '/' + process.argv[2], function(err, data){
    if (err) throw error;
    global.eventEmitter.emit('newBitmap', data);
  });
};

exports.fileWrite = function(fileName, transBitmap) {
  fs.writeFile(fileName, transBitmap, function(err){
    if (err) throw err;
    console.log('File saved');
  });
};
