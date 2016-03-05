'use strict';

const event = require('events').EventEmitter;
global.eventEmitter = new event();
const file = require(__dirname + '/fileRead.js');
const transf = require(__dirname + '/bitmapTransform.js');
const data = require(__dirname + '/bitmap-data.js');


file.fileRead();
