'use strict';

var assert = require('assert');
var transportByTbr = require('../index');

describe('transportByTbr', function() {

  it('requires an options object', function(done) {

    var options = false;
    var result = transportByTbr(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options object/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.postnummer to exist', function(done) {

    var options = {
      postnummer: false
    };
    var result = transportByTbr(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.postnummer/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('requires options.skoleid to exist', function(done) {

    var options = {
      postnummer: true,
      skoleid: false
    };
    var result = transportByTbr(options);
    var condition = false;
    if ((result instanceof Error) && /Missing required input: options.skoleid/.test(result)) {
      condition = true;
    }
    assert.equal(true, condition);
    done();
  });

  it('returns true if skole Vest-Telemark (Dalen)', function(done) {

    var options = {
      postnummer: 3870,
      skoleid: 3880
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns true if postnummer Fyresdal og skole Vest-Telemark (Seljord)', function(done) {

    var options = {
      postnummer: 3870,
      skoleid: 3840
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Notodden og skole Vest-Telemark (Seljord)', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3840
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Nome og skole Seljord', function(done) {

    var options = {
      postnummer: 3825,
      skoleid: 3840
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Porsgrunn og skole Seljord', function(done) {

    var options = {
      postnummer: 3912,
      skoleid: 3840
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Porsgrunn og skole Bø', function(done) {

    var options = {
      postnummer: 3912,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Notodden og skole Bø', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Seljord og skole Bø', function(done) {

    var options = {
      postnummer: 3835,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Bø og skole Bø', function(done) {

    var options = {
      postnummer: 3802,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer 3803 og skole Bø', function(done) {

    var options = {
      postnummer: 3803,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Kragerø og skole Bø', function(done) {

    var options = {
      postnummer: 3766,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer Sauherad og skole Søve', function(done) {

    var options = {
      postnummer: 3811,
      skoleid: 3830
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Notodden og skole Søve', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3830
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if postnummer 3729 og skole Skogmo', function(done) {

    var options = {
      postnummer: 3729,
      skoleid: 3735
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns false if postnummer Notodden og skole Skogmo', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3735
    };
    var result = transportByTbr(options);
    assert.equal(false, result);
    done();
  });

  it('returns true if skole Kvitsund gymnas', function(done) {

    var options = {
      postnummer: 3681,
      skoleid: 3850
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

  it('returns true if skole is Bø vgs and postnummer 3830 Ulefoss', function(done) {

    var options = {
      postnummer: 3830,
      skoleid: 3802
    };
    var result = transportByTbr(options);
    assert.equal(true, result);
    done();
  });

});