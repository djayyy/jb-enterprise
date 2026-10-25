import test from "node:test";
import assert from "node:assert/strict";
import { validateAttachments, enquiryContext } from "../src/lib/forms.mjs";
const file = (name, size) => ({ name, size });
test("contact files remain optional", () =>
  assert.equal(validateAttachments([], "contact"), ""));
test("2 GB aggregate boundary, including multiple files", () => {
  assert.equal(
    validateAttachments([file("drawing.pdf", 2_000_000_000)], "quote"),
    "",
  );
  assert.match(
    validateAttachments(
      [file("drawing.pdf", 1_999_999_999), file("photo.jpg", 2)],
      "quote",
    ),
    /2 GB/,
  );
});
test("resume is required and has a 5 MB boundary", () => {
  assert.match(validateAttachments([], "career"), /one resume/);
  assert.equal(validateAttachments([file("CV.PDF", 5_000_000)], "career"), "");
  assert.match(
    validateAttachments([file("cv.pdf", 5_000_001)], "career"),
    /5 MB/,
  );
  assert.match(
    validateAttachments([file("a.pdf", 1), file("b.pdf", 1)], "career"),
    /one resume/,
  );
});
test("disallowed or disguised extensions and empty files are rejected", () => {
  for (const name of ["file.exe", "drawing.pdf.exe", "script.svg"])
    assert.notEqual(validateAttachments([file(name, 10)], "quote"), "");
  assert.match(validateAttachments([file("cv.pdf", 0)], "career"), /empty/);
  assert.match(
    validateAttachments([file("cv.jpg", 5)], "career"),
    /PDF or DOCX/,
  );
});
test("preview count limit is enforced", () =>
  assert.match(
    validateAttachments(
      Array.from({ length: 11 }, () => file("x.pdf", 1)),
      "contact",
    ),
    /10 files/,
  ));
test("context preserves technical punctuation and combines selections", () =>
  assert.equal(
    enquiryContext("?service=Control+%26+instrumentation&part=Valve"),
    "Control & instrumentation · Valve",
  ));
test("context is bounded, removes control characters and ignores unrelated keys", () => {
  assert.equal(enquiryContext("?email=private%40example.com"), "");
  assert.equal(enquiryContext("?need=Hello%0AWorld"), "HelloWorld");
  assert.equal(enquiryContext("?need=" + "x".repeat(250)).length, 200);
});
