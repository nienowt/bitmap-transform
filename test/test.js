'use strict';

const expect = require('chai').expect;
const event = require(__dirname + '/../eventControl.js');
const transf = require(__dirname + '/../lib/bitmapTransform.js');

//palette test
var testBitmap = {};
testBitmap.pixelArrayStart = 8;
testBitmap.paletteColors = 2;

//non palette test
var testBitmap2 = {};
testBitmap2.pixelArrayStart = 0;
testBitmap2.paletteColors = 0;


describe('bitmap inversion', function(){
  it('should invert values', function(){
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    var results = [255,255,255,255,203,223,221,255];

    process.argv[2] = '/any.bmp';
    process.argv[3] = 'invert';
    expect(transf(testBitmap)).to.eql(results);
  });
});

describe('bitmap green', function(){
  it('should increase green values', function(){
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap2.bitmap = [0,0,0,0,52,32,34,0];
    var results = [0,255,0,0,52,255,34,0];
    var results2 = [0,255,0,0,255,32,34,255];

    process.argv[2] = '/any.bmp';
    process.argv[3] = 'green';
    expect(transf(testBitmap)).to.eql(results);
    expect(transf(testBitmap2)).to.eql(results2);
  });
});

describe('bitmap blue', function(){
  it('should increase blue values', function(){
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap2.bitmap = [0,0,0,0,52,32,34,0];
    var results = [255,0,0,0,255,32,34,0];
    var results2 = [255,0,0,255,52,32,255,0];

    process.argv[2] = '/any.bmp';
    process.argv[3] = 'blue';
    expect(transf(testBitmap)).to.eql(results);
    expect(transf(testBitmap2)).to.eql(results2);
  });
});

describe('bitmap red', function(){
  it('should increase red values', function(){
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap2.bitmap = [0,0,0,0,52,32,34,0];
    var results = [0,0,255,0,52,32,255,0];
    var results2 = [0,0,255,0,52,255,34,0];

    process.argv[2] = '/any.bmp';
    process.argv[3] = 'red';
    expect(transf(testBitmap)).to.eql(results);
    expect(transf(testBitmap2)).to.eql(results2);
  });
});

describe('bitmap random', function(){
  it('should randomize values', function(){
    testBitmap.bitmap = [0,0,0,0,52,32,34,0];
    testBitmap2.bitmap = [0,0,0,0,52,32,34,0];

    process.argv[2] = '/any.bmp';
    process.argv[3] = 'random';
    expect(transf(testBitmap)).to.not.eql(testBitmap2.bitmap);
    expect(transf(testBitmap2)).to.not.eql(testBitmap.bitmap);
  });
});
