'use strict';
  const transform = require(__dirname + '/bitmapTransform.js');

  const newBitmap = function(bitmap) {
  var bitmapData = {};
  bitmapData.bitmap = bitmap;
  if (bitmap) {
    bitmapData.head = bitmap.toString('ascii', 0 ,2);
    bitmapData.size = bitmap.readUInt32LE(2);
    bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
    bitmapData.paletteColors = bitmap.readUInt32LE(46);
    console.log(bitmap[54]);
    console.log(bitmap.length);
    for(var i= 90; i< 100; i++) {
      console.dir('old '+bitmapData.bitmap[i]);
    }
    transform.inversion(bitmapData);
    for(var i= 90; i< 100; i++) {
      console.dir('new '+bitmapData.bitmap[i]);
    }
  }
};

global.eventEmitter.on('newBitmap', exports.newBitmap = newBitmap);
