var expect = require('chai').expect;

describe('Maps', function () {

  it('should contain zero items when constructed', function (done) {
    var map = new Map();
    expect(map.size).to.equal(0);
    done();
  });

  it('should contain 1 item when one item is added', function (done) {
    var map = new Map();
    map.set('theKey', 'someValue');
    expect(map.size).to.equal(1);
    done();
  });

  it('should return the value when get is called with the correct key', function (done) {
    var map = new Map();
    map.set('age', 29);
    expect(map.get('age')).to.equal(29);
    done();
  });

  it('should allow object as key', function (done) {
    var map = new Map();
    var heucles = { 'name': 'Heucles' };
    map.set(heucles, 29);
    expect(map.get(heucles)).to.equal(29);
    done();
  });

  it('should contain the items when a given array of arrays is passed on the constructor', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);
    expect(map.size).to.equal(4);
    done();
  });

  it('should not allow duplicated keys and the latest values should prevale', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);
    map.set('weight', '91Kg');
    expect(map.get('weight')).to.equal('91Kg');
    done();
  });

  it('should have no items aftes clear is called', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);
    expect(map.size).to.equal(4);
    map.clear();
    expect(map.size).to.equal(0);
    done();
  });

  it('should remove an item when delete is called', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);
    map.delete('name');
    expect(map.size).to.equal(3);
    done();
  });

  it('should call a callback function once for each item when foreach is invoked', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);

    var iterationCount = 0;
    map.forEach(item => iterationCount++);

    expect(iterationCount).to.equal(4);
    done();
  });

  it('should support the for of iteration', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);

    var iterationCount = 0;

    for (var [key, value] of map) {
      // an item is an array like ['name', 'Heucles']
      iterationCount++;
    }

    expect(iterationCount).to.equal(4);
    done();
  });

  it('should return an iterator of arrays when entries is called', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);
    var entries = map.entries();
    var firstEntry = entries.next().value;
    expect(firstEntry[0]).to.equal('name');
    expect(firstEntry[1]).to.equal('Heucles');
    done();
  });

  it('should return an iterator of values when values is called', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);

    var values = map.values();
    var firstValue = values.next().value;
    expect(firstValue).to.equal('Heucles');
    done();
  });

  it('should be able to be constructed with an iterator', function (done) {
    var map = new Map([['name', 'Heucles'], ['age', 29], ['weight', '92Kg'], ['height', '1.95']]);

    var map2 = new Map(map.entries());
    expect(map2.size).to.equal(4);

    done();
  });

});
