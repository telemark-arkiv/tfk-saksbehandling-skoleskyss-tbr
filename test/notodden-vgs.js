'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3674,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3960 Stathelle')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Notodden vgs returns true from 3803 Bø i Telemark')

options.postnummer = 3750
tap.equal(isTbr(options), false, 'Notodden vgs returns false from 3750 Drangedal')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Notodden vgs returns true from 3830 Ulefoss')

options.postnummer = 3831
tap.equal(isTbr(options), true, 'Notodden vgs returns true from 3831 Ulefoss')

options.postnummer = 3671
tap.equal(isTbr(options), false, 'Notodden vgs returns false from 3671 Notodden')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Notodden vgs returns true from 3729 Skien')

options.postnummer = 3650
tap.equal(isTbr(options), false, 'Notodden vgs returns false from 3650 Tinn i Austbygd')
