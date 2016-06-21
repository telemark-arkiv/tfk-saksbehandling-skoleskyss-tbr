'use strict'

const tap = require('tap')
const isTbr = require('../index')
var options = {
  skoleid: 3830,
  postnummer: ''
}

options.postnummer = 3960
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3960 Stathelle')

options.postnummer = 3961
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3961 Stathelle')

options.postnummer = 3962
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3962 Stathelle')

options.postnummer = 3965
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3965 Herre')

options.postnummer = 3966
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3966 Stathelle')

options.postnummer = 3967
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3967 Stathelle')

options.postnummer = 3970
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3970 Langesund')

options.postnummer = 3993
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3993 Langesund')

options.postnummer = 3994
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3994 Langesund')

options.postnummer = 3995
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3995 Stathelle')

options.postnummer = 3999
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3999 Herre')

options.postnummer = 3800
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3800 Bø i telemark')

options.postnummer = 3801
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3800 Bø i telemark')

options.postnummer = 3802
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3802 Bø i telemark')

options.postnummer = 3803
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3803 Bø i telemark')

options.postnummer = 3804
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3804 Bø i telemark')

options.postnummer = 3833
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Søve, avdeling Søve returns false from 3833 Bø i telemark')

options.postnummer = 3830
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3830 Ulefoss')

options.postnummer = 3831
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Søve, avdeling Søve returns false from 3831 Ulefoss')

// Notodden
options.postnummer = 3671
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3671 Notodden')

options.postnummer = 3672
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3672 Notodden')

options.postnummer = 3673
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3673 Notodden')

options.postnummer = 3674
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3674 Notodden')

options.postnummer = 3675
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3675 Notodden')

options.postnummer = 3676
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3676 Notodden')

options.postnummer = 3677
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3677 Notodden')

options.postnummer = 3678
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3678 Notodden')

options.postnummer = 3679
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3679 Notodden')

options.postnummer = 3680
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3680 Notodden')

options.postnummer = 3681
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3681 Notodden')

options.postnummer = 3683
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3683 Notodden')

options.postnummer = 3684
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3684 Notodden')

options.postnummer = 3691
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve, avdeling Søve returns true from 3671 Gransherad')
// End of Notodden

// Porsgrunn
options.postnummer = 3901
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3901 Porsgrunn')

options.postnummer = 3902
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3902 Porsgrunn')

options.postnummer = 3903
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3903 Porsgrunn')

options.postnummer = 3904
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3904 Porsgrunn')

options.postnummer = 3905
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3905 Porsgrunn')

options.postnummer = 3906
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3906 Porsgrunn')

options.postnummer = 3910
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3910 Porsgrunn')

options.postnummer = 3911
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3911 Porsgrunn')

options.postnummer = 3912
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3912 Porsgrunn')

options.postnummer = 3913
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3913 Porsgrunn')

options.postnummer = 3914
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3914 Porsgrunn')

options.postnummer = 3915
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3915 Porsgrunn')

options.postnummer = 3916
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3916 Porsgrunn')

options.postnummer = 3917
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3917 Porsgrunn')

options.postnummer = 3918
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3918 Porsgrunn')

options.postnummer = 3919
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3919 Porsgrunn')

options.postnummer = 3920
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3920 Porsgrunn')

options.postnummer = 3921
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3921 Porsgrunn')

options.postnummer = 3922
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3922 Porsgrunn')

options.postnummer = 3924
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3924 Porsgrunn')

options.postnummer = 3925
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3925 Porsgrunn')

options.postnummer = 3928
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3928 Porsgrunn')

options.postnummer = 3929
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3929 Porsgrunn')

options.postnummer = 3930
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3930 Porsgrunn')

options.postnummer = 3931
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3931 Porsgrunn')

options.postnummer = 3933
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3933 Porsgrunn')

options.postnummer = 3936
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3936 Porsgrunn')

options.postnummer = 3937
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3937 Porsgrunn')

options.postnummer = 3939
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3939 Porsgrunn')

