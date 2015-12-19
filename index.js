'use strict';

// var DEFAULT_NAMES = require('./data/quebec.json').names;
var NAMES = require('./data/complete.json');

/*
 * Regular random name generator, will just spit out a random place
 * in quebec, but not check if unique.
 */
var nomDeGuerre = module.exports = function (countryName) {
    if (!countryName) countryName = 'Canada';

    var citiesList = NAMES[countryName];

    if (!citiesList.length) {
        throw new Error(countryName + ' does not have a cities list yet...');
    }

    var index = Math.floor( Math.random() * citiesList.length);
    var random = citiesList[index];

    return random;
};

/* Helper function to get the names of all possible countries */
nomDeGuerre.getCountries = function () {
    return Object.keys(NAMES);
};

/* Helper function to get the cities from a country */
nomDeGuerre.getCountry = function (countryName) {
    return NAMES[countryName];
};

/**
 * @param {country} String of country you want to use the cities list of
 * @returns {census} Function that will return a unique city from the cities list selected.
 *                   will output each item only once.
 */
nomDeGuerre.census = function (countryName) {
    if (!countryName) countryName = 'Canada';

    var citiesList = NAMES[countryName];

    if (!citiesList.length) {
        throw new Error(countryName + 'does not have a cities list yet...');
    }

    var censusList = citiesList.slice();

    /*
     * This is what we return, and it has the list in its closure scope, so we
     * can lop off the used names as we go
     */
    function census () {

        if (!censusList.length) {
            throw new Error('No more unique names to choose from!');
        }

        var index = Math.floor( Math.random() * censusList.length);
        var random = censusList[index];

        censusList.splice(index, 1);

        return random;
    }

    return census;
};
