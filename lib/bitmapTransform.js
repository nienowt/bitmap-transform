'use strict';

// var transform = {};
//
//
// transform.inversion = function(bitmap) {
//   if (bitmap) {
//     var bitmapData = bitmap;
//     for (var i = 54; i<bitmapData.pixelArrayStart; i++) {
//       bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
//     }
//   }
//   global.eventEmitter.emit('write', __dirname + '/media/inverted.bmp', bitmapData.bitmap);
// };
//
// transform.grayscale = function(bitmap){
//   if (bitmap) {
//     var bitmapData = bitmap;
//     if (bitmapData.pixelArrayStart != 54) {
//       for (var i = 54; i<bitmapData.pixelArrayStart; i++) {
//         if (bitmapData.bitmap[i] * 2 < 255) {
//           bitmapData.bitmap[i] = bitmapData.bitmap[i] * 2;
//         }
//       }
//     } else {
//       for (var i = bitmapData.pixelArrayStart; i<bitmapData.bitmap.length; i++) {
//         if (bitmapData.bitmap[i] * 2 < 255) {
//           bitmapData.bitmap[i] = bitmapData.bitmap[i] * 2;
//         }
//       }
//     }
//   }
//   global.eventEmitter.emit('write',__dirname + '/media/gray.bmp', bitmapData.bitmap);
// };
//
// transform.increaseGreen = function(bitmap){
//   if (bitmap) {
//     var bitmapData = bitmap;
//     for (var i = 55; i<bitmapData.pixelArrayStart; i+=4) {
//       if (bitmapData.bitmap[i] + 80  < 255) {
//         bitmapData.bitmap[i] = bitmapData.bitmap[i] + 80;
//       }
//     }
//   }
//   global.eventEmitter.emit('write', __dirname + '/media/green.bmp', bitmapData.bitmap);
// };

var transform = function(bitmap){
  var bitmapData = bitmap;
  if ((process.argv[3] === 'invert') && (bitmap)){
      for (var i = 54; i<bitmapData.pixelArrayStart; i++) {
        bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
      }
    global.eventEmitter.emit('write', __dirname + '/media/inverted.bmp', bitmapData.bitmap);
  } else if ((process.argv[3] === 'grayscale') && (bitmap)) {
    if (bitmapData.pixelArrayStart != 54) {
      for (var i = 54; i<bitmapData.pixelArrayStart; i++) {
        if (bitmapData.bitmap[i] * 2 < 255) {
          bitmapData.bitmap[i] = bitmapData.bitmap[i] * 2;
        }
      }
    } else {
      for (var i = bitmapData.pixelArrayStart; i<bitmapData.bitmap.length; i++) {
        if (bitmapData.bitmap[i] * 2 < 255) {
          bitmapData.bitmap[i] = bitmapData.bitmap[i] * 2;
        }
      }
    }
    global.eventEmitter.emit('write',__dirname + '/media/gray.bmp', bitmapData.bitmap);
  } else if ((process.argv[3] === 'green') && (bitmap)) {
    for (var i = 55; i<bitmapData.pixelArrayStart; i+=4) {
      if (bitmapData.bitmap[i] + 80  < 255) {
        bitmapData.bitmap[i] = bitmapData.bitmap[i] + 80;
      }
    }
    global.eventEmitter.emit('write', __dirname + '/media/green.bmp', bitmapData.bitmap);
    }
};

global.eventEmitter.on('transform', module.exports = transform);
