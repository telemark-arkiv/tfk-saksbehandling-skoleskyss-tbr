'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3825,
  postnummer: '',
  gatenavn: 'Djevelgaten',
  husnummer: '666'
}

options.postnummer = 3960
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3960 Stathelle')

options.postnummer = 3961
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3961 Stathelle')

options.postnummer = 3962
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3962 Stathelle')

options.postnummer = 3965
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3965 Stathelle')

options.postnummer = 3966
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3966 Stathelle')

options.postnummer = 3970
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3970 Langesund')

options.postnummer = 3993
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3993 Langesund')

options.postnummer = 3994
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3994 Langesund')

options.postnummer = 3995
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3995 Stathelle')

options.postnummer = 3801
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3801 Bø i Telemark')

options.postnummer = 3885
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3885 Fyresdal')

options.postnummer = 3836
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3836 Kviteseid')

options.postnummer = 3848
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3848 Morgedal')

options.postnummer = 3849
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3849 Vråliosen')

options.postnummer = 3850
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3850 Kviteseid')

options.postnummer = 3853
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3853 Vråldal')

options.postnummer = 3855
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3855 Treungen')

// Porsgrunn
options.postnummer = 3901
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3901 Porsgrunn')

options.postnummer = 3902
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3902 Porsgrunn')

options.postnummer = 3903
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3903 Porsgrunn')

options.postnummer = 3904
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3904 Porsgrunn')

options.postnummer = 3905
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3905 Porsgrunn')

options.postnummer = 3906
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3906 Porsgrunn')

options.postnummer = 3910
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3910 Porsgrunn')

options.postnummer = 3911
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3911 Porsgrunn')

options.postnummer = 3912
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3912 Porsgrunn')

options.postnummer = 3913
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3913 Porsgrunn')

options.postnummer = 3914
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3914 Porsgrunn')

options.postnummer = 3915
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3915 Porsgrunn')

options.postnummer = 3916
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3916 Porsgrunn')

options.postnummer = 3917
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3917 Porsgrunn')

options.postnummer = 3918
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3918 Porsgrunn')

options.postnummer = 3919
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3919 Porsgrunn')

options.postnummer = 3920
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3920 Porsgrunn')

options.postnummer = 3921
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3921 Porsgrunn')

options.postnummer = 3922
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3922 Porsgrunn')

options.postnummer = 3924
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3924 Porsgrunn')

options.postnummer = 3925
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3925 Porsgrunn')

options.postnummer = 3928
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3928 Porsgrunn')

options.postnummer = 3929
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3929 Porsgrunn')

options.postnummer = 3930
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3930 Porsgrunn')

options.postnummer = 3931
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3931 Porsgrunn')

options.postnummer = 3933
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3933 Porsgrunn')

options.postnummer = 3936
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3936 Porsgrunn')

options.postnummer = 3937
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3937 Porsgrunn')

options.postnummer = 3939
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3939 Porsgrunn')

options.postnummer = 3940
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3940 Porsgrunn')

options.postnummer = 3941
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3941 Porsgrunn')

options.postnummer = 3942
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3942 Porsgrunn')

options.postnummer = 3943
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3943 Porsgrunn')

options.postnummer = 3944
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3944 Porsgrunn')

options.postnummer = 3946
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3946 Porsgrunn')

options.postnummer = 3947
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3947 Porsgrunn')

options.postnummer = 3948
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3948 Porsgrunn')

options.postnummer = 3949
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3949 Porsgrunn')

options.postnummer = 3950
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3950 Brevik')

options.postnummer = 3991
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3991 Brevik')

options.postnummer = 3996
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3996 Porsgrunn')

options.postnummer = 3997
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3997 Porsgrunn')

options.postnummer = 3998
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3998 Porsgrunn')
// End of Porsgrunn

options.postnummer = 3810
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3810 Gvarv')

options.postnummer = 3805
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3805 Bø i Telemark')

