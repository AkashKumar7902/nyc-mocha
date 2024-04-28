const assert = require('assert');
const Arithmetic = require('./arithmetic');

describe('Arithmetic', function () {
    describe('#add()', function () {
        it('should return the sum of two numbers', function () {
            assert.strictEqual(Arithmetic.add(1, 1), 2);
        });
    });

    describe('#subtract()', function () {
        it('should return the difference of two numbers', function () {
            assert.strictEqual(Arithmetic.subtract(5, 3), 2);
        });
    });

    describe('#multiply()', function () {
        it('should return the product of two numbers', function () {
            assert.strictEqual(Arithmetic.multiply(4, 3), 12);
        });
    });

    describe('#divide()', function () {
        it('should return the quotient of two numbers', function () {
            assert.strictEqual(Arithmetic.divide(8, 2), 4);
        });

        it('should throw an error when division by zero', function () {
            assert.throws(() => Arithmetic.divide(5, 0), /Division by zero/);
        });
    });
});
