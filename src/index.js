'use strict';

const CITY_LIST = require('./quebec-data');

/*
* Regular random name generator, will just spit out a random place
* in quebec, but not check if unique.
*/
const nomDeGuerre = () => CITY_LIST[Math.floor(Math.random() * CITY_LIST.length)];

/*
 * returns a `census` function that will output unique names.
 * It will only output the city name once, until all cities are exhausted.
 */
nomDeGuerre.createCensus = () => {
  let censusList = CITY_LIST.slice();

  /*
  * This is what we return, and it has the list in its closure scope, so we
  * can lop off the used names as we go
  */
  const census = () => {
    if (!censusList.length) {
        throw new Error('no more cities');
    }

    const index = Math.floor(Math.random() * censusList.length);
    const random = censusList[index];
    censusList.splice(index, 1);

    return random;
  };

  census.getRemainingCount = () => censusList.length;
  census.getRemainingCities = () => censusList.slice();

  return census;
};

module.exports = nomDeGuerre;
