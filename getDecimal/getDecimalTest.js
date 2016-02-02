/**
 * Created by Julia on 02.02.2016.
 */
describe("getDecimal", function() {
    it("returns decimal of 1.2 as 0.2", function() {
        assert.equal(getDecimal(1.2), 0.2);
    });

    it("returns decimal of 12.345 as 0.345", function() {
        assert.equal(getDecimal(12.345), 0.345);
    });

    it("returns decimal of -1.2 as 0.2", function() {
        assert.equal(getDecimal(-1.2), 0.2);
    });

    it("returns decimal of 10 as 0", function() {
        assert.equal(getDecimal(10), 0);
    });
});