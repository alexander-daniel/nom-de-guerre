'use strict';

var names = require('./names.json').names;

module.exports = randomName;
names.used = {};

function randomName() {
  if ( Object.keys( names.used ).length === names.length - 1) {
    console.log(Object.keys( names.used ).length);
    names.used = {};
  }

  var random = names[ Math.floor( Math.random() * names.length ) ];
  names.used[ random ] = 1;
  return random;
}

