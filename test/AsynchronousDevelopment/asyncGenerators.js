var expect = require('chai').expect;

describe('async generators', function () {

  //BASE FUNCTIONS FOR THE TESTS
  function oldPause(delay, callback) {
    setTimeout(function () {
      console.log('Paused for ' + delay + 'ms');
      callback();
    }, delay);
  }

  var Async = function () {
    this.sequence = {};
  };

  Async.prototype.run = function (generator) {
    this.sequence = generator();
    var next = this.sequence.next();
  };

  Async.prototype.resume = function (value) {
    this.sequence.next(value);
  };

  Async.prototype.fail = function (reason) {
    this.sequence.throw(reason);
  };

  var pause = function (delay, asyncContext) {
    setTimeout(function () {
      console.log('Paused for ' + delay + 'ms');
      asyncContext.resume();
    }, delay);
  };

  var getStockPrice = function (asyncContext) {
    setTimeout(function () {
      try {
        //throw Error('there was a problem');
        asyncContext.resume(50);
      } catch (err) {
        asyncContext.fail(err);
      }
    }, 3);
  };

  var executeTrade = function (asyncContext) {
    setTimeout(function () {
      console.log('Trade completed');
      asyncContext.resume();
    }, 3);
  };
  
  
  
  //BASE FUNCTIONS FOR THE TESTS

  it('Should be difficult to read with regular async syntax', function (done) {
    console.log('start');
    oldPause(5, function () {
      console.log('middle');
      oldPause(5, function () {
        console.log('end');
        done();
      });
    });
  });

  it('Should be easier to read now using ES6 generator', function (done) {

    var async = new Async();

    function* main() {
      console.log('start');
      yield pause(5, async);
      console.log('middle');
      yield pause(5, async);
      console.log('end');
      done();
    }

    async.run(main);

  });

  it('Should work with returned data', function (done) {

    var async = new Async();

    function* main() {
      var price = yield getStockPrice(async);
      if (price > 45) {
        yield executeTrade(async);
      } else {
        console.log('trade not made');
      }
      done();
    }

    async.run(main);
  });

  it.skip('Should work with errors', function (done) {

    var async = new Async();

    function* main() {
      try {
        var price = yield getStockPrice(async);
        if (price > 45) {
          yield executeTrade(async);
        } else {
          console.log('trade not made');
        }
      } catch (err) {
        console.log('error' + err.message);
      }
      done();
    }

    async.run(main);
  });

});
  
  
