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
