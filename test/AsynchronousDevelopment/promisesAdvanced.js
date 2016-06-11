var expect = require('chai').expect;

describe('Promises Advanced', function () {
  
  //BASE FUNCTIONS FOR THE TESTS
  
  function getOrder(orderId) {
    return Promise.resolve({ userId: 35 });
  }

  function getUser(userId) {
    return Promise.resolve({ companyId: 18 });
  }

  function getCompany(companyId) {
    return Promise.resolve({ name: 'Pluralsight' });
  }

  function getCourse(courseId) {
    return Promise.resolve({ courseId: courseId });
  }
  //BASE FUNCTIONS FOR THE TESTS

  it('Should chain sequentially using then', function (done) {
    getOrder(3).then(function (order) {
      return getUser(order.userId);
    }).then(function (user) {
      return getCompany(user.companyId);
    }).then(function (company) {
      expect(company.name).to.equal('Pluralsight');
      done();
    }).catch(function (err) {
      //handle error
    });
  });

  it('Should resolve after the first promise', function (done) {
    let coursesIds = [1, 2, 3];
    let promises = [];

    for (let i = 0; i < coursesIds.length; i++) {
      promises.push(getCourse(coursesIds[i]));
    }
    Promise.race(promises).then(function (firstValue) {
      console.log(firstValue);
      expect(firstValue).to.eql({ courseId: 1 });
      done();
    })
  });

});