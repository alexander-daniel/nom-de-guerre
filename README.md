# nom-de-guerre
a simple random naming module. more fun than numbered ID's sometimes.

# Usage
```javascript
var nomDeGuerre = require('nom-de-guerre');

nomDeGuerre() // -> will output random place in Québec
```

# Methods
## nomDeGuerre()
returns a random city name from Québec

## nomDeGuerre.createCensus()
returns a `census` function that will output unique names. It will only output the city name once, until all cities are exhausted.

Example:
```javascript
const nomDeGuerre = require('nom-de-guerre');
const census = nomDeGuerre.createCensus();

census(); // -> 'Montreal'
census(); // -> 'Pointe-Claire'
```

# Installation
```bash
npm install nom-de-guerre
// or
yarn add nom-de-guerre
```

# License
MIT
