import test from "node:test";
import assert from "node:assert/strict";
import {
  createHumanQuestion,
  validHumanAnswer,
} from "../src/lib/human-check.mjs";
test("captcha generates exactly four lowercase letters with matching answer", () => {
  for (const value of [0, 0.2, 0.5, 0.999999]) {
    const q = createHumanQuestion(() => value);
    assert.match(q.prompt, /^[a-z]{4}$/);
    assert.equal(
      q.prompt,
      "abcdefghijklmnopqrstuvwxyz"[Math.floor(value * 26)].repeat(4),
    );
    assert.equal(q.answer, q.prompt);
    assert.equal(validHumanAnswer(q.prompt, q.answer), true);
  }
  const values = [0, 0.04, 0.08, 0.12];
  let i = 0;
  assert.equal(createHumanQuestion(() => values[i++]).prompt, "abcd");
});
test("captcha rejects empty, wrong, uppercase, numeric, malformed and non-string answers", () => {
  for (const input of [
    "",
    "   ",
    "abc",
    "abcde",
    "ABCD",
    "Abcd",
    "1234",
    "ab1d",
    "wxyz",
    null,
    undefined,
    1234,
  ])
    assert.equal(validHumanAnswer(input, "abcd"), false);
  assert.equal(validHumanAnswer(" abcd ", "abcd"), true);
});
