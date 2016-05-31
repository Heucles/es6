'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing Rest Parameters', function () {

  it('Is like varargs', function (done) {
    
    //...numbers is really an array!!!
    let doWork = function (name, ...numbers) {
      let result = 0;
      numbers.forEach(function (n) {
        result += n;
      });
      return result;      
    };
    
    let result = doWork('Scott', 1,2,3);
    expect(result).to.equal(6);
    
    done()
    
  });
  
});