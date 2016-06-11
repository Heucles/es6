'use strict';

var assert = require('chai').assert;
var expect = require('chai').expect;

describe('For loop', function () {

  it('Can work with iterators at a low level', function (done) {

    // THE FOLLOWING CODE IS NOT WORKING, but it works on the browser

    let sum = 0;
    let ns = [1, 2, 3, 4];

    //let iterator = ns.values();
     
    // but when it gets changed to this it works
    let iterator = ns[Symbol.iterator]();

    let next = iterator.next();
    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    expect(sum).to.equal(10);

    done();
  });
});

describe('For of', function () {

  it('Can work with iterators at a high level', function (done) {

    let sum = 0;
    let numbers = [1, 2, 3, 4];

    for (let n of numbers) {
      sum += n;
    }

    expect(sum).to.equal(10);

    done();
  });

});

describe('Iterable', function () {

  it('Can be built by implementing Symbol.iterator', function (done) {

    class Company {

      constructor() {
        this.employees = [];
      }

      addEmployees(...names) {
        this.employees = this.employees.concat(names);
      }
      
      //providing my custom iterator
      [Symbol.iterator]() {
        return new ArrayIterator(this.employees);

      }
    }

    class ArrayIterator {
      constructor(array) {
        this.array = array,
        this.index = 0;
      }

      next() {
        var result = { value: undefined, done: true };

        if (this.index < this.array.length) {
          result.value = this.array[this.index];
          result.done = false;
          this.index += 1;
        }

        return result;

      }
    }

    let count = 0;
    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

    for (let employee of company) {
      count += 1;
    }

    expect(count).to.equal(4);

    done();
  });


  it('Can build an iterable', function (done) {

    let numbers = function* () {
      yield 1;
      yield 2;
      yield 3;
    };

    let numbers2 = function* (start, end) {
      for (let i = start; i <= end; i++) {
        yield i;
      }
    };

    let sum = 0;
    let iterator = numbers();
    let next = iterator.next();

    while (!next.done) {
      sum += next.value;
      next = iterator.next();
    }

    let sum2 = 0;
    for (let n of numbers2(1, 5)) {
      sum2 += n;
    }

    expect(sum).to.equal(6);
    expect(sum2).to.equal(15);

    done();

  });

  it('Removing the hard implementation from company class', function (done) {

    class Company {

      constructor() {
        this.employees = [];
      }

      addEmployees(...names) {
        this.employees = this.employees.concat(names);
      }

      *[Symbol.iterator]() {
        for (let e of this.employees) {
          yield e;
        }
      }
    }

    let count = 0;
    let company = new Company();
    company.addEmployees('Tim', 'Sue', 'Joy', 'Tom');

    for (let employee of company) {
      count += 1;
    }

    expect(count).to.equal(4);

    done();
  });

  //Yield caracterize a generator
  it('Showing the lazy and functional aspects of iterator ', function (done) {

    class Company {

      constructor() {
        this.employees = [];
      }

      addEmployees(...names) {
        this.employees = this.employees.concat(names);
      }

      *[Symbol.iterator]() {
        for (let e of this.employees) {
          yield e;
        }
      }
    }

    let filter = function* (items, predicate) {
      for (let item of items) {
        console.log('filter', item);

        if (predicate(item)) {
          yield item;
        }
      }
    };

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

  it('Can take a parameter from next(param)', function (done) {

    let range = function* (start, end) {
      let current = start;
      while (current <= end) {
        let delta = yield current; 
        // over this statement is where you will receive the value that was passed into next, if it doesn´t was passed
        // it will be undefined, and as you can´t pass it when you call next for the first time, it will come as it is shown bellow.
        current += delta || 1;
      }
    }
    
    // low level simulation of the implementation of range
    let range2 = function (start, end) {
      let current = start;
      let first = true;
      return {
        next(delta = 1) {

          let result = { value: undefined, done: true };

          if (!first) {
            current += delta;
          }

          if (current <= end) {
            result.value = current;
            result.done = false;
          }

          first = false;
          return result;
        }
      }
    }

    let result = [];
    let iterator = range2(1, 10);
    let next = iterator.next(); // here you can not pass a parameter
    
    while (!next.done) {
      result.push(next.value);
      next = iterator.next(2);
    }

    expect(result).to.eql([1, 3, 5, 7, 9]);
    done();

  });
});