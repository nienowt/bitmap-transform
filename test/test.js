'use strict';

const expect = require('chai').expect;
const event = require(__dirname + '/../eventControl.js');
const transf = require(__dirname + '/../lib/bitmapTransform.js');


describe('bitmap inversion', function(){
  it('should invert values', function(){
    var testBitmap ={};
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap.pixelArrayStart = 8;
    testBitmap.paletteColors = 2;
    var results = [255,255,255,255,203,223,221,255];

    process.argv[2] = '/lib/media/palette-bitmap.bmp';
    process.argv[3] = 'invert';
    expect(transf(testBitmap)).to.eql(results);
  });
});

describe('bitmap green', function(){
  it('should increase green values', function(){
    var testBitmap ={};
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap.pixelArrayStart = 8;
    testBitmap.paletteColors = 2;
    var results = [0,255,0,0,52,255,34,0];

    process.argv[2] = '/lib/media/palette-bitmap.bmp';
    process.argv[3] = 'green';
    expect(transf(testBitmap)).to.eql(results);
  });
});

describe('bitmap blue', function(){
  it('should increase blue values', function(){
    var testBitmap ={};
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap.pixelArrayStart = 8;
    testBitmap.paletteColors = 2;
    var results = [255,0,0,0,255,32,34,0];

    process.argv[2] = '/lib/media/palette-bitmap.bmp';
    process.argv[3] = 'blue';
    expect(transf(testBitmap)).to.eql(results);
  });
});

describe('bitmap red', function(){
  it('should increase red values', function(){
    var testBitmap ={};
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap.pixelArrayStart = 8;
    testBitmap.paletteColors = 2;
    var results = [0,0,255,0,52,32,255,0];

    process.argv[2] = '/lib/media/palette-bitmap.bmp';
    process.argv[3] = 'red';
    expect(transf(testBitmap)).to.eql(results);
  });
});

// describe('bitmap red', function(){
//   it('should increase blue values', function(){
//     var testBitmap ={};
//     testBitmap.bitmap = [0,0,0,0,52,32,34,0];
//     testBitmap.pixelArrayStart = 8;
//     testBitmap.paletteColors = 2;
//     var results = [255,0,0,0,255,32,34,0];
//
//     process.argv[2] = '/lib/media/palette-bitmap.bmp';
//     process.argv[3] = 'blue';
//     expect(transf(testBitmap)).to.eql(results);
//     });
//   });
