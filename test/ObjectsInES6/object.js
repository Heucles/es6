var expect = require('chai').expect;

describe('object', function () {

  // like === but handle some strange scenarios better
  describe('is function', function () {

    it('Should consider positive and negative zero to be different', function () {
      expect(-0 === 0).to.equal(true);
      expect(Object.is(-0, 0)).to.equal(false);
    });


    it('Should consider NaN to be NaN', function () {
      expect(NaN === NaN).to.equal(false);
      expect(Object.is(NaN, NaN)).to.equal(true);
    });
  });

  describe('assign function', function () {

    it('should apply mixins to objects', function () {

      var shark = {
        bite: function (target) {
          target.hurt = true;
        }
      };

      var laser = {
        pewPew: function (target) {
          target.exploded = true;
        }
      };

      var person = {};

      Object.assign(shark, laser);

      shark.pewPew(person);
      expect(person.exploded).to.equal(true);

    });

  });

  describe('property initializer shorthand', function () {

    it('should create properties from local variables ', function () {

      var model = 'Ford';
      var year = 1969;

      var oldWayObject = {
        model: model,
        year: year
      };

      var newWayObject = {
        model,
        year
      };

      expect(oldWayObject).to.eql(newWayObject);

    });

  });

  describe('property method shorthand', function () {

    it('should create methods using shorthand', function () {

      var server = {
        getPort() {
          return 8000;
        }
      };

      expect(server.getPort()).to.equal(8000);

    });

  });

  describe('computed property names ', function () {

    it('should support variables for property names', function () {

      function oldWayToCreateObject(propName, propValue) {
        var obj = {};
        obj[propName] = propValue;
        return obj;
      }

      function newWayToCreateObject(propName, propValue) {
        return {
          [propName]: propValue
        };
      }

     expect(oldWayToCreateObject('teste',123)).to.eql(newWayToCreateObject('teste',123)); 

    });

  });

});