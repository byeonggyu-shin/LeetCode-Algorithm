/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const n = s.length;
  const dp = new Array(n + 1).fill(0);
  // 빈 문자열의 경우
  dp[0] = 1;

  for (let i = 1; i <= n; i++) {
    // 한 자리 숫자로 해석될 수 있는 경우
    if (s[i - 1] !== "0") {
      dp[i] += dp[i - 1];
    }

    // 두 자리 숫자로 해석될 수 있는 경우
    if (i > 1 && s[i - 2] !== "0" && parseInt(s.substring(i - 2, i)) <= 26) {
      dp[i] += dp[i - 2];
    }
  }

  return dp[n];
};
