var expect = require('chai').expect;

describe('Math trig functions', function () {

  it('should return the correct values', function (done) {
    expect(Math.acosh(1)).to.equal(0);
    expect(Math.asinh(0)).to.equal(0);
    expect(Math.atanh(0)).to.equal(0);
    expect(Math.cosh(0)).to.equal(1);
    expect(Math.sinh(0)).to.equal(0);
    expect(Math.tanh(0)).to.equal(0);
      
    done();
  });
    
});

describe('Misc Math functions', function () {

  it('should return the correct values', function (done) {
    expect(Math.cbrt(27)).to.equal(3);
    expect(Math.clz32(5)).to.equal(29);
    expect(Math.log1p(35)).to.equal(3.58351893845611);
    expect(Math.log10(100)).to.equal(2);
    expect(Math.expm1(35)).to.equal(1586013452313429.8);
    expect(Math.hypot(3,4)).to.equal(5);
    expect(Math.fround(2.888)).to.equal(2.888000011444092);
      
    done();
  });
    
});

describe('Other Math functions', function () {

  it('should return the correct values', function (done) {
    expect(Math.sign(10)).to.equal(1);
    expect(Math.sign(0)).to.equal(0);
    expect(Math.sign(-10)).to.equal(-1);
    expect(Math.trunc(2.8)).to.equal(2);
    expect(Math.trunc(-2.8)).to.equal(-2);
      
    done();
  });
    
});