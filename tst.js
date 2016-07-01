'use strict'
var transportByTbr = require('./index')
var options = {
  skoleid: 3674,
  postnummer: '3810',
  gatenavn: 'Ødegårdsvegen',
  husnummer: 16
}
console.log(options.postnummer)
console.log(options.gatenavn)
console.log(options.husnummer)
console.log(transportByTbr(options))
