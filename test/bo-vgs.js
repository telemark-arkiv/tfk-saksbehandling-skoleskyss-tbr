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

// 3803
options.postnummer = 3803
options.gatenavn = 'Bakåskollen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bakåskollen 1 Bø i Telemark')

options.husnummer = 14
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bakåskollen 14 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Bakåsvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bakåskollen 2 Bø i Telemark')

options.husnummer = 169
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bakåskollen 169 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Bergestigvegen'
options.husnummer = 6
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bergestigvegen 6 Bø i Telemark')

options.husnummer = 55
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bergestigvegen 55 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Berglandvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bergestigvegen 8 Bø i Telemark')

options.husnummer = 61
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bergestigvegen 61 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Brekkegrendvegen'
options.husnummer = 369
tap.equal(isTbr(options), true, 'Bø vgs returns true from Brekkegrendvegen 369 Bø i Telemark')

options.husnummer = 751
tap.equal(isTbr(options), false, 'Bø vgs returns false from Brekkegrendvegen 751 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Breskelivegen'
options.husnummer = 21
tap.equal(isTbr(options), true, 'Bø vgs returns true from Breskelivegen 21 Bø i Telemark')

options.husnummer = 140
tap.equal(isTbr(options), false, 'Bø vgs returns false from Breskelivegen 140 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Eikavegen'
options.husnummer = 64
tap.equal(isTbr(options), true, 'Bø vgs returns true from Eikavegen 64 Bø i Telemark')

options.husnummer = 65
tap.equal(isTbr(options), false, 'Bø vgs returns false from Eikavegen 65 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Espedalsvegen'
options.husnummer = 22
tap.equal(isTbr(options), true, 'Bø vgs returns true from Espedalsvegen 22 Bø i Telemark')

options.husnummer = 110
tap.equal(isTbr(options), false, 'Bø vgs returns false from Espedalsvegen 110 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Forbergvegen'
options.husnummer = 11
tap.equal(isTbr(options), true, 'Bø vgs returns true from Forbergvegen 11 Bø i Telemark')

options.husnummer = 251
tap.equal(isTbr(options), false, 'Bø vgs returns false from Forbergvegen 251 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Friheimvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Friheimvegen 1 Bø i Telemark')

options.husnummer = 24
tap.equal(isTbr(options), false, 'Bø vgs returns false from Friheimvegen 24 Bø i Telemark')
// Split street Garvikstrondi
options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1143
tap.equal(isTbr(options), true, 'Bø vgs returns true from Garvikstrondi 1143 Bø i Telemark')

options.husnummer = 1194
tap.equal(isTbr(options), false, 'Bø vgs returns false from Garvikstrondi 1194 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1195
tap.equal(isTbr(options), true, 'Bø vgs returns true from Garvikstrondi 1195 Bø i Telemark')

options.husnummer = 1196
tap.equal(isTbr(options), false, 'Bø vgs returns false from Garvikstrondi 1196 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1234
tap.equal(isTbr(options), true, 'Bø vgs returns true from Garvikstrondi 1234 Bø i Telemark')

options.husnummer = 1236
tap.equal(isTbr(options), false, 'Bø vgs returns false from Garvikstrondi 1236 Bø i Telemark')

// End of split street

options.postnummer = 3803
options.gatenavn = 'Garvikvegen'
options.husnummer = 28
tap.equal(isTbr(options), true, 'Bø vgs returns true from Garvikvegen 28 Bø i Telemark')

options.husnummer = 317
tap.equal(isTbr(options), false, 'Bø vgs returns false from Garvikvegen 317 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Gregars veg'
options.husnummer = 40
tap.equal(isTbr(options), true, 'Bø vgs returns true from Gravevegen 40 Bø i Telemark')

options.husnummer = 91
tap.equal(isTbr(options), false, 'Bø vgs returns false from Gravevegen 91 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Jønnebergvegen'
options.husnummer = 15
tap.equal(isTbr(options), true, 'Bø vgs returns true from Jønnebergvegen 15 Bø i Telemark')

options.husnummer = 401
tap.equal(isTbr(options), false, 'Bø vgs returns false from Jønnebergvegen 401 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Lensegravvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Lensegravvegen 1 Bø i Telemark')

options.husnummer = 14
tap.equal(isTbr(options), false, 'Bø vgs returns false from Lensegravvegen 14 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Livegen'
options.husnummer = 14
tap.equal(isTbr(options), true, 'Bø vgs returns true from Livegen 14 Bø i Telemark')

options.husnummer = 371
tap.equal(isTbr(options), false, 'Bø vgs returns false from Livegen 371 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Løvskeidåsen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Livegen 1 Bø i Telemark')

options.husnummer = 25
tap.equal(isTbr(options), false, 'Bø vgs returns false from Livegen 25 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Mastedalvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Bø vgs returns true from Livegen 8 Bø i Telemark')

options.husnummer = 127
tap.equal(isTbr(options), false, 'Bø vgs returns false from Livegen 127 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Midtbøvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Midtbøvegen 1 Bø i Telemark')

options.husnummer = 53
tap.equal(isTbr(options), false, 'Bø vgs returns false from Midtbøvegen 53 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nigardsguto'
options.husnummer = 20
tap.equal(isTbr(options), true, 'Bø vgs returns true from Nigardsguto 20 Bø i Telemark')

options.husnummer = 51
tap.equal(isTbr(options), false, 'Bø vgs returns false from Nigardsguto 51 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbøbakken'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Nordbøbakken 2 Bø i Telemark')

options.husnummer = 13
tap.equal(isTbr(options), false, 'Bø vgs returns false from Nordbøbakken 13 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbølia'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Bø vgs returns true from Nordbølia 2 Bø i Telemark')

options.husnummer = 54
tap.equal(isTbr(options), false, 'Bø vgs returns false from Nordbølia 54 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbøvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Bø vgs returns true from Nordbøvegen 8 Bø i Telemark')

options.husnummer = 192
tap.equal(isTbr(options), false, 'Bø vgs returns false from Nordbøvegen 192 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Rueguto'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Bø vgs returns true from Rueguto 5 Bø i Telemark')

options.husnummer = 108
tap.equal(isTbr(options), false, 'Bø vgs returns false from Rueguto 108 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Sandamoen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Sandamoen 1 Bø i Telemark')

options.husnummer = 7
tap.equal(isTbr(options), false, 'Bø vgs returns false from Sandamoen 7 Bø i Telemark')
// Spilt street Seljordvegen
options.postnummer = 3803
options.gatenavn = 'Seljordvegen'
options.husnummer = 23
tap.equal(isTbr(options), true, 'Bø vgs returns true from Seljordvegen 23 Bø i Telemark')

options.husnummer = 50
tap.equal(isTbr(options), false, 'Bø vgs returns false from Seljordvegen 50 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Seljordvegen'
options.husnummer = 89
tap.equal(isTbr(options), true, 'Bø vgs returns true from Seljordvegen 89 Bø i Telemark')

options.husnummer = 1129
tap.equal(isTbr(options), false, 'Bø vgs returns false from Seljordvegen 1129 Bø i Telemark')
// End of split street
options.postnummer = 3803
options.gatenavn = 'Skoevegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Skoevegen 1 Bø i Telemark')

options.husnummer = 1129
tap.equal(isTbr(options), false, 'Bø vgs returns false from Seljordvegen 1129 Bø i Telemark')
// Spilt street Stavsholtvegen
options.postnummer = 3803
options.gatenavn = 'Stavsholtvegen'
options.husnummer = 20
tap.equal(isTbr(options), true, 'Bø vgs returns true from Stavsholtvegen 20 Bø i Telemark')

options.husnummer = 454
tap.equal(isTbr(options), false, 'Bø vgs returns false from Stavsholtvegen 454 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Stavsholtvegen'
options.husnummer = 535
tap.equal(isTbr(options), true, 'Bø vgs returns true from Stavsholtvegen 535 Bø i Telemark')

options.husnummer = 660
tap.equal(isTbr(options), false, 'Bø vgs returns false from Stavsholtvegen 660 Bø i Telemark')
// End of split street
options.postnummer = 3803
options.gatenavn = 'Sønstebøvegen'
options.husnummer = 21
tap.equal(isTbr(options), true, 'Bø vgs returns true from Sønstebøvegen 21 Bø i Telemark')

options.husnummer = 62
tap.equal(isTbr(options), false, 'Bø vgs returns false from Sønstebøvegen 62 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Sønstigardvegen'
options.husnummer = 6
tap.equal(isTbr(options), true, 'Bø vgs returns true from Sønstigardvegen 6 Bø i Telemark')

options.husnummer = 68
tap.equal(isTbr(options), false, 'Bø vgs returns false from Sønstigardvegen 68 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Torsbergåsen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Bø vgs returns true from Torsbergåsen 1 Bø i Telemark')

options.husnummer = 13
tap.equal(isTbr(options), false, 'Bø vgs returns false from Torsbergåsen 13 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Tveitanvegen'
options.husnummer = 19
tap.equal(isTbr(options), true, 'Bø vgs returns true from Tveitanvegen 19 Bø i Telemark')

options.husnummer = 89
tap.equal(isTbr(options), false, 'Bø vgs returns false from Tveitanvegen 89 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Vollevegen'
options.husnummer = 4
tap.equal(isTbr(options), true, 'Bø vgs returns true from Vollevegen 4 Bø i Telemark')

options.husnummer = 34
tap.equal(isTbr(options), false, 'Bø vgs returns false from Vollevegen 34 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Vreimsida'
options.husnummer = 83
tap.equal(isTbr(options), true, 'Bø vgs returns true from Vreimsida 83 Bø i Telemark')

options.husnummer = 927
tap.equal(isTbr(options), false, 'Bø vgs returns false from Vreimsida 927 Bø i Telemark')

// 3810 GVARV

options.postnummer = 3810
options.gatenavn = 'Heivegen'
options.husnummer = 17
tap.equal(isTbr(options), true, 'Bø vgs returns true from Heivegen 17 Gvarv')

options.husnummer = 196
tap.equal(isTbr(options), false, 'Bø vgs returns false from Heivegen 196 Gvarv')

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
tap.equal(isTbr(options), true, 'Bø vgs returns true from Bøvegen 1 Gvarv')

options.husnummer = 185
tap.equal(isTbr(options), false, 'Bø vgs returns false from Bøvegen 185 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Ødegårdsvegen'
options.husnummer = 3
tap.equal(isTbr(options), true, 'Bø vgs returns true from Ødegårdsvegen 3 Gvarv')

options.husnummer = 42
tap.equal(isTbr(options), false, 'Bø vgs returns false from Ødegårdsvegen 42 Gvarv')
