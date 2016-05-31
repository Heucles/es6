'use strict';

var expect = require('chai').expect;

describe('Testing the inheritance with class keyword', function () {

  it('Can have a super class', function (done) {

    class Person {

      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue) {
        if (newValue) {
          this._name = newValue
        }

      }
    }

    class Employee extends Person {

      doWork() {
        return `${this._name} is working!`;
      }

    }

    let person1 = new Person('Heucles');
    let employee1 = new Employee('Daniel');

    expect(person1.name).to.equal('Heucles');
    expect(employee1.name).to.equal('Daniel');
    expect(employee1.doWork()).to.equal('Daniel is working!');

    done();

  });

  it('Child class can access super class properties from its own constructor', function (done) {

    class Person {

      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue) {
        if (newValue) {
          this._name = newValue
        }

      }
    }

    class Employee extends Person {

      constructor(title, name) {
        super(name);
        this._title = title;
      }

      get title() {
        return this._title;
      }

      doWork() {
        return `${this._name} is working!`;
      }

    }

    let employee1 = new Employee('Developer', 'Daniel');

    expect(employee1.name).to.equal('Daniel');
    expect(employee1.title).to.equal('Developer');
    expect(employee1.doWork()).to.equal('Daniel is working!');

    done();

  });


  it('Child class can access super class properties from its own constructor, and also override methods', function (done) {

    class Person {

      constructor(name) {
        this.name = name;
      }

      get name() {
        return this._name;
      }

      set name(newValue) {
        if (newValue) {
          this._name = newValue
        }
      }

      doWork() {
        return `${this._name} is working and being happy!`;
      } 
                  
      //here we are overriding the behavior for the object class, that every time it doesn´t extrnds anything it extends object for default 
      toString() {
        return this.name;
      }

    }

    class Employee extends Person {

      constructor(title, name) {
        super(name);
        this._title = title;
      }

      get title() {
        return this._title;
      }

      doWork() {
        //super() //a call to super here would call the same name method on the super
        //super.anotherMethod() //a call to super anotherMethod explicetly 
        return `${this.name} is working and being paid!`;
      }

    }

    let person1 = new Person('Heucles');
    let employee1 = new Employee('Developer', 'Daniel');

    expect(person1.doWork()).to.equal('Heucles is working and being happy!');
    expect(employee1.doWork()).to.equal('Daniel is working and being paid!');
    expect(person1.toString()).to.equal('Heucles');
    expect(employee1.toString()).to.equal('Daniel');

    done();

  });


});