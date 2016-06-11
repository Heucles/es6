var expect = require('chai').expect;

describe('Proxies', function () {

  it('Should let you intercept gets', function () {
    var unicorn = {
      legs: 4,
      color: 'brown',
      horn: true
    };

    var proxyUnicorn = new Proxy(unicorn, {
      get: function (target, property) {
        if (property === 'color') {
          return 'awesome ' + target[property];
        }

        return target[property];
      }
    });

    expect(proxyUnicorn.legs).to.equal(4);
    expect(proxyUnicorn.color).to.equal('awesome brown');
  });

  it('Should let you intercept sets', function () {
    var unicorn = {
      legs: 4,
      color: 'brown',
      horn: true
    };

    var proxyUnicorn = new Proxy(unicorn, {
      set: function (target, property, value) {
        if (property === 'horn' && value === false) {
          console.log('You cannot set the horn to false!!!');
        } else {
          target[property] = value;
        }
      }
    });
    
    proxyUnicorn.legs = 5;
    proxyUnicorn.horn = false;
    expect(proxyUnicorn.legs).to.equal(5);
    expect(proxyUnicorn.horn).to.equal(true);
  });
  
    it('Should let you intercept functions', function () {
    var unicorn = {
      legs: 4,
      color: 'brown',
      horn: true,
      hornAttack : function (target) {
        return target + ' was obliterated!';
      }
    };
    
    unicorn.hornAttack = new Proxy(unicorn.hornAttack,{
      apply: function (target, context, args) {
        if (context !== unicorn){
          return 'nobody can use unicorn horn but the unicorn itself';
        }else{
          return target.apply(context, args);
        }
      }
    });
    
    var thief = {name:'Rupert'};
    thief.attack = unicorn.hornAttack;
    thief.attack();

    expect(thief.attack('An Inocent person')).to.equal('nobody can use unicorn horn but the unicorn itself');
     expect(unicorn.hornAttack('An Inocent person')).to.equal('An Inocent person was obliterated!');
  });
  
});
