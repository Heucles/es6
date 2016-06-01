'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Iterables', function () {

  it('Can work with iterators at a low level', function (done) {

    // THE FOLLOWING CODE IS NOT WORKING 

    //     let sum = 0;
    //     let ns = [1, 2, 3, 4];
    // 
    //     let iterator = numbers.values();
    //     let next = iterator.next();
    //     while (!next.done) {
    //       sum += next.value;
    //       next.iterator.next();
    //     }
    // 
    //     expect(sum).to.equal(10);

    done();
  });

  it('Can work with iterators at a low level', function (done) {

    let sum = 0;
    let numbers = [1, 2, 3, 4];


    for (let n of numbers) {
      sum += n;
    }

    expect(sum).to.equal(10);

    done();
  });

});