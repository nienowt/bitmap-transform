'use strict';

var transform = function(bitmap){
  var bitmapData = bitmap;
  var first;
  var last;
  var incr;

  if (!bitmapData.paletteColors) {
    first = bitmapData.pixelArrayStart;
    last = bitmapData.bitmap.length;
    incr = 3;
  } else {
    first = bitmapData.pixelArrayStart - (bitmapData.paletteColors * 4);
    last = bitmapData.pixelArrayStart;
    incr = 4;
  }

  if (process.argv[3] === 'invert') {
    for (var i = first; i < last; i++) {
      bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
    }

  } else if (process.argv[3] === 'green') {
    for (var i = first + 1; i < last; i+=incr) {
      bitmapData.bitmap[i] = 255;
    }

  } else if (process.argv[3] === 'blue') {
    for (var i = first; i < last; i+=incr) {
      bitmapData.bitmap[i] = 255;
    }

  } else if (process.argv[3] === 'red') {
    for (var i = first + 2; i < last; i+=incr) {
      bitmapData.bitmap[i] = 255;
    }

  } else if (process.argv[3] === 'random'){
    for (var i = first; i < last; i++) {
      if (bitmapData.bitmap[i] * 2  < 255) {
        bitmapData.bitmap[i] = Math.floor(Math.random() * (255));
      }
    }

  } else {
    console.log('eya, try again');
  }

  if ((process.argv[2]) && (process.argv[3])) {
    eventEmitter.emit('write', __dirname + '/media/' + process.argv[3] + '-' + process.argv[2], bitmapData.bitmap);
    return bitmapData.bitmap; //for test
  }
};

eventEmitter.on('transform', module.exports = transform);
