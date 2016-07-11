'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3840,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3960 Stathelle')

options.postnummer = 3800
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3800 Bø i Telemark')

options.postnummer = 3801
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3801 Bø i Telemark')

options.postnummer = 3802
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3802 Bø i Telemark')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3803 Bø i Telemark')

options.postnummer = 3804
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3804 Bø i Telemark')

options.postnummer = 3750
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3750 Drangedal')

options.postnummer = 3848
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3848 Morgedal')

options.postnummer = 3854
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3854 Nissedal')

options.postnummer = 3825
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3825 Lunde')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3830 Ulefoss')

options.postnummer = 3831
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3831 Ulefoss')

options.postnummer = 3672
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns true from 3825 Notodden')

options.postnummer = 3810
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3810 Gvarv')

options.postnummer = 3811
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3811 Hørte')

options.postnummer = 3812
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3812 Akkerhaugen')

options.postnummer = 3820
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3820 Nordagutu')

options.postnummer = 3834
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3834 Gvarv')

options.postnummer = 3805
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3805 Bø i Telemark')

options.postnummer = 3748
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3748 Siljan')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3729 Skien')

options.postnummer = 3650
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3650 Tinn i Austbygd')

options.postnummer = 3891
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3891 Høydalsmo')

options.postnummer = 3884
tap.equal(isTbr(options), false, 'Vest Telemark vgs, avdelig Seljord  returns false from 3884 Rauland')

options.postnummer = 3890
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3890 Vinje')

options.postnummer = 3893
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3893 Vinjesvingen')

options.postnummer = 3895
tap.equal(isTbr(options), true, 'Vest Telemark vgs, avdelig Seljord  returns true from 3895 Edland')
