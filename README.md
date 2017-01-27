# ScriptKit

Single command line utility to turn an es6/es2016 script with requires/imports into a standalone file for use in browser.  No more dealing with configurations, install and run.

## Features

* Uses babel to turn es2015 code that is compatible with older browsers
* Uses rollup to combine depedencies and remove unneeded code
* Lint your js files using eslint
* Uglify to minify your code
* File watcher to rebuild when files change
* Runs `npm test` after build or when files change
* Support for live reload
* Static file serving (great for example files)
* Configuration all done in package.json (no need for additional config files)

## Install

```sh
npm i -D scriptkit
```

## Setup

(in your package.json)

```json
{
  "scripts": {
    "build": "scriptkit", //run build and then exit
    "dev": "scriptkit dev" //run build and watch for changes
    "prod": "scriptkit --env production" //build and minify
  },
  "scriptkit": {
    "files": {
      "dist/common.js": "src/common.js"
    }
  },
  "eslintConfig": {
    "extends": "firstandthird"
  }
}
```

## Commands

### default

Lint, build and test (`npm test`)

### dev

Lint, build, watch for changes, serve current directory, serve livereload script

### build

Lint and build

### config

Displays the config that is going to be used

### help

Returns all the commands you can run
