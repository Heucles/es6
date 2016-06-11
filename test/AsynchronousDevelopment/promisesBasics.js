var expect = require('chai').expect;

describe('Promise Basics', function () {

  it('Should execute the callback given to then', function (done) {

    var promise = new Promise(function (resolve, reject) {
      resolve();
    });

    promise.then(function () {
      done();
    })
  });


  it('Should receive the resolved data', function (done) {

    var promise = new Promise(function (resolve, reject) {
      resolve(1);
    });

    promise.then(function (data) {
      expect(data).to.equal(1);
      done();
    });
  });

  it('Should fail when rejected', function (done) {

    var promise = new Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });

    promise.then(function () {
      //success
    }, function (error) {
      expect(error.message).to.equal('oh noes!');
      done();
    });

  });

  it('Should have a catch', function (done) {

    var promise = new Promise(function (resolve, reject) {
      reject(Error('oh noes!'));
    });

    promise.catch(function (error) {
      expect(error.message).to.equal('oh noes!');
      done();
    });

  });

  it('Should compose when resolved with a promise', function (done) {

    var previousPromise = new Promise(function (resolve, reject) {
      resolve(3);
    });

    var promise = new Promise(function (resolve, reject) {
      resolve(previousPromise);
    });

    promise.then(function (data) {
      expect(data).to.equal(3);
      done();
    });

  });

  it('Should have a static resolve', function (done) {

    var previousPromise = Promise.resolve(3);

    var promise = Promise.resolve(previousPromise);

    promise.then(function (data) {
      expect(data).to.equal(3);
      done();
    });
  });

  it('Should have a static reject', function (done) {

    var previousPromise = Promise.reject(new Error('oh noes!'));

    var promise = Promise.resolve(previousPromise);

    promise.catch(function (error) {
      expect(error.message).to.equal('oh noes!');
      done();
    });
  });

  it('Should be asynchronous', function (done) {

    var async = false;
    var promise = Promise.resolve(3);

    promise.then(function () {
      expect(async).to.equal(true);
      done();
    });

    async = true;
  });

});