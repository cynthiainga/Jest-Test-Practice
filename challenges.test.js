const { stringLength } = require("./challenges.js");

test("Should output length", () => {
  const text = stringLength("can ing");
  expect(text).toBe("The length is: 7");
});

test("Reverse the string", () => {
  const texts = reverseString("can-ing");
  expect(texts).toBe("gni-nac");
});
