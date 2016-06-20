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
//
tap.test('returns true if skole Vest-Telemark (Dalen)', function (test) {
  const options = {
    postnummer: 3870,
    skoleid: 3880
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Fyresdal og skole Vest-Telemark (Seljord)', function (test) {
  const options = {
    postnummer: 3870,
    skoleid: 3840
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Notodden og skole Vest-Telemark (Seljord)', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3840
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Nome og skole Seljord', function (test) {
  const options = {
    postnummer: 3825,
    skoleid: 3840
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Porsgrunn og skole Seljord', function (test) {
  const options = {
    postnummer: 3912,
    skoleid: 3840
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Porsgrunn og skole Bø', function (test) {
  const options = {
    postnummer: 3912,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Notodden og skole Bø', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Seljord og skole Bø', function (test) {
  const options = {
    postnummer: 3835,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Bø og skole Bø', function (test) {
  const options = {
    postnummer: 3802,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer 3803 og skole Bø', function (test) {
  const options = {
    postnummer: 3803,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Kragerø og skole Bø', function (test) {
  const options = {
    postnummer: 3766,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer Sauherad og skole Søve', function (test) {
  const options = {
    postnummer: 3811,
    skoleid: 3830
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Notodden og skole Søve', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3830
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if postnummer 3729 og skole Skogmo', function (test) {
  const options = {
    postnummer: 3729,
    skoleid: 3735
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns false if postnummer Notodden og skole Skogmo', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3735
  }
  tap.equal(transportByTbr(options), false, 'Test OK')
  test.done()
})

tap.test('returns true if skole Kvitsund gymnas', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3850
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns true if skole Kvitsund gymnas', function (test) {
  const options = {
    postnummer: 3681,
    skoleid: 3850
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})

tap.test('returns true if skole is Bø vgs and postnummer 3830 Ulefoss', function (test) {
  const options = {
    postnummer: 3830,
    skoleid: 3802
  }
  tap.equal(transportByTbr(options), true, 'Test OK')
  test.done()
})
