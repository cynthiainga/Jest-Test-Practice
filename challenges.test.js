const { stringLength } = require("./challenges.js");

test("Should output length", () => {
  const text = stringLength("can ing");
  expect(text).toBe("The length is: 7");
});
