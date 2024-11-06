import { assert } from "chai";
import { highAndLow } from '../7-kyu/high-and-low';




describe("Example Tests", function() {
  it("Test 1", function() {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"),"42 -9" );
  });
  it("Test 2", function() {
    assert.strictEqual(highAndLow("1 2 3"), "3 1");
  });
})
