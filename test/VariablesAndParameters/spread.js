'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('The Spread', function () {

  it('Can spread an array across several parameters', function (done) {

    let doWork = function (x, y, z) {
      return x + y + z;
    };

    let result = doWork(...[1, 2, 3]);
    expect(result).to.equal(6);

    done()

  });


  it('Can build an array', function (done) {

    var a = [4, 5, 6];
    var b = [1, 2, 3, ...a, 7, 8, 9];
    expect(b).to.eql([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    done()

  });

});