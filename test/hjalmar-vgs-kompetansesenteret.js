'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3716,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3800 Bø i Telemark')

options.postnummer = 3801
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3801 Bø i Telemark')

options.postnummer = 3802
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3802 Bø i Telemark')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3803 Bø i Telemark')

options.postnummer = 3804
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3804 Bø i Telemark')

options.postnummer = 3750
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3750 Drangedal')

options.postnummer = 3825
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3825 Lunde')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 2830 Ulefoss')

options.postnummer = 3672
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3672 Notodden')

options.postnummer = 3810
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3810 Gvarv')

options.postnummer = 3811
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3811 Hørte')

options.postnummer = 3812
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3812 Akkerhaugen')

options.postnummer = 3805
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3805 Bø i Telemark, Seljord')

options.postnummer = 3840
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3805 Seljord')

options.postnummer = 3841
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3805 Flatdal')

options.postnummer = 3702
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3702 Skien')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Hjalmar-vgs-Kompetansenteret returns true from 3702 Skien')

options.postnummer = 3652
tap.equal(isTbr(options), false, 'Hjalmar-vgs-Kompetansenteret returns false from 3652 Hovin i Telemark')
