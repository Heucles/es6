'use strict';

var assert = require('chai').assert;

describe('Testing the let keyword', function () {

  it('Testing with "var" first to make a point', function (done) {

    var doWork = function (flag) {
      if (flag) {
        var x = 3;
      }

      return x;
    }

    var result = doWork(true);
    assert.strictEqual(result, 3);

    done();
  });

  it('Testing with "var" with false so that hoisting can make it undefined', function (done) {

    var doWork = function (flag) {
      if (flag) {
        var x = 3;
      }

      return x;
    }

    var result = doWork(false);
    assert.strictEqual(result, undefined);

    done();
  });

  it('Testing with "let" with false so that hoisting can´t act on it, and demonstrate block scope', function (done) {

    var doWork = function (flag) {
      if (flag) {
        let x = 3;
      }
      return x;
    }
    assert.throws(() =>
      doWork(false),
      ReferenceError, 'x is not defined');

    done();
  });

  it('Testing with "var" to make a point but now demonstrate block scope into a "for" instead of an "if" ', function (done) {

    var doWork = function () {
      for (var i = 0; i < 10; i++) { }
      return i;
    }

    var result = doWork();
    assert.strictEqual(result, 10);

    done();
  });

  it('Testing with "let" with false so that hoisting can´t act on it, and demonstrate block scope into a "for" instead of an "if" ', function (done) {

    var doWork = function () {
      for (let i = 0; i < 10; i++) { }
      return i;
    }
    assert.throws(() =>
      doWork(false),
      ReferenceError, 'i is not defined');

    done();
  });


});