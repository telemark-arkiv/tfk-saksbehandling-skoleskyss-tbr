'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3660,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Rjukan vgs returns false from 3960 Stathelle')
