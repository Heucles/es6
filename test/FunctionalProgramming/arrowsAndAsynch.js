'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing arrow functions, lexically binds to this', function () {

  it('Making the point', function (done) {

    this.name = 'Heucles';

    expect(this.name).to.equal('Heucles');

    done();
  });

  it('Old way to not loose scope', function (done) {

    this.name = 'Heucles';
    let self = this;

    setTimeout(function () {
      expect(self.name).to.equal('Heucles');
      done();
    }, 15);
  });

  it('The new and improved way to not loose scope', function (done) {
    // Arrow functions always get the context from where they are inside
    this.name = 'Heucles';

    setTimeout(() => {
      expect(this.name).to.equal('Heucles');
      done();
    }, 15);
  });

});