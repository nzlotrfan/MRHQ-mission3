const makeStringNeat = require("./makeStringNeat");

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("hello!world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("hello%world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("!hello world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat(";hello?world!")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("hello;world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("hello world?")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringNeat("  !!!hello!     !!!!!!!    ;;;%world")).toBe(
    "hello world"
  );
});
