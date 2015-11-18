# nom-de-guerre
a simple random naming module. more fun than numbered ID's sometimes.
could be extended to use different lists of names...

defaults to returning a `string` of a random place in Québec.

# Usage
```javascript
var nomDeGuerre = require('nom-de-guerre');

nomDeGuerre() // -> will output random place in Canada
```

# Methods
## nomDeGuerre(countryName)
returns a random city name from `countryName` - `string`.
`countryName` defaults to `Canada`.

## nomDeGuerre.getCountries()
returns a list of countries with city data.

## nomDeGuerre.getCountry(countryName)
returns a list of cities from `countryName` if it exists.

## nomDeGuerre.census(countryName)
returns a `census` function that will output unique names from the `countryName`. It will only output the city name once, until all cities are exhausted.

Example:
```javascript
const nomDeGuerre = require('nom-de-guerre');
const census = nomDeGuerre.census('Cuba');

census(); // -> 'Veradero'
census(); // -> 'Havana'
```

# Installation
```bash
npm install nom-de-guerre
```

# License
MIT
