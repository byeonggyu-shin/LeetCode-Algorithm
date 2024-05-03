/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) {
    return false; // s3의 길이가 s1과 s2의 길이의 합과 다르면 false
  }

  const dp = Array(s1.length + 1)
    .fill()
    .map(() => Array(s2.length + 1).fill(false));

  dp[0][0] = true;

  // s1을 사용하여 s3를 구성할 수 있는지 확인
  for (let i = 1; i <= s1.length; i++) {
    dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
  }

  // s2를 사용하여 s3를 구성할 수 있는지 확인
  for (let j = 1; j <= s2.length; j++) {
    dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
  }

  // s1과 s2를 사용하여 s3를 구성할 수 있는지 확인
  for (let i = 1; i <= s1.length; i++) {
    for (let j = 1; j <= s2.length; j++) {
      dp[i][j] =
        (dp[i - 1][j] && s1[i - 1] === s3[i + j - 1]) ||
        (dp[i][j - 1] && s2[j - 1] === s3[i + j - 1]);
    }
  }

  return dp[s1.length][s2.length];
};
