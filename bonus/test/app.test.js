const assert = require('assert');
const { sum, double } = require('../app');

describe("Operations", () => {
    describe("Sum", () => {
        it("should sum 3 values and return 6", () => {
            const result = sum(1,2,3);

            assert.strictEqual(result, 6);
        });

        it("should sum 4 values and return 8", () => {
            const result = sum(2,3,1,2);
            assert.strictEqual(result, 8);
        });
    });

    describe("Double", () => {
        it("should double 2 and return 4", async () => {
            const result = await double(2);
            assert.strictEqual(result, 4);
        });
    });
})