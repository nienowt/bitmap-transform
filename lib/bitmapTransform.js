'use strict';

var transform = function(bitmap){
  var bitmapData = bitmap;
  var first;
  var last;
  if (!bitmapData.paletteColors) {
    first = bitmapData.pixelArrayStart;
    last = bitmapData.bitmap.length;
  } else {
    first = 54;
    last = bitmapData.pixelArrayStart;
  }

  if (process.argv[3] === 'invert') {
    for (var i = first; i < last; i++) {
      bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
    }
    global.eventEmitter.emit('write', __dirname + '/media/inverted-' + process.argv[2], bitmapData.bitmap);

  } else if (process.argv[3] === 'grayscale') {
    for (var i = first; i < last; i++) {
      if (bitmapData.bitmap[i] * 2 < 255) {
        bitmapData.bitmap[i] = bitmapData.bitmap[i] * 2;
      }
    }
    global.eventEmitter.emit('write',__dirname + '/media/gray-' + process.argv[2], bitmapData.bitmap);

  } else if (process.argv[3] === 'green') {
    for (var i = first; i < last; i+=4) {
      if (bitmapData.bitmap[i] * 3  < 255) {
        bitmapData.bitmap[i] = bitmapData.bitmap[i] * 3;
      }
    }
    global.eventEmitter.emit('write', __dirname + '/media/green-' + process.argv[2], bitmapData.bitmap);
  }
};

global.eventEmitter.on('transform', module.exports = transform);
