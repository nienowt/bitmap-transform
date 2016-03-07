'use strict';

const newBitmap = function(bitmap) {
  var bitmapData = {};
  bitmapData.bitmap = bitmap;
  if (bitmap) {
    bitmapData.head = bitmap.toString('ascii', 0 ,2);
    bitmapData.size = bitmap.readUInt32LE(2);
    bitmapData.pixelArrayStart = bitmap.readUInt32LE(10);
    bitmapData.paletteColors = bitmap.readUInt32LE(46);
    
    console.log(bitmapData);
    global.eventEmitter.emit('transform', bitmapData);
  }
};

global.eventEmitter.on('newBitmap', exports.newBitmap = newBitmap);
