const { expect } = require('chai');
const { add } = require('../calculator');

describe('Calculator Add Function', () => {

    it('should add two numbers correctly (valid case)', () => {
        expect(add(2, 3)).to.equal(5);
    });

    it('should handle edge case (0 values)', () => {
        expect(add(0, 0)).to.equal(0);
    });

    it('should throw error for invalid input (string)', () => {
        expect(() => add("a", 5)).to.throw();
    });

    it('should handle negative numbers', () => {
        expect(add(-2, -3)).to.equal(-5);
    });

});