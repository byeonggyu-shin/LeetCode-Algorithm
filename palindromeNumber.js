/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {

  // 0 === x[x.length-1]
  // 2 === x[x.length-2]
  // .....  true

  let answer = String(x)
  for (let i = 0; i < Math.ceil(answer.length / 2); i++) {
    if (answer[i] === answer[answer.length - i + 1]) {
      return true
    } else {
      return false
    };
  }
};
  