const test = require('tape');
const NDG = require('./src/index');

test('it should output a random city', (t) => {
  t.ok(NDG());
  t.end();
});

test('it should create a census list and exhaust it', (t) => {
  const census = NDG.createCensus();
  const totalCities = census.getRemainingCount();

  for (let i = 0; i < totalCities; i++) {
    census();
  }

  t.equal(census.getRemainingCount(), 0);
  t.end();
});

test('census should not reuse a city twice', (t) => {
  const census = NDG.createCensus();
  const totalCities = census.getRemainingCount();
  const usedCities = [];
  for (let i = 0; i < totalCities - 100; i++) {
    usedCities.push(census());
  }

  const remainingCities = census.getRemainingCities();
  usedCities.forEach((cityName) => {
    if (remainingCities.indexOf(cityName) >= 0) {
      t.fail(`${cityName} is in used and remainging cities.`);
    }
  });

  t.end();
})
