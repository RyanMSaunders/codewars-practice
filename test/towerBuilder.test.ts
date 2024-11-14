import { towerBuilder } from "../6-kyu/towerBuilder"
import { deepEqual } from "assert"

describe("towerBuilder", function() {
  it("should pass test", function() {
    deepEqual(towerBuilder(1), ["*"]);
    deepEqual(towerBuilder(2), ["*", "***"])
    deepEqual(towerBuilder(3), ["*", "***", "*****"])

  })
})