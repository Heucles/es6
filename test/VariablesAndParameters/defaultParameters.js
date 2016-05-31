'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing for default Parameters', function () {

  it('Provides defaults', function (done) {

    let doWork = function (name = 'Scott') {
      return name;
    };

    var result = doWork();
    expect(result).to.equal('Scott');

    done();
  });

  it('Will provide a value for undefined', function (done) {

    let doWork = function (a = 1, b = 2, c = 3) {
      return [a, b, c];
    };

    let [a, b, c] = doWork(5, undefined);

    expect(a).to.equal(5);
    expect(b).to.equal(2);
    expect(c).to.equal(3);

    done();
  });

  it('Will also work with destructuring', function (done) {

    let doWork = function (address, {
      name = 'heucles', cache = true}) {
      return name;
    };


    let result = doWork('api/test', {      
      cache: false
    });

    expect(result).to.equal('heucles');
    done();
  });

});