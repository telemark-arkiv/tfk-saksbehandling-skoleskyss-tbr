'use strict'
var transportByTbr = require('./index')
var options = {
  skoleid: 3802,
  postnummer: '3803',
  gatenavn: 'Sønstebøvegen',
  husnummer: 21
}
console.log(options.postnummer)
console.log(options.gatenavn)
console.log(options.husnummer)
console.log(transportByTbr(options))
