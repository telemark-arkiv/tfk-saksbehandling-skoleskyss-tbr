'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3802,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Bø vgs returns false from 3960 Stathelle')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Bø vgs returns true from 3803 Bø i Telemark')

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

// Specials ----- Start
options.postnummer = 3810
options.gatenavn = 'Heivegen'
options.husnummer = 17
tap.equal(isTbr(options), true, 'Bø vgs returns true from Heivegen 17 Gvarv')

options.husnummer = 16
tap.equal(isTbr(options), false, 'Bø vgs returns false from Heivegen 16 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Strannavegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Strannavegen 1 Gvarv')

options.husnummer = 827
tap.equal(isTbr(options), false, 'Bø vgs returns false from Strannavegen 827 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Myrlandvegen'
options.husnummer = 24
tap.equal(isTbr(options), true, 'Bø vgs returns true from Myrlandvegen 24 Gvarv')

options.husnummer = 74
tap.equal(isTbr(options), false, 'Bø vgs returns false from Myrlandvegen 74 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Kåsavegen'
options.husnummer = 7
tap.equal(isTbr(options), true, 'Bø vgs returns true from Kåsavegen 7 Gvarv')

options.husnummer = 102
tap.equal(isTbr(options), false, 'Bø vgs returns false from Kåsavegen 102 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Haugenvegen'
options.husnummer = 30
tap.equal(isTbr(options), true, 'Bø vgs returns true from Haugenvegen 30 Gvarv')

options.husnummer = 45
tap.equal(isTbr(options), false, 'Bø vgs returns false from Haugenvegen 45 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Sulukollvegen'
options.husnummer = 16
tap.equal(isTbr(options), true, 'Bø vgs returns true from Haugenvegen 16 Gvarv')

options.husnummer = 104
tap.equal(isTbr(options), false, 'Bø vgs returns false from Haugenvegen 104 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Årnes Brygge'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Bø vgs returns true from Årnes Brygge 5 Gvarv')

options.husnummer = 105
tap.equal(isTbr(options), false, 'Bø vgs returns false from Årnes Brygge 105 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Noradalsvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Noradalsvegen 1 Gvarv')

options.husnummer = 22
tap.equal(isTbr(options), false, 'Bø vgs returns false from Noradalsvegen 22 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Kåsinvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Kåsinvegen 1 Gvarv')

options.husnummer = 21
tap.equal(isTbr(options), false, 'Bø vgs returns false from Kåsinvegen 21 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Sjøbuhaugen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Sjøbuhaugen 2 Gvarv')

options.husnummer = 21
tap.equal(isTbr(options), false, 'Bø vgs returns false from Sjøbuhaugen 21 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Oredalen'
options.husnummer = 10
tap.equal(isTbr(options), true, 'Bø vgs returns true from Oredalen 10 Gvarv')

options.husnummer = 16
tap.equal(isTbr(options), false, 'Bø vgs returns false from Oredalen 16 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Hetterudvegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Bø vgs returns true from Hetterudvegen 5 Gvarv')

options.husnummer = 103
tap.equal(isTbr(options), false, 'Bø vgs returns false from Hetterudvegen 103 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Åsvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Åsvegen 2 Gvarv')

options.husnummer = 54
tap.equal(isTbr(options), false, 'Bø vgs returns false from Åsvegen 54 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Håtveitvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Håtveitvegen 1 Gvarv')

options.husnummer = 151
tap.equal(isTbr(options), false, 'Bø vgs returns false from Håtveitvegen 151 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Østtveitvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Østtveitvegen 1 Gvarv')

options.husnummer = 52
tap.equal(isTbr(options), false, 'Bø vgs returns false from Østtveitvegen 52 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Grannevegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Bø vgs returns true from Grannevegen 5 Gvarv')

options.husnummer = 31
tap.equal(isTbr(options), false, 'Bø vgs returns false from Grannevegen 31 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Juvevegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Juvevegen 2 Gvarv')

options.husnummer = 12
tap.equal(isTbr(options), false, 'Bø vgs returns false from Juvevegen 12 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Bøvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bøvegen 184 Gvarv')

options.husnummer = 185
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bøvegen 185 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Ødegårdsvegen'
options.husnummer = 3
tap.equal(isTbr(options), true, 'Bø vgs returns true from Ødegårdsvegen 3 Gvarv')

options.husnummer = 42
tap.equal(isTbr(options), false, 'Bø vgs returns false from Ødegårdsvegen 42 Gvarv')
