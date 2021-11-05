const makeStringOnly = require("./index");

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly("hello!world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly("hello%world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly("!hello world")).toBe(" hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly(";hello?world!")).toBe(" hello world ");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly("hello;world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(makeStringOnly("hello world?")).toBe("hello world ");
});
