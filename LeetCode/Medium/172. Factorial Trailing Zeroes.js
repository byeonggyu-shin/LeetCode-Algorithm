/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  let cnt = 0;
  for (let i = 5; i <= n; i *= 5) {
    cnt += Math.floor(n / i);
  }
  return cnt;
};
