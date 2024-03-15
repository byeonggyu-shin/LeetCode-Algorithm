/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  // dp, 빈 arr 만들고 채워넣기
  const dp = Array.from(Array(m), () => Array(n).fill(0));

  // 첫 번째 열의 모든 칸은 오른쪽으로만 이동 가능
  for (let i = 0; i < m; i++) {
    dp[i][0] = 1;
  }

  // 첫 번째 행의 모든 칸은 아래쪽으로만 이동 가능
  for (let j = 0; j < n; j++) {
    dp[0][j] = 1;
  }

  // 나머지 칸의 경우, 해당 칸 위쪽과 왼쪽의 칸에서 오는 경우의 수를 합산
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  // 마지막 칸의 값이 곧 목적지까지의 가능한 경로 수
  return dp[m - 1][n - 1];
};
