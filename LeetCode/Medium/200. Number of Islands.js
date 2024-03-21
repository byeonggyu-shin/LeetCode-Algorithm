/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  // 그리드가 비어 있는 경우 또는 null인 경우 0 리턴
  if (!grid || grid.length === 0) {
    return 0;
  }
  const rows = grid.length;
  const cols = grid[0].length;

  // 방문한 셀을 추적하기 위한 배열 생성
  const visited = Array(rows)
    .fill(0)
    .map(() => Array(cols).fill(false));

  // 상하좌우로 인접한 셀을 확인하기 위한 방향 배열을 정의
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  const dfs = (row, col) => {
    // 그리드 범위를 벗어나거나 방문한 셀인 경우 종료
    if (
      row < 0 ||
      col < 0 ||
      row >= rows ||
      col >= cols ||
      grid[row][col] === "0" ||
      visited[row][col]
    ) {
      return;
    }

    visited[row][col] = true;

    // 상하좌우로 이동
    for (const [dx, dy] of directions) {
      dfs(row + dx, col + dy);
    }
  }

  let islandCount = 0;
.
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === "1" && !visited[i][j]) {
        islandCount++;
        dfs(i, j);
      }
    }
  }

  return islandCount;
};
