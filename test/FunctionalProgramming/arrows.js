'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing arrow functions', function () {

  it('Provide a compact syntax to define a function', function (done) {

    let add = (x, y) => x + y;

    let square = x => x * x;

    let three = () => 3;

    let mult = (x, y) => {
      var result = x * y;
      return result;
    }

    expect(add(2, 3)).to.equal(5);
    expect(square(2)).to.equal(4);
    expect(three()).to.equal(3);
    expect(mult(2, 3)).to.equal(6);

    done();
  });

  it('Can be used with array methods', function (done) {

    let numbers = [1, 2, 3, 4];

    let sum = 0;
    numbers.forEach(n=> sum += n);
    expect(sum).to.equal(10);

    let doubled = numbers.map(n=> n * 2);
    expect(doubled).eql([2, 4, 6, 8]);

    done();
  });

});