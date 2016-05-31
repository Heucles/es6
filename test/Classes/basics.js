'use strict';

var expect = require('chai').expect;

describe('Testing the class keyword', function () {

  it('Can create a class', function (done) {

    class Employee {
      doWork() {
        return 'complete!';
      }

      getName() {
        return 'Heucles';
      }
    }

    let employee = new Employee();

    expect(employee.doWork()).to.equal('complete!');
    expect(employee.getName()).to.equal('Heucles');
    expect(Employee.prototype.doWork.call(employee)).to.equal('complete!');

    done();

  });

  it('Can have a constructor', function (done) {

    class Employee {

      constructor(name) {
        this._name = name;
      }

      doWork() {
        return 'complete!';
      }

      getName() {
        return this._name;
      }
    }

    let employee1 = new Employee('Heucles');
    let employee2 = new Employee('Daniel');

    expect(employee1.getName()).to.equal('Heucles');
    expect(employee2.getName()).to.equal('Daniel');
    expect(Employee.prototype.getName.call(employee1)).to.equal('Heucles');

    done();

  });

  it('Can have a getters and setters', function (done) {

    class Employee {

      constructor(name) {
        //now it is accessing the setter, and not the property directly as it was with this._name
        this.name = name;
      }

      doWork() {
        return 'complete!';
      }

      get name() {
        //we need to be careful with the names that we use for those, because if they have the same name as the getter it will conflict so the use
        // of underscore is a good practice 
        return this._name;
      }
      
      //just comment the setter to make it read-only
      set name(newValue){
        if (newValue){
          this._name = newValue;
        }        
      }
    }

    let employee1 = new Employee('Heucles');
    let employee2 = new Employee('Daniel');

    expect(employee1.name).to.equal('Heucles');
    expect(employee2.name).to.equal('Daniel');
    
    employee1.name = 'Heucles Junior';
    expect(employee1.name).to.equal('Heucles Junior');

    done();

  });

});