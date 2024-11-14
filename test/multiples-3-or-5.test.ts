import { assert } from "chai";
import { strictEqual } from "assert";
import { multiplesThreeOrFive } from "../6-kyu/multiples-3-or-5"

describe("mutiples of 3 or 5", function() {
  it("should provide sum of multiples of 3 or 5", function() {
    strictEqual(multiplesThreeOrFive(10), 23);
  })
})
