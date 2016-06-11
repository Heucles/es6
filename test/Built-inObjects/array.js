'use strict'
var expect = require('chai').expect;

describe('Arrays', function () {

  it('should return the first matching element using find', function (done) {

    var ary = [1, 5, 10];
    var match = ary.find(item => item > 8);

    expect(match).to.equal(10);

    done();
  });

  it('should return the first matching index using findIndex', function (done) {

    var match = [1, 5, 10].findIndex(item => item > 3);
    expect(match).to.equal(1);
    done();
  });

  it('should fill in the entire array when fill is called', function (done) {

    var ary = [1, 2, 3, 4, 5];
    ary.fill('a');
    expect(ary[3]).to.equal('a');
    expect(ary[4]).to.equal('a');
    expect(ary[1]).to.equal('a');
    done();

  });

  it('should fill in the some of the array when fill is called with args', function (done) {

    var ary = [1, 2, 3, 4, 5];
    ary.fill('a', 2, 3);
    expect(ary[2]).to.equal('a');
    expect(ary[4]).to.equal(5);
    expect(ary[1]).to.equal(2);
    done();

  });

  it('should copy elements with copyWithin ', function (done) {

    var ary = [1, 2, 3, 4];
    ary.copyWithin(0, -1); //[3,4,3,4]
    expect(ary).to.eql([4, 2, 3, 4]);
    done();

  });

  it('should create an array with 1 arg when given 1 arg of is called ', function (done) {

    var ary = new Array(3);
    var ofAry = Array.of(3);
    expect(ary.length).to.eql(3);
    expect(ofAry.length).to.eql(1);
    done();

  });
  
  // ARRAY FROM PLACE HOLDER , JUST FOUND BROWSERS EXAMPLES
  
  it('should return entries from the entries function', function (done) {
    var a = ['Joe', 'Jim', 'John'];
    var entries = a.entries();
    
    var firstEntry = entries.next().value;
    expect(firstEntry[0]).to.equal(0);
    expect(firstEntry[1]).to.equal('Joe');
    done();
  });


  it('should enumerate the keys with the keys function', function (done) {
    var a = ['Joe', 'Jim', 'John'];
    var keys = a.keys();
    
    var firstKey = keys.next().value;
    expect(firstKey).to.equal(0);    
    done();
  });
});
