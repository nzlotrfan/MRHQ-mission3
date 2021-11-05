const newMakeStringOnly = require("./index");

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly("hello!world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly("hello%world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly("!hello world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly(";hello?world!")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly("hello;world")).toBe("hello world");
});

test("Converts any odd characters to spaces", () => {
  expect(newMakeStringOnly("hello world?")).toBe("hello world");
});
