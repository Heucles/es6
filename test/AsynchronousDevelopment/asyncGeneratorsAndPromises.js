var expect = require('chai').expect;

describe('async generators with promises', function () {

  var async = {};
  async.run = function (generator) {
    var sequence;
    var process = function (result) {
      result.value.then(function (value) {
        if (!result.done) {
          process(sequence.next(value));
        }
      }).catch(function (err) {
        if (!result.done) {
          process(sequence.throw(err));
        }
      });
    }
    sequence = generator();
    var next = sequence.next();
    process(next);
  }

  var getStockPrice = function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(50);
      }, 3);
    });
  };

  var getStockPriceWithError = function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        reject(new Error('A forced problem occurred!'));
      }, 3);
    });
  };

  var executeTrade = function () {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve();
      }, 3);
    });
  };
  
  //BASE FUNCTIONS FOR THE TESTS
  
  it('Should also work with promises', function (done) {

    function* main() {
      try {
        var price = yield getStockPrice();
        if (price > 45) {
          yield executeTrade();
        } else {
          console.log('trade not made');
        }
      } catch (err) {
        console.log('error ' + err.message);
      }
      done();
    }

    async.run(main);
  });

  it('Should also work with rejected promises', function (done) {

    function* main() {
      try {
        var price = yield getStockPriceWithError();
        if (price > 45) {
          yield executeTrade();
        } else {
          console.log('trade not made');
        }
      } catch (err) {
        console.log('error ' + err.message);
      }
      done();
    }

    async.run(main);
  });

});
  
  
