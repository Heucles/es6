'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing the const keyword', function () {

  it('Will make a variable read-only', function (done) {

    const MAX_SIZE = 10;
    // MAX_SIZE = 12; //SyntaxError
    expect(MAX_SIZE).to.equal(10);
    done();
  });

  it('This is to show a inner context', function (done) {
    const MAX_SIZE = 10;

    () => {
      //inner context
      let MAX_SIZE = 15;
    }

    expect(MAX_SIZE).to.equal(10);
    done();
  });

  it('This will throw an error', function (done) {
    
    //assert.throws(
    () => {
      //This will provoke a syntax error that should say, "Identifier 'MAX_SIZE' has already been declared"
      // let MAX_SIZE = 15;
      // let MAX_SIZE = 10;      
      
    //  //This will provoke the same error as above
    //   const MAX_SIZE = 15;
    //   const MAX_SIZE = 10;
    // 
    //   //This should cause no error
    //   var MAX_SIZE = 15;
    //   var MAX_SIZE = 10;
        
    }//,Error);

    done();
  });
});