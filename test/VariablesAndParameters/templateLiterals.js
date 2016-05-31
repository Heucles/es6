'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Template literals', function () {

  it('Can easily combine literals and data', function (done) {

    let doWork = function (name) {
      return `Hello, ${name}`;
    };

    let result = doWork('Heucles');
    expect(result).to.equal('Hello, Heucles');

    done()

  });

  it('Can help build URL´s ', function (done) {

    let category = 'music';
    let id = 2112;

    let url = `http://apiserver/${category}/${id}`;

    expect(url).to.equal('http://apiserver/music/2112');

    done()

  });

  it('Can use tags ', function (done) {

    let upper = function (strings, ...values) {
      let result = '';
      
      for (let i = 0; i< strings.length; i ++){
        result += strings[i];
        
        if (i<values.length){
          result += values[i];
        }
      }
      
      return result.toUpperCase();
      
    };
    
    let x = 1;
    let y = 3;
    // the tag is a function that will be called with two parameters, one is the array with the template all spread
    // the other is an array with all of the values spread
    let result = upper `${x} + ${y} is ${x+y}`;

    expect(result).to.equal('1 + 3 IS 4');

    done()

  });


});