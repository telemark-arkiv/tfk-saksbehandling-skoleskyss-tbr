'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3735,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3800 Bø i Telemark')

options.postnummer = 3801
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3801 Bø i Telemark')

options.postnummer = 3802
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3802 Bø i Telemark')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3803 Bø i Telemark')

options.postnummer = 3804
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3804 Bø i Telemark')

options.postnummer = 3750
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3750 Drangedal')

options.postnummer = 3825
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3825 Lunde')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3830 Ulefoss')

options.postnummer = 3671
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3671 Notodden')

options.postnummer = 3810
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3810 Gvarv')

options.postnummer = 3811
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3811 Hørte')

options.postnummer = 3820
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3820 Nordagutu')

options.postnummer = 3805
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3805 Bø i Telemark')

options.postnummer = 3840
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3840 Seljord')

options.postnummer = 3841
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3841 Flatdal')

options.postnummer = 3749
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3749 Siljan')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Skogmo vgs returns true from 3729 Skien')

options.postnummer = 3650
tap.equal(isTbr(options), false, 'Skogmo vgs returns false from 3650 Tinn i Austbygd')
