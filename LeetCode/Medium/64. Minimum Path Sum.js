/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  let m = grid.length;
  let n = grid[0].length;
  const dp = Array.from(Array(m), () => Array(n).fill(0));
  // 첫 번째 행의 모든 칸은 오른쪽으로만 이동 가능, 숫자 누적
  for (let i = 0; i < n; i++) {
    if (i === 0) {
      dp[0][0] = grid[0][0];
      continue;
    }
    dp[0][i] = dp[0][i - 1] + grid[0][i];
  }
  // 첫 번째 행의 모든 칸은 아래쪽으로만 이동 가능, 숫자 누적
  for (let i = 0; i < m; i++) {
    if (i === 0) {
      continue;
    }
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }
  // 나머지 칸의 경우, 해당 칸 위쪽, 왼쪽의 칸과 현재 칸의 합산 중 작은 값을 저장
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      if (dp[i - 1][j] + grid[i][j] <= dp[i][j - 1] + grid[i][j]) {
        dp[i][j] = dp[i - 1][j] + grid[i][j];
      } else {
        dp[i][j] = dp[i][j - 1] + grid[i][j];
      }
    }
  }

  return dp[m - 1][n - 1];
};

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const M = grid.length,
    N = grid[0].length;

  for (let i = 0; i < M; i++) {
    for (let j = 0; j < N; j++) {
      if (i === 0 && j === 0) continue;
      // dp배열을 사용하지 않고 직접 파라미터 수정
      // 공간복잡도 개선
      const left = j > 0 ? grid[i][j - 1] : Infinity;
      const top = i > 0 ? grid[i - 1][j] : Infinity;
      // if 문 대신 .min 메소드 사용
      grid[i][j] = Math.min(top + grid[i][j], left + grid[i][j]);
    }
  }

  return grid[M - 1][N - 1];
};
