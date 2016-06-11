var expect = require('chai').expect;

describe('WeakSets', function () {

  it('should not have properties & methods that related to the entire set', function (done) {
    var set = new WeakSet();
    expect(set.size).to.equal(undefined);
    expect(set.entries).to.equal(undefined);
    expect(set.values).to.equal(undefined);
    expect(set.forEach).to.equal(undefined);
    done();
  });

  it('should allow objects as a key', function (done) {
    var set = new WeakSet();
    var key = {};
    set.add(key);
    expect(set.has(key)).to.equal(true);
    done();
  });

  it('should remove an item when delete is called', function (done) {
    var set = new Set();
    set.add('Tom');
    set.add('Dick');
    set.add('Harry');
    expect(set.has('Tom')).to.equal(true);
    set.delete('Tom');
    expect(set.has('Tom')).to.equal(false);
    done();
  });


  it('should have no items aftes clear is called', function (done) {
    var set = new Set();
    set.add('Tom');
    set.add('Dick');
    set.add('Harry');
    expect(set.has('Tom')).to.equal(true);
    set.clear();
    expect(set.has('Tom')).to.equal(false);
    done();
  });
});

describe('WeakMaps', function () {
  //IT DOESN ALLOW PRIMITIVES AS KEYS
  it('should not have properties & methods that related to the entire set', function (done) {
    var map = new WeakMap();
    expect(map.size).to.equal(undefined);
    expect(map.entries).to.equal(undefined);
    expect(map.values).to.equal(undefined);
    expect(map.forEach).to.equal(undefined);
    done();
  });

  it('should return the value when get is called with the correct key', function (done) {
    var map = new WeakMap();
    var key = {};
    map.set(key, 29);
    expect(map.get(key)).to.equal(29);
    done();
  });

  it('should remove an item when delete is called', function (done) {
    var map = new WeakMap();
    var key = {};
    map.set(key, 29);
    expect(map.has(key)).to.equal(true);
    map.delete(key);
    expect(map.has(key)).to.equal(false);
    done();
  });

  it('should remove an item when delete is called', function (done) {
    var map = new WeakMap();
    var key = {};
    map.set(key, 29);
    expect(map.has(key)).to.equal(true);
    
    // DOESN´T WORK NODE 6.2.0
    //map.clear();
    //expect(map.has(key)).to.equal(false);
    done();
  });


});

