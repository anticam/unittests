var assert = require('assert');

describe('Basic Mocha Test', function () {
    it('should deal with objects', function () {
        var obj = { name: 'Jon', gender: 'male' };
        var objB = { name: 'Jon', gender: 'male' };

        obj.should.deep.equal(objB);

        //var objB = obj;
        //obj.should.equal(objB);

        // obj.should.have.property('name').equal('Jon');

        //or
        // obj.should.have.property('name')


    })

})