options.postnummer = 3835
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3835 Seljord')

options.postnummer = 3840
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3840 Seljord')

options.postnummer = 3841
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3841 Flatdal')

options.postnummer = 3844
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3844 Åmotsdal')

options.postnummer = 3748
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3748 Siljan')

options.postnummer = 3749
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3749 Siljan')
// Skien
options.postnummer = 3701
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3701 Skien')

options.postnummer = 3702
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3702 Skien')

options.postnummer = 3703
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3703 Skien')

options.postnummer = 3704
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3704 Skien')

options.postnummer = 3705
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3705 Skien')

options.postnummer = 3707
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3707 Skien')

options.postnummer = 3710
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3710 Skien')

options.postnummer = 3711
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3711 Skien')

options.postnummer = 3712
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3712 Skien')

options.postnummer = 3713
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3713 Skien')

options.postnummer = 3714
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3714 Skien')

options.postnummer = 3715
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3715 Skien')

options.postnummer = 3716
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3716 Skien')

options.postnummer = 3717
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3717 Skien')

options.postnummer = 3718
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3718 Skien')

options.postnummer = 3719
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3719 Skien')

options.postnummer = 3720
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3720 Skien')

options.postnummer = 3721
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3721 Skien')

options.postnummer = 3722
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3722 Skien')

options.postnummer = 3723
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3723 Skien')

options.postnummer = 3724
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3724 Skien')

options.postnummer = 3725
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3725 Skien')

options.postnummer = 3726
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3726 Skien')

options.postnummer = 3727
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3727 Skien')

options.postnummer = 3728
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3728 Skien')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3729 Skien')

options.postnummer = 3730
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3730 Skien')

options.postnummer = 3731
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3731 Skien')

options.postnummer = 3732
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3732 Skien')

options.postnummer = 3733
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3733 Skien')

options.postnummer = 3734
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3734 Skien')

options.postnummer = 3735
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3735 Skien')

options.postnummer = 3736
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3736 Skien')

options.postnummer = 3737
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3737 Skien')

options.postnummer = 3738
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3738 Skien')

options.postnummer = 3739
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3739 Skien')

options.postnummer = 3740
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3740 Skien')

options.postnummer = 3741
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3741 Skien')

options.postnummer = 3742
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3742 Skien')

options.postnummer = 3743
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3743 Skien')

options.postnummer = 3744
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3744 Skien')

options.postnummer = 3746
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3746 Skien')

options.postnummer = 3747
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3747 Skien')

options.postnummer = 3785
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3785 Skien')

options.postnummer = 3787
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3787 Skien')

options.postnummer = 3792
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3792 Skien')

options.postnummer = 3796
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3796 Skien')

options.postnummer = 3798
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3798 Skien')

options.postnummer = 3799
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from 3799 Skien')
// End of Skien

options.postnummer = 3652
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from 3652 Hovin i Telemark')

// Specials ----- Start

// 3803
options.postnummer = 3803
options.gatenavn = 'Bakåskollen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Bakåskollen 1 Bø i Telemark')

options.husnummer = 14
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Bakåskollen 14 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Bakåsvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Bakåskollen 2 Bø i Telemark')

options.husnummer = 169
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Bakåskollen 169 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Bergestigvegen'
options.husnummer = 6
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Bergestigvegen 6 Bø i Telemark')

options.husnummer = 55
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Bergestigvegen 55 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Berglandvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Bergestigvegen 8 Bø i Telemark')

options.husnummer = 61
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Bergestigvegen 61 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Brekkegrendvegen'
options.husnummer = 369
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Brekkegrendvegen 369 Bø i Telemark')

options.husnummer = 751
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Brekkegrendvegen 751 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Breskelivegen'
options.husnummer = 21
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Breskelivegen 21 Bø i Telemark')

options.husnummer = 140
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Breskelivegen 140 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Eikavegen'
options.husnummer = 64
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Eikavegen 21 Bø i Telemark')

