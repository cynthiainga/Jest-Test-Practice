const { stringLength } = require("./challenges.js");

test("Should output length", () => {
  const text = stringLength("can ing");
  expect(text).toBe("The length is: 7");
});

test("Reverse the string", () => {
  const texts = reverseString("can-ing");
  expect(texts).toBe("gni-nac");
});

describe("My calculator action", () => {
  test("Add calculator", () => {
    expect(newCalc.add(4, 2)).toBe(6);
  });

  test("subtract calculator", () => {
    expect(newCalc.subtract(4, 2)).toBe(2);
  });
  test("multiple calculator", () => {
    expect(newCalc.multiply(4, 2)).toBe(8);
  });
});

test("capitalize String the string", () => {
  const text = capitalizeString("candy inga");
  expect(text).toBe("Candy inga");
});
