'use strict';

//comprehensions currently are only supported by babel

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('Testing comprehensions', function () {

  it('Can be used to yield', function (done) {

    class Company {

      constructor() {
        this.employees = [];
      }

      addEmployees(...names) {
        this.employees = this.employees.concat(names);
      }

      *[Symbol.iterator]() {
        for (let e of this.employees) {
          console.log('yield', e);
          yield e;
        }
      }
    }

    // this is a generator function, it is lazy  
    let filter = function*(items, predicate) {      
//      yield [for (item of items) item];      
      for (let item of items) {
        console.log('filter', item);

        if (predicate(item)) {
          yield item;
        }
      }
    };

    // this is a generator function, it is lazy 
    let take = function* (items, number) {
      let count = 0;
      if (number < 1) return;

      for (let item of items) {
        yield item;
        count += 1;

        if (count >= number) {
          return;
        }
      }
    }

    let count = 0;
    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

    for (let employee of take(filter(company, e=> e[0] === 'T'), 1)) {
      count += 1;
    }

    expect(count).to.equal(1);

    done();
  });
});