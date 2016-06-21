'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 39601,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Bamble Grasmyr returns false from 3960 Stathelle')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Bamble Grasmyr returns true from 3830 Ulefoss')

options.postnummer = 3672
tap.equal(isTbr(options), false, 'Bamble Grasmyr returns false from 3672 Notodden')

options.postnummer = 3810
tap.equal(isTbr(options), true, 'Bamble Grasmyr returns true from 3810 Gvarv')

options.postnummer = 3805
tap.equal(isTbr(options), false, 'Bamble Grasmyr returns false from 3805 Bø')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Bamble Grasmyr returns true from 3729 Skien')

options.postnummer = 3652
tap.equal(isTbr(options), false, 'Bamble Grasmyr returns false from 3652 Hovin i Telemark')
