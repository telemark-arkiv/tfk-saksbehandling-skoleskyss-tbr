'use strict'

var apiUrl = 'https://api.t-fk.no/postnummer/kommunenavn'
var generateDataFiles = require('./lib/generateDataFile')
var jobsToDo = 7
var jobsDone = 0

function areWeDoneYet () {
  jobsDone++
  if (jobsDone === jobsToDo) {
    console.log('Everything\'s shiny, Cap\'n. Not to fret.')
    process.exit(0)
  }
}

// generates files for Fyresdal, Kviteseid, Nissedal, Tokke og Vinje
generateDataFiles({apiUrl: apiUrl, queryList: ['Seljord', 'Fyresdal', 'Kviteseid', 'Nissedal', 'Tokke', 'Vinje'], fileName: 'seljord_fyresdal_kviteseid_nissedal_tokke_vinje.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for Nome, Sauherad og Bø samt 3729 Skien
generateDataFiles({apiUrl: apiUrl, queryList: ['Nome', 'Sauherad', 'Bø (tel.)'], extras: [3729], fileName: 'nome_sauherad_bo.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// generates files for Porsgrunn, Skien og Siljan samt 3690 Hjartdal
generateDataFiles({apiUrl: apiUrl, queryList: ['Porsgrunn', 'Skien', 'Siljan'], extras: [3690], fileName: 'pgr_skien_siljan.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// Generates files for Seljord samt 3836 og 3850 Kviteseid
generateDataFiles({apiUrl: apiUrl, queryList: ['Seljord'], extras: [3836, 3850], fileName: 'seljord_kviteseid.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// Generates files for 3803 Bø, 3810 og 3834 Gvarv samt 3830 og 3831 Ulefoss
generateDataFiles({apiUrl: apiUrl, queryList: [], extras: [3803, 3810, 3830, 3831, 3834], fileName: 'bo_gvarv_ulefoss.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// Generates files for Bø og Sauherad samt 3830 Ulefoss
generateDataFiles({apiUrl: apiUrl, queryList: ['Bø (tel.)', 'Sauherad'], extras: [3830], fileName: 'bo_sauherad_ulefoss.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})

// Generates files for Bø, Nome, 3729 Skien samt 3810 Gvarv 3811 Hørte 3812 Akkerhaugen og 3834 Gvarv
generateDataFiles({apiUrl: apiUrl, queryList: ['Bø (tel.)', 'Nome'], extras: [3729, 3810, 3811, 3834], fileName: 'bo_nome_skien_gvarv.json'}, function (error, data) {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
  areWeDoneYet()
})