options.husnummer = 65
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Eikavegen 65 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Espedalsvegen'
options.husnummer = 22
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Espedalsvegen 22 Bø i Telemark')

options.husnummer = 110
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Espedalsvegen 110 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Forbergvegen'
options.husnummer = 11
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Forbergvegen 11 Bø i Telemark')

options.husnummer = 251
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Forbergvegen 251 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Friheimvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Friheimvegen 1 Bø i Telemark')

options.husnummer = 24
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Friheimvegen 24 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1143
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Garvikstrondi 1143 Bø i Telemark')

options.husnummer = 1194
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Garvikstrondi 1194 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1195
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Garvikstrondi 1195 Bø i Telemark')

options.husnummer = 1196
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Garvikstrondi 1196 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikstrondi'
options.husnummer = 1234
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Garvikstrondi 1234 Bø i Telemark')

options.husnummer = 1236
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Garvikstrondi 1236 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Garvikvegen'
options.husnummer = 28
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Garvikvegen 28 Bø i Telemark')

options.husnummer = 317
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Garvikvegen 317 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Gregars veg'
options.husnummer = 40
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Gravevegen 40 Bø i Telemark')

options.husnummer = 91
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Gravevegen 91 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Jønnebergvegen'
options.husnummer = 15
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Jønnebergvegen 15 Bø i Telemark')

options.husnummer = 401
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Jønnebergvegen 401 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Lensegravvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Lensegravvegen 1 Bø i Telemark')

options.husnummer = 14
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Lensegravvegen 14 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Livegen'
options.husnummer = 14
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Livegen 14 Bø i Telemark')

options.husnummer = 371
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Livegen 371 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Løvskeidåsen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Livegen 1 Bø i Telemark')

options.husnummer = 25
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Livegen 25 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Mastedalvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Livegen 8 Bø i Telemark')

options.husnummer = 127
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Livegen 127 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Midtbøvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Midtbøvegen 1 Bø i Telemark')

options.husnummer = 53
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Midtbøvegen 53 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nigardsguto'
options.husnummer = 20
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Nigardsguto 20 Bø i Telemark')

options.husnummer = 51
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Nigardsguto 51 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbøbakken'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Nordbøbakken 2 Bø i Telemark')

options.husnummer = 13
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Nordbøbakken 13 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbølia'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Nordbølia 2 Bø i Telemark')

options.husnummer = 54
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Nordbølia 54 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Nordbøvegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Nordbøvegen 8 Bø i Telemark')

options.husnummer = 192
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Nordbøvegen 192 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Rueguto'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Rueguto 5 Bø i Telemark')

options.husnummer = 108
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Rueguto 108 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Sandamoen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sandamoen 1 Bø i Telemark')

options.husnummer = 7
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sandamoen 7 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Seljordvegen'
options.husnummer = 23
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Seljordvegen 23 Bø i Telemark')

options.husnummer = 50
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Seljordvegen 50 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Seljordvegen'
options.husnummer = 89
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Seljordvegen 89 Bø i Telemark')

options.husnummer = 1129
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Seljordvegen 1129 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Skoevegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Skoevegen 1 Bø i Telemark')

options.husnummer = 8
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Skoevegen 8 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Stavsholtvegen'
options.husnummer = 20
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Stavsholtvegen 20 Bø i Telemark')

options.husnummer = 454
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Stavsholtvegen 454 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Stavsholtvegen'
options.husnummer = 535
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Stavsholtvegen 535 Bø i Telemark')

options.husnummer = 660
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Stavsholtvegen 660 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Sønstebøvegen'
options.husnummer = 21
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sønstebøvegen 21 Bø i Telemark')

options.husnummer = 62
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sønstebøvegen 62 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Sønstigardvegen'
options.husnummer = 6
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sønstigardvegen 6 Bø i Telemark')

