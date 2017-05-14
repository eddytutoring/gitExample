var expect = require('chai').expect,
    math = require('../src/test/sum');

describe('sum', function () {
    it('should return 2 for (1, 1)', function () {
        expect(math.sum(1, 1)).to.equal(2);
    });
    it('should return 0 for (1, -1)', function () {
        expect(math.sum(1, -1)).to.equal(0);
    });
});