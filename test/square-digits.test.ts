import { squareDigits } from "../7-kyu/square-digits"

import {assert} from "chai";

describe("squareDigits", function() {
  it("should pass a sample test", function() {
    assert.strictEqual(squareDigits(9119), 811181)
    assert.strictEqual(squareDigits(0), 0)
  })
  
});