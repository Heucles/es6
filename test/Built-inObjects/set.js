var expect = require('chai').expect;

describe('Sets', function () {

  it('should contain zero items when constructed', function (done) {
    var set = new Set();
    expect(set.size).to.equal(0);
    done();
  });

  it('should contain 1 item when one item is added', function (done) {
    var set = new Set();
    set.add('someValue');
    expect(set.size).to.equal(1);
    done();
  });

  it('should allow objects as a key', function (done) {
    var set = new Set();
    var key = {};
    set.add(key);
    expect(set.has(key)).to.equal(true);
    done();
  });

  it('should contain items when given array is in the constructor', function (done) {
    var set = new Set([1, 2, 3]);
    expect(set.has(2)).to.equal(true);
    done();
  });

  it('should ignore repeated items', function (done) {
    var set = new Set([1, 2, 2, 3]);
    expect(set.has(2)).to.equal(true);
    expect(set.size).to.equal(3);
    done();
  });

  it('should have no items aftes clear is called', function (done) {
    var set = new Set([1, 2, 3]);
    expect(set.size).to.equal(3);
    set.clear();
    expect(set.size).to.equal(0);
    done();
  });

  it('should remove an item when delete is called', function (done) {
    var set = new Set();
    set.add(1);
    set.add(2);
    set.add(3);
    set.delete(1);
    expect(set.size).to.equal(2);
    done();
  });

  it('should call a callback function once for each item when foreach is invoked', function (done) {
    var set = new Set();
    set.add('Tom');
    set.add('Dick');
    set.add('Harry');

    var iterationCount = 0;
    set.forEach(item => iterationCount++);

    expect(iterationCount).to.equal(3);
    done();
  });

  it('should return an iterator of arrays when entries is called', function (done) {
    var set = new Set();
    set.add('Tom');
    set.add('Dick');
    set.add('Harry');

    var entries = set.entries();
    var firstEntry = entries.next().value;
    expect(firstEntry[0]).to.equal('Tom');
    expect(firstEntry[1]).to.equal('Tom');
    done();
  });

  it('should return an iterator of values when values is called', function (done) {
    var set = new Set();
    set.add('Tom');
    set.add('Dick');
    set.add('Harry');

    var values = set.values();
    var firstValue = values.next().value;
    expect(firstValue).to.equal('Tom');
    done();
  });

  it('should be able to be constructed with an iterator', function (done) {
    var set = new Set();
    set.add('1');
    set.add('2');
    set.add('3');

    var set2 = new Set(set.values());    
    expect(set2.size).to.equal(3);
    
    done();
  });
  
    it('should be able to be constructed with another set', function (done) {
    var set = new Set();
    set.add('1');
    set.add('2');
    set.add('3');

    var set2 = new Set(set);
    expect(set2.size).to.equal(3);
    
    done();
  });

});
