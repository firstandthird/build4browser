#!/usr/bin/env node
'use strict';
const taskKit = require('taskkit');
const path = require('path');
const startCase = require('lodash.startcase');

const libraryPkg = require(path.join(process.cwd(), 'package.json'));

const options = libraryPkg.scriptkit || {};

taskKit({
  name: 'scriptkit',
  version: require('./package.json').version,
  configPaths: [
    path.join(__dirname, 'conf')
  ],
  context: {
    fileName: libraryPkg.name,
    libraryName: startCase(libraryPkg.name).replace(/ /g, '')
  }
});
