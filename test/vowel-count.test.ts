
import { getCount } from "../7-kyu/vowel-count"
import {assert} from "chai";


describe("getCount", function(){
  it ("should pass a sample test", function(){
    assert.strictEqual(getCount("abracadabra"), 5)
  })
})