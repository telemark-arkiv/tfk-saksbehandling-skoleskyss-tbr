# tfk-saksbehandling-skoleskyss-tbr
Node-module for identifying Telemark Bilruter as transporter.

It uses a combination of zipcodes and schoolids.

## Installation
From GitHub

```sh
$ git clone git@github.com:telemark/tfk-saksbehandling-skoleskyss-tbr.git
```

cd into the directory and run the setup script

```sh
$ npm run setup
```

This will install the module dependencies and generate the zipcode files

## Usage
Pass in an options object and get true or false in return.

**postnummer** zipcode, required

**skole** schoolid, required

```javascript

'use strict';

var transportByTbr = require('tfk-saksbehandling-skoleskyss-tbr');
var options = {
  postnummer: 3681,
  skoleid: 3880
};

console.log(transportByTbr(options)); //Returns true

```

The logic is explained in the [docs/rules.md](https://github.com/telemark/tfk-saksbehandling-skoleskyss-tbr/blob/master/docs/rules.md)

The complete list of schoolids is in [lib/data/skoleliste_full.json](https://github.com/telemark/tfk-saksbehandling-skoleskyss-tbr/blob/master/lib/data/skoleliste_full.json)

## Test

```sh
$ npm test
```