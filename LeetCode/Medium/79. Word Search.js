/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const row = board.length;
  const col = board[0].length;

  // 방문 여부를 저장하는 배열
  const visited = Array.from(Array(row), () => Array(col).fill(false));

  const dfs = (row, col, index) => {
    // 현재 위치가 보드 범위를 벗어나거나 이미 방문한 경우 종료
    if (row < 0 || row >= row || col < 0 || col >= col || visited[row][col]) {
      return false;
    }

    // 현재 위치의 문자가 현재 탐색 중인 단어의 문자와 일치하지 않는 경우 종료
    if (board[row][col] !== word[index]) {
      return false;
    }

    // 탐색이 마지막 문자까지 완료된 경우 단어가 존재함을 반환
    if (index === word.length - 1) {
      return true;
    }

    // 현재 위치를 방문 표시
    visited[row][col] = true;

    // 상하좌우에 대해 재귀적으로 탐색
    const directions = [
      [-1, 0],
      [1, 0],
      [0, -1],
      [0, 1],
    ];
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;
      if (dfs(newRow, newCol, index + 1)) {
        return true;
      }
    }

    // 현재 위치를 다시 방문할 수 있도록 표시를 되돌림
    visited[row][col] = false;

    return false;
  };

  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      if (dfs(i, j, 0)) {
        return true;
      }
    }
  }

  return false;
};
