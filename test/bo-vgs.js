'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3802,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3960 Stathelle')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3960 Bø i Telemark')

options.postnummer = 3750
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3750 Drangedal')

options.postnummer = 3850
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3850 Kvitseid')

options.postnummer = 3854
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3854 Nissedal')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3830 Ulefoss')

options.postnummer = 3831
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3831 Ulefoss')

options.postnummer = 3672
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3672 Notodden')

options.postnummer = 3805
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3805 Gvarv')

options.postnummer = 3840
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3840 Seljord')

options.postnummer = 3841
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3841 Flatdal')

options.postnummer = 3844
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3844 Åmotsdal')

options.postnummer = 3702
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3702 Skien')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3729 Skien')

options.postnummer = 3652
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3652 Hovin i Telemark')