options.postnummer = 3940
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3940 Porsgrunn')

options.postnummer = 3941
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3941 Porsgrunn')

options.postnummer = 3942
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3942 Porsgrunn')

options.postnummer = 3943
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3943 Porsgrunn')

options.postnummer = 3944
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3944 Porsgrunn')

options.postnummer = 3946
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3946 Porsgrunn')

options.postnummer = 3947
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3947 Porsgrunn')

options.postnummer = 3948
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3948 Porsgrunn')

options.postnummer = 3949
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3949 Porsgrunn')

options.postnummer = 3950
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3950 Brevik')

options.postnummer = 3991
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3991 Brevik')

options.postnummer = 3996
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3996 Porsgrunn')

options.postnummer = 3997
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3997 Porsgrunn')

options.postnummer = 3998
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3998 Porsgrunn')
// End of Porsgrunn

options.postnummer = 3810
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3810 Gvarv')

options.postnummer = 3811
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3811 Hørte')

options.postnummer = 3812
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3812 Akkerhaugen')

options.postnummer = 3820
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Søve returns false from 3820 Nordagutu')

options.postnummer = 3840
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3840 Seljord')

options.postnummer = 3841
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3841 Flatdal')

options.postnummer = 3844
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Søve returns false from 3844 Åmotsdal')

// Skien
options.postnummer = 3701
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3701 Skien')

options.postnummer = 3702
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3702 Skien')

options.postnummer = 3703
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3703 Skien')

options.postnummer = 3704
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3704 Skien')

options.postnummer = 3705
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3705 Skien')

options.postnummer = 3707
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3707 Skien')

options.postnummer = 3710
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3710 Skien')

options.postnummer = 3711
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3711 Skien')

options.postnummer = 3712
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3712 Skien')

options.postnummer = 3713
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3713 Skien')

options.postnummer = 3714
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3714 Skien')

options.postnummer = 3715
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3715 Skien')

options.postnummer = 3716
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3716 Skien')

options.postnummer = 3717
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3717 Skien')

options.postnummer = 3718
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3718 Skien')

options.postnummer = 3719
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3719 Skien')

options.postnummer = 3720
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3720 Skien')

options.postnummer = 3721
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3721 Skien')

options.postnummer = 3722
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3722 Skien')

options.postnummer = 3723
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3723 Skien')

options.postnummer = 3724
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3724 Skien')

options.postnummer = 3725
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3725 Skien')

options.postnummer = 3726
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3726 Skien')

options.postnummer = 3727
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3727 Skien')

options.postnummer = 3728
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3728 Skien')

options.postnummer = 3729
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3729 Skien')

options.postnummer = 3730
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3730 Skien')

options.postnummer = 3731
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3731 Skien')

options.postnummer = 3732
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3732 Skien')

options.postnummer = 3733
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3733 Skien')

options.postnummer = 3734
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3734 Skien')

options.postnummer = 3735
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3735 Skien')

options.postnummer = 3736
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3736 Skien')

options.postnummer = 3737
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3737 Skien')

options.postnummer = 3738
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3738 Skien')

options.postnummer = 3739
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3739 Skien')

options.postnummer = 3740
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3740 Skien')

options.postnummer = 3741
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3741 Skien')

options.postnummer = 3742
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3742 Skien')

options.postnummer = 3743
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3743 Skien')

options.postnummer = 3744
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3744 Skien')

options.postnummer = 3746
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3756 Skien')

options.postnummer = 3747
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3747 Skien')

options.postnummer = 3785
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3785 Skien')

options.postnummer = 3787
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3787 Skien')

options.postnummer = 3792
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3792 Skien')

options.postnummer = 3796
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3796 Skien')

options.postnummer = 3798
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3798 Skien')

options.postnummer = 3799
tap.equal(isTbr(options), true, 'Nome vgs, avdeling Søve returns true from 3799 Skien')
// End of Skien

options.postnummer = 3652
tap.equal(isTbr(options), false, 'Nome vgs, avdeling Søve returns false from 3652 Hovin i Telemark')
