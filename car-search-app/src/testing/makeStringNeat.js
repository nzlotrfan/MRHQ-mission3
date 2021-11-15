/*
// FIRST ATTEMPT
const makeStringOnly = (string) => {
  let formattedString = string.replace(/[!,?,-,;,%]/g, " ");
  return formattedString;
};

makeStringOnly("hello%world");
module.exports = makeStringOnly;
// TEST CASES: “hello world”, “hello%world”, “!hello world”, “;hello?world!”, “hello;world” and “hello world?”.
*/

// FINAL newMakeStringOnly
// Bonus functionality: If string has a special characted at the beginning or end of the string,
// or if there is a special character in the middle surrounded by a space, then remove special character only and do not put space.
const makeStringNeat = (string) => {
  let temp = string.replace(/[!,?,\-,;,%]/g, " ");
  let formattedString = temp.replace(/\s+/g, " ").trim();
  return formattedString;
};

makeStringNeat("  !!!Hello!new     !!!!!!!    ;;;%world.");
module.exports = makeStringNeat;
