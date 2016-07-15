'use strict'

const tap = require('tap')
const transportByTbr = require('../index')

tap.throws(
  function () {
    const options = false
    transportByTbr(options)
  },
  {message: 'Missing required input: options object'},
  'requires an options object'
)

tap.throws(
  function () {
    const options = {
      postnummer: false
    }
    transportByTbr(options)
  },
  {message: 'Missing required input: options.postnummer'},
  'requires options.postnummer to exist'
)

tap.throws(
  function () {
    const options = {
      postnummer: true,
      skoleid: false
    }
    transportByTbr(options)
  },
  {message: 'Missing required input: options.skoleid'},
  'requires options.skoleid to exist'
)

tap.throws(
  function () {
    const options = {
      postnummer: true,
      skoleid: true,
      gatenavn: true,
      husnummer: false
    }
    transportByTbr(options)
  },
  {message: 'Missing required input: options.husnummer'},
  'requires options.husnummer to exist'
)
