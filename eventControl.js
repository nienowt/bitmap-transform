#!/usr/bin/env node
'use strict';

const event = require('events').EventEmitter;
global.eventEmitter = new event();
const file = require(__dirname + '/lib/fileRead.js');
const transf = require(__dirname + '/lib/bitmapTransform.js');
const data = require(__dirname + '/lib/bitmap-data.js');


file.fileRead();
