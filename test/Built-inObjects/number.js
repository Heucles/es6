var expect = require('chai').expect;

describe('Number', function () {

  it('supports hexadecimal numbers since ES5', function (done) {
    var a = 10;
    var hexd = 0xa;
    expect(a).to.equal(parseInt(hexd))
    expect(a).to.equal(parseInt(hexd.toString(16), 16))
    done();
  });

  it('should easily mistake numbers with leading zeroes when handling octal values in ES5', function (done) {
    var octalValue = 071;
    expect(octalValue).to.equal(57);
    done();
  });

  it('Now in ES6 with new key prefix for octal literals it should be easier', function (done) {
    var octalValue1 = 0o71;
    var octalValue2 = 0O71;

    expect(octalValue1).to.equal(57);
    expect(octalValue2).to.equal(57);
    done();
  });

  it('should support binary literals', function (done) {
    var bin = 0b1101;
    expect(bin).to.equal(13);
    done();
  });

  it('should parse octal values with the Number function', function (done) {
    var octalValue = Number('0o71');
    expect(octalValue).to.equal(57);
    done();
  });

  it('should parse binary values with the Number function', function (done) {
    var binaryValue = Number('0b101');
    expect(binaryValue).to.equal(5);
    done();
  });
  
  it ('should expose parseInt and parseFloat', function (done) {
    expect(Number.parseInt('3')).to.equal(3);
    expect(Number.parseFloat('3.5')).to.equal(3.5);
    done();
  });
  
  it('should not convert strings when calling Number.isFinite vs global', function (done) {
    expect(isFinite('1')).to.equal(true);
    expect(Number.isFinite('1')).to.equal(false);
    done();
  });
  
  it('should not convert strings when calling Number.isNaN vs global', function (done) {
    expect(isNaN('NaN')).to.equal(true);
    expect(Number.isNaN('NaN')).to.equal(false);
    done();
  });
  
  it('should correctly detect integers with isInteger', function (done) {
    expect(Number.isInteger(1)).to.equal(true);
    expect(Number.isInteger(1.0)).to.equal(true);
    expect(Number.isInteger(1.5)).to.equal(false);
    done();
  });
  
  it ('Should expose the max and min safe integer constants', function (done) {
    expect(Math.pow(2,53)).to.equal(Math.pow(2,53)+1);
    expect(Math.pow(2,53)+3).to.equal(Math.pow(2,53)+5);
    
    expect(Number.MAX_SAFE_INTEGER).to.equal(Math.pow(2,53)-1);
    expect(Number.MIN_SAFE_INTEGER).to.equal(Math.pow(2,53)*-1 +1);
    
    done();    
  });
  
  it('Should indicate safe integers with isSafeInteger', function (done) {
    expect(Number.isSafeInteger(9007199254740991)).to.equal(true);
    expect(Number.isSafeInteger(9007199254740992)).to.equal(false);
    done();
  });

});