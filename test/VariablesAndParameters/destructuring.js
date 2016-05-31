'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Destructuring', function () {

  it('Can destructure arrays', function (done) {

    let x = 2;
    let y = 3;

    [x, y] = [y, x];

    expect(x).to.equal(3);
    expect(y).to.equal(2);

    done();
  });

  it('Yet another example of how you can destructure arrays', function (done) {

    var doWork = function () {
      return [1, 3, 2];
    }

    //this empty space means that you can jump right over here
    let [, x, y, z] = doWork();

    expect(x).to.equal(3);
    expect(y).to.equal(2);
    expect(z).to.be.an('undefined');

    done();
  });

  it('Can destructure objects', function (done) {

    var doWork = function () {
      return {
        firstName: 'Heucles',
        lastName: 'Junior',
        handles: {
          twitter: '@heucles'
        }
      };
    };

    let {
      firstName: assignedFirstName,
      handles: {
        twitter: assignedTwitter
      }
    } = doWork();


    expect(assignedFirstName).to.equal('Heucles');
    expect(assignedTwitter).to.equal('@heucles');

    done();
  });

  it('Can destructure objects with a shorter syntax if you are willing to use the same name', function (done) {

    var doWork = function () {
      return {
        firstName: 'Heucles',
        lastName: 'Junior',
        handles: {
          twitter: '@heucles'
        }
      };
    };

    let {
      firstName,
      handles: {
        twitter
      }
    } = doWork();


    expect(firstName).to.equal('Heucles');
    expect(twitter).to.equal('@heucles');

    done();
  });

  it('Will also work with parameters', function (done) {

    var doWork = function (address, {
      data, cache, headers
    }) {
      return data
    };


    let result = doWork('api/test',{
      data:'test',
      cache:false      
    });

    expect(result).to.equal('test');
    done();
  });

});