options.husnummer = 68
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sønstigardvegen 68 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Torsbergåsen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Torsbergåsen 1 Bø i Telemark')

options.husnummer = 13
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Torsbergåsen 13 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Tveitanvegen'
options.husnummer = 19
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Tveitanvegen 19 Bø i Telemark')

options.husnummer = 89
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Tveitanvegen 89 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Vollevegen'
options.husnummer = 4
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Vollevegen 4 Bø i Telemark')

options.husnummer = 34
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Vollevegen 34 Bø i Telemark')

options.postnummer = 3803
options.gatenavn = 'Vreimsida'
options.husnummer = 83
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Vreimsida 83 Bø i Telemark')

options.husnummer = 927
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Vreimsida 927 Bø i Telemark')

// 3810

options.postnummer = 3810
options.gatenavn = 'Heivegen'
options.husnummer = 17
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Heivegen 17 Gvarv')

options.husnummer = 196
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Heivegen 196 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Strannavegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Strannavegen 1 Gvarv')

options.husnummer = 827
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Strannavegen 827 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Myrlandvegen'
options.husnummer = 24
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Myrlandvegen 24 Gvarv')

options.husnummer = 74
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Myrlandvegen 74 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Kåsavegen'
options.husnummer = 7
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Kåsavegen 7 Gvarv')

options.husnummer = 102
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Kåsavegen 102 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Haugenvegen'
options.husnummer = 30
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Haugenvegen 30 Gvarv')

options.husnummer = 45
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Haugenvegen 45 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Sulukollvegen'
options.husnummer = 16
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Haugenvegen 16 Gvarv')

options.husnummer = 104
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Haugenvegen 104 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Årnes Brygge'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Årnes Brygge 5 Gvarv')

options.husnummer = 105
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Årnes Brygge 105 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Noradalsvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Noradalsvegen 1 Gvarv')

options.husnummer = 22
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Noradalsvegen 22 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Kåsinvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Kåsinvegen 1 Gvarv')

options.husnummer = 21
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Kåsinvegen 21 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Sjøbuhaugen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sjøbuhaugen 2 Gvarv')

options.husnummer = 21
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sjøbuhaugen 21 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Oredalen'
options.husnummer = 10
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Oredalen 10 Gvarv')

options.husnummer = 16
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Oredalen 16 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Hetterudvegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Hetterudvegen 5 Gvarv')

options.husnummer = 103
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Hetterudvegen 103 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Åsvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Åsvegen 2 Gvarv')

options.husnummer = 54
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Åsvegen 54 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Håtveitvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Håtveitvegen 1 Gvarv')

options.husnummer = 151
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Håtveitvegen 151 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Østtveitvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Østtveitvegen 1 Gvarv')

options.husnummer = 52
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Østtveitvegen 52 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Grannevegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Grannevegen 5 Gvarv')

options.husnummer = 31
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Grannevegen 31 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Juvevegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Juvevegen 2 Gvarv')

options.husnummer = 12
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Juvevegen 12 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Bøvegen'
options.husnummer = 1
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Bøvegen 1 Gvarv')

options.husnummer = 185
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Bøvegen 185 Gvarv')

options.postnummer = 3810
options.gatenavn = 'Ødegårdsvegen'
options.husnummer = 3
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Ødegårdsvegen 3 Gvarv')

options.husnummer = 42
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Ødegårdsvegen 42 Gvarv')

// 3830 ULEFOSS

options.postnummer = 3830
options.gatenavn = 'Skiensvegen'
options.husnummer = 86
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Skiensvegen 86 Ulefoss')

options.husnummer = 751
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Skiensvegen 751 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Namløsvegen'
options.husnummer = 30
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Namløsvegen 30 Ulefoss')

options.husnummer = 135
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Namløsvegen 135 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Grønvoldvegen'
options.husnummer = 290
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Grønvoldvegen 290 Ulefoss')

