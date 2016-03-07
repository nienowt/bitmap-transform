'use strict';

const expect = require('chai').expect;
var arg ='palette-bitmap.bmp';
process.argv[2] = arg;
const event = require(__dirname + '/../eventControl.js');
const transf = require(__dirname + '/../lib/bitmapTransform.js');
const data = require(__dirname + '/../lib/bitmap-data.js');
const file = require(__dirname + '/../lib/fileRead.js');

// console.log(data.newBitmap('/../lib/media/pallette-bitmap.bmp'));
describe('bitmap inversion', function(){
  it('should invert bitmap palette values', function(done){
    process.nextTick(function() {
      var result = file.fileRead();

      expect(result).to.eql(true);
      done();
    });
  });
});
