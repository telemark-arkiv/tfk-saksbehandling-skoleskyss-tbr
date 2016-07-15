'use strict'
var transportByFara = require('./index')
var options = {
  skoleid: 3840,
  postnummer: '3810',
  gatenavn: 'Heivegen',
  husnummer: 17
}
console.log(options.postnummer)
console.log(options.gatenavn)
console.log(options.husnummer)
console.log(transportByFara(options))
