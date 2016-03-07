'use strict';

var transform = function(bitmap){
  var bitmapData = bitmap;
  var first;
  var last;

  if (!bitmapData.paletteColors) {
    first = bitmapData.pixelArrayStart;
    last = bitmapData.bitmap.length;
  } else {
    first = bitmapData.pixelArrayStart - (bitmapData.paletteColors * 4);
    last = bitmapData.pixelArrayStart;
  }

  if (process.argv[3] === 'invert') {
    for (var i = first; i < last; i++) {
      bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
    }
  // } else if (process.argv[3] === 'grayscale') {
  //   var gray = bitmapData.bitmap[i] + bitmapData.bitmap[i+1] + bitmapData.bitmap[i+2] / 3;
  //   for (var i = first; i < last; i+=4) {
  //     bitmapData.bitmap[i] = gray;
  //     bitmapData.bitmap[i + 1] = gray;
  //     bitmapData.bitmap[i + 2] = gray;
  //   }

  } else if (process.argv[3] === 'green') {
    for (var i = first+1; i < last; i+=4) {
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
    global.eventEmitter.emit('write', __dirname + '/media/' + process.argv[3] + '-' + process.argv[2], bitmapData.bitmap);
    console.log('first ',first,'last ', last);
    return bitmapData.bitmap; //for test
  }
};

global.eventEmitter.on('transform', module.exports = transform);
