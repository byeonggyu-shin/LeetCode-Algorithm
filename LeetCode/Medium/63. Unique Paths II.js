/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
  let x = obstacleGrid[0].length;
  let y = obstacleGrid.length;

  const grid = Array.from(Array(y), () => Array(x).fill(0));

  // 첫 번째 행의 모든 칸은 오른쪽으로만 이동 가능, 장애물 만날시 이동 불가
  for (let i = 0; i < x; i++) {
    if (obstacleGrid[i][0] === 1) break;
    grid[i][0] = 1;
  }

  // 첫 번째 행의 모든 칸은 아래쪽으로만 이동 가능, 장애물 만날시 이동 불가
  for (let j = 0; j < y; j++) {
    if (obstacleGrid[0][j] === 1) break;
    grid[0][j] = 1;
  }

  // 나머지 칸의 경우, 해당 칸 위쪽과 왼쪽의 칸에서 오는 경우의 수를 합산 , 장애물 만날시 이동 불가
  for (let i = 1; i < x; i++) {
    for (let j = 1; j < y; j++) {
      if (obstacleGrid[i][j] === 1) continue;
      grid[i][j] = grid[i - 1][j] + grid[i][j - 1];
    }
  }

  // 마지막 칸의 값이 곧 목적지까지의 가능한 경로 수
  return grid[m - 1][n - 1];
};
