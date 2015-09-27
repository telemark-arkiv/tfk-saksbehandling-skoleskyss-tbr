'use strict';

function transportByTbr(options) {
  if (!options) {
    return new Error('Missing required input: options object');
  }
  if (!options.postnummer) {
    return new Error('Missing required input: options.postnummer');
  }
  if (!options.skoleid) {
    return new Error('Missing required input: options.skoleid');
  }

  var skoleBoNome = require('./lib/data/skoleids_bo_nome.json');
  var skoleBo = require('./lib/data/skoleids_bo.json');
  var skoleDalen = require('./lib/data/skoleids_dalen.json');
  var skoleSeljord = require('./lib/data/skoleids_seljord.json');
  var skoleSkienPgr = require('./lib/data/skoleids_skien_pgr.json');
  var skoleSove = require('./lib/data/skoleids_sove.json');
  var skoleVestTelemark = require('./lib/data/skoleids_vest_telemark.json');
  var skoleKvitsund = require('./lib/data/skoleids_kvitsund.json');
  var postnrBoGvarvUlefoss = require('./lib/data/bo_gvarv_ulefoss.json');
  var postnrBoNomeSkienGvarv = require('./lib/data/bo_nome_skien_gvarv.json');
  var postnrBoSauheradUlefoss = require('./lib/data/bo_sauherad_ulefoss.json');
  var postnrSeljordFyresdalKviteseidNissedalTokkeVinje = require('./lib/data/seljord_fyresdal_kviteseid_nissedal_tokke_vinje.json');
  var postnrNomeSauheradBo = require('./lib/data/nome_sauherad_bo.json');
  var postnrPgsSkienSiljan = require('./lib/data/pgr_skien_siljan.json');
  var postnrSeljordKviteseid = require('./lib/data/seljord_kviteseid.json');
  var skoleid = parseInt(options.skoleid, 10);
  var postnummer = parseInt(options.postnummer, 10);

  //Skole - Vest-Telemark vgs. avdeling Dalen - > true
  if (skoleDalen.indexOf(skoleid) > -1) {
    return true;
  }

  //Skole - Kvitsund gymnas - > true
  if (skoleKvitsund.indexOf(skoleid) > -1) {
    return true;
  }

  //Skole - Vest-Telemark vgs.-(Begge avdelinger.) Alle postnummer i Seljord, Fyresdal, Kviteseid, Nissedal, Tokke og Vinje -> true
  if (skoleVestTelemark.indexOf(skoleid) > -1 && postnrSeljordFyresdalKviteseidNissedalTokkeVinje.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Vest-Telemark-(avd. Seljord) Alle postnummer i Nome, Sauherad og Bø samt 3729 Skien -> true
  if (skoleSeljord.indexOf(skoleid) > -1 && postnrNomeSauheradBo.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Bø vgs. og Nome vgs.-(Begge avdelinger.) Alle i Porsgrunn, Skien og Siljan samt 3690 Hjartdal -> true
  if (skoleBoNome.indexOf(skoleid) > -1 && postnrPgsSkienSiljan.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Bø vgs. og Nome vgs.-(Begge avdelinger.) Alle Seljord samt 3836 og 3850 Kviteseid som skal til
  if (skoleBoNome.indexOf(skoleid) > -1 && postnrSeljordKviteseid.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Bø vgs, Postnummer 3803 Bø, 3810 Gvarv samt 3830 og 3831 Ulefoss
  if (skoleBo.indexOf(skoleid) > -1 && postnrBoGvarvUlefoss.indexOf(postnummer) > -1) {
    return true;
  }

  //Skole Nome vgs.-(avd. Søve), Postnummer Bø og Sauherad samt 3830 Ulefoss
  if (skoleSove.indexOf(skoleid) > -1 && postnrBoSauheradUlefoss.indexOf(postnummer) > -1) {
    return true;
  }

  //Bø, Nome, 3729 Skien samt 3810 Gvarv 3811 Hørte 3812 Akkerhaugen og 3834 Gvarv som skal til ALLE de 8 vgs.-skolene i Skien og Porsgrunn.
  if (skoleSkienPgr.indexOf(skoleid) > -1 && postnrBoNomeSkienGvarv.indexOf(postnummer) > -1) {
    return true;
  }

  //Alt annet gir false
  console.log('no match')
  return false;

}

module.exports = transportByTbr;