/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let string = "";
  let result = [];

  function dfs(string, left, right) {
    if (left === 0 && right === 0) {
      result.push(string);
      return;
    }
    if (left > 0) {
      dfs(string + "(", left - 1, right);
    }
    if (right > left) {
      dfs(string + ")", left, right - 1);
    }
  }

  dfs(string, n, n);

  return result;
};