options.husnummer = 706
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Grønvoldvegen 706 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Grønsteinvegen'
options.husnummer = 25
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Grønsteinvegen 25 Ulefoss')

options.husnummer = 86
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Grønsteinvegen 86 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Omtvedtvegen'
options.husnummer = 44
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Omtvedtvegen 44 Ulefoss')

options.husnummer = 119
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Omtvedtvegen 119 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Kollevegen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Kollevegen 8 Ulefoss')

options.husnummer = 71
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Kollevegen 71 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Jøntvedtvegen'
options.husnummer = 4
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Jøntvedtvegen 4 Ulefoss')

options.husnummer = 74
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Jøntvedtvegen 74 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Jakobskåsvegen'
options.husnummer = 14
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Jakobskåsvegen 14 Ulefoss')

options.husnummer = 15
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Jakobskåsvegen 15 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Helgvinvegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Helgvinvegen 5 Ulefoss')

options.husnummer = 22
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Helgvinvegen 22 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Sverdsteinvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sverdsteinvegen 2 Ulefoss')

options.husnummer = 29
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sverdsteinvegen 29 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Prestegravvegen'
options.husnummer = 32
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Prestegravvegen 32 Ulefoss')

options.husnummer = 123
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Prestegravvegen 123 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Olsbryggevegen'
options.husnummer = 5
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Olsbryggevegen 5 Ulefoss')

options.husnummer = 226
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Olsbryggevegen 226 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Nesetvegen'
options.husnummer = 40
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Nesetvegen 40 Ulefoss')

options.husnummer = 129
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Nesetvegen 129 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Ytterbøvegen'
options.husnummer = 19
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Ytterbøvegen 19 Ulefoss')

options.husnummer = 40
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Ytterbøvegen 40 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Hjelsethvegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Hjelsethvegen 2 Ulefoss')

options.husnummer = 141
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Hjelsethvegen 141 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Håvevegen'
options.husnummer = 2
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Håvevegen 2 Ulefoss')

options.husnummer = 92
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Håvevegen 92 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Sjørholtvegen'
options.husnummer = 19
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sjørholtvegen 19 Ulefoss')

options.husnummer = 133
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sjørholtvegen 133 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Langelandvegen'
options.husnummer = 72
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Langelandvegen 72 Ulefoss')

options.husnummer = 96
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Langelandvegen 96 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Romnesvegen'
options.husnummer = 115
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Romnesvegen 155 Ulefoss')

options.husnummer = 133
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Romnesvegen 133 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Slåttekåsvegen'
options.husnummer = 58
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Slåttekåsvegen 58 Ulefoss')

options.husnummer = 103
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Slåttekåsvegen 103 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Sannesåsvegen'
options.husnummer = 37
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sannesåsvegen 37 Ulefoss')

options.husnummer = 69
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sannesåsvegen 69 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Sannesvegen'
options.husnummer = 71
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sannesvegen 71 Ulefoss')

options.husnummer = 136
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sannesvegen 136 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Sauheradvegen'
options.husnummer = 581
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Sauheradvegen 581 Ulefoss')

options.husnummer = 588
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Sauheradvegen 588 Ulefoss')

options.postnummer = 3830
options.gatenavn = 'Helgvinsvingen'
options.husnummer = 8
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Helgvinsvingen 8 Ulefoss')

options.husnummer = 14
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Helgvinsvingen 14 Ulefoss')

// 3801 Bø i Telemark

options.postnummer = 3801
options.gatenavn = 'Flatinvegen'
options.husnummer = 10
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Flatinvegen 10 Ulefoss')

options.husnummer = 124
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Flatinvegen 124 Ulefoss')

options.postnummer = 3801
options.gatenavn = 'Gvarvvegen'
options.husnummer = 150
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Lunde returns true from Gvarvvegen 150 Bø i Telemark')

options.husnummer = 334
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Lunde returns false from Gvarvvegen 334 Bø i Telemark')
