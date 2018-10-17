#!/usr/bin/env node

const main = require('taskkit');
const path = require('path');
const startCase = require('lodash.startcase');

process.env.TASKKIT_PREFIX = 'scriptkit';
process.env.TASKKIT_BASECONFIG = path.join(__dirname, 'conf');
process.env.TASKKIT_CKDIR = __dirname;
const libraryPkg = require(path.join(process.cwd(), 'package.json'));
process.env.TASKKIT_LIBNAME = startCase(libraryPkg.name).replace(/ /g, '');

const task = process.argv[2] || 'default';

const run = async function() {
  try {
    await main(task);
  } catch (e) {
    console.log(e);
    process.exit(1);
  }
};

run();
