import {disemvowel} from "../7-kyu/disemvowel"
import {assert} from "chai"


describe("disemvowel", function() {
  it("shoudl pass a sample test", function() {
    assert.strictEqual(disemvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!");
  })
});