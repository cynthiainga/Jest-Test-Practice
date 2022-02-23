exports.stringLength = (str) => {
  if (str.length > 0 && str.length <= 10) {
    return `The length is: ${str.length}`;
  }
  throw new Error("Those conditions are not met");
};

exports.reverseString = (str) => {
  const reverseStr = str.split("").reverse().join("");
  return reverseStr;
};
class Calculator {
  constructor() {}

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    return a / b;
  }
}

const newCalc = new Calculator();

exports.newCalc = newCalc;

exports.capitalizeString = (str) => {
  const capitalized = str.charAt(0).toUpperCase() + str.slice(1);
  return capitalized;
};
