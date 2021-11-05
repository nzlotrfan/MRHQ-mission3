const makeStringOnly = (string) => {
  let formattedString = string.replace(/[!,?,-,;,%]/g, " ");
  return formattedString;
};

makeStringOnly("hello%world");

// TEST CASES: “hello world”, “hello%world”, “!hello world”, “;hello?world!”, “hello;world” and “hello world?”.
// I added in the "%"" even though not in the mission
module.exports = makeStringOnly;
