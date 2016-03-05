'use strict'

exports.inversion = function(obj) {
  if (obj) {
    var bitmapData = obj;
    for (var i = 54; i<bitmapData.pixelArrayStart; i++) {
      bitmapData.bitmap[i] = 255 - bitmapData.bitmap[i];
    }
  }
}


// global.eventEmitter.on('transform', module.exports = inversion);
