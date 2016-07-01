'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3850,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Kvitsund vgs returns false from 3960 Stathelle')
