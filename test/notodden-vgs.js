'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3674,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Notodden vgs returns false from 3960 Stathelle')

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

// Specials ----- Start

// 3801 Bø i Telemark
options.postnummer = 3801
options.gatenavn = 'Flatinvegen'
options.husnummer = 10
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Flatinvegen 10 Gvarv')

options.husnummer = 124
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Flatinvegen 124 Gvarv')

options.postnummer = 3801
options.gatenavn = 'Gvarvvegen'
options.husnummer = 150
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Gvarvvegen 150 Gvarv')

options.husnummer = 334
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Gvarvvegen 334 Gvarv')

// 3810 GVARV
options.postnummer = 3810
options.gatenavn = 'Heivegen'
options.husnummer = 17
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Heivegen 17 Gvarv')

options.husnummer = 196
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Heivegen 196 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Strannavegen'
options.husnummer = 98
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Strannavegen 98 Gvarv')

options.husnummer = 827
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Strannavegen 827 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Myrlandvegen'
options.husnummer = 24
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Myrlandvegen 24 Gvarv')

options.husnummer = 74
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Myrlandvegen 74 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Kåsavegen'
options.husnummer = 7
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Kåsavegen 7 Gvarv')

options.husnummer = 102
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Kåsavegen 102 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Haugenvegen'
options.husnummer = 30
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Haugenvegen 30 Gvarv')

options.husnummer = 45
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Haugenvegen 45 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Sulukollvegen'
options.husnummer = 16
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Sulukollvegen 16 Gvarv')

options.husnummer = 104
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Sulukollvegen 104 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Årnes Brygge'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Årnes Brygge 5 Gvarv')

options.husnummer = 105
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Årnes Brygge 105 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Noradalsvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Noradalsvegen 16 Gvarv')

options.husnummer = 22
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Noradalsvegen 22 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Bøvegen'
options.husnummer = 93
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Bøvegen 93 Gvarv')

options.husnummer = 318
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Bøvegen 318 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Håtveitvegen'
options.husnummer = 124
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Håtveitvegen 124 Gvarv')

options.husnummer = 151
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Håtveitvegen 151 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Østtveitvegen'
options.husnummer = 49
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Østtveitvegen 49 Gvarv')

options.husnummer = 52
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Østtveitvegen 52 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Ødegårdsvegen'
options.husnummer = 17
tap.equal(isTbr(options), true, 'Notodden vgs returns true from Ødegårdsvegen 17 Gvarv')

options.husnummer = 42
tap.equal(isTbr(options), false, 'Notodden vgs returns false from Ødegårdsvegen 42 Gvarv')

// Specials ----- End
