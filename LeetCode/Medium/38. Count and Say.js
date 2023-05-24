/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return "1";

  const previousString = countAndSay(n - 1);
  let cnt = 1;
  let result = "";

  for (let i = 0; i <= previousString.length; i++) {
    if (previousString[i] !== previousString[i + 1]) {
      result += countAndSay.toString() + previousString[i];
      cnt = 1;
    }
    cnt++;
  }

  return result;
};
