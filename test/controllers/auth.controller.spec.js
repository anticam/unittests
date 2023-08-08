var assert = require('assert');
var authController = require('../../controllers/auth.controller');
var expect = require('chai').expect;
var should = require('chai').should();



describe('AuthController', function () {

    beforeEach(function () {
        console.log('running before each');
        authController.setRoles(['user']);
    })

    describe('isAuthorized', function () {

        it('Should return false if not authorized', function () {
            //authController.setRoles(['user']);
            var isAuth = authController.isAuthorized('admin');
            //assert.equal(false, isAuth);
            //assert.equal(false, authController.isAuthorized('admin'))
            expect(isAuth).to.be.false;

        })

        it('Should return true if authorized', function () {
            authController.setRoles(['user', 'admin']);
            var isAuth = authController.isAuthorized('admin');
            isAuth.should.be.true;

            //assert.equal(true, authController.isAuthorized('admin'))
        })

        it('Should not allow a get if not authorized');
        it('Should allow get if authorized');



    })

    describe('isAuthorizedAsync', function () {
        it('Should return false if not authorized', function (done) {
            //this.timeout(2500);
            //authController.setRoles(['user']);
            authController.isAuthorizedAsync('admin',
                function (isAuth) {
                    assert.equal(false, isAuth);
                    done();

                })
        })
    })
})