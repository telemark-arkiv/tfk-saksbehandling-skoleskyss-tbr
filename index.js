'use strict'

module.exports = function transportByTbr (options) {
  if (!options) {
    throw new Error('Missing required input: options object')
  }
  if (!options.postnummer) {
    throw new Error('Missing required input: options.postnummer')
  }
  if (!options.skoleid) {
    throw new Error('Missing required input: options.skoleid')
  }
  if (!options.gatenavn) {
    throw new Error('Missing required input: options.gatenavn')
  }
  if (!options.husnummer) {
    throw new Error('Missing required input: options.husnummer')
  }

  const isFile = require('is-file')
  const skoleid = parseInt(options.skoleid, 10)
  const fileName = 'lib/data/' + skoleid + '.json'
  const fileNameSpecials = 'lib/data/specials/' + skoleid + '.json'
  const postnummer = parseInt(options.postnummer, 10)
  const gatenavn = options.gatenavn
  const husnummer = parseInt(options.husnummer, 10)
  // Sjekk for specials ved gatenavn og husnummer

  if (isFile(fileNameSpecials)) {
    const specials = require('./' + fileNameSpecials)
    if (specials[postnummer.toString()]) {
      var isSnowflake = false
      specials[postnummer.toString()].forEach(function (item) {
        if (item.name.toLowerCase() === gatenavn.toLowerCase()) {
          if (item.range.min <= husnummer && husnummer <= item.range.max) {
            isSnowflake = true
          }
        }
      })
      if (isSnowflake === true) {
        return true
      }
    }
  }

  // Vanlig sjekk for postnummer
  if (isFile(fileName)) {
    const zips = require('./' + fileName)
    return zips.indexOf(postnummer) > -1
  } else {
    return false
  }
}
