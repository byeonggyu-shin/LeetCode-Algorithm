/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function (board) {
  if (board.length === 0 || board[0].length === 0) return;

  const rows = board.length;
  const cols = board[0].length;

  // DFS 함수 정의
  const dfs = (i, j) => {
    if (i < 0 || i >= rows || j < 0 || j >= cols || board[i][j] !== "O") return;

    board[i][j] = "E"; // 'O'를 'E'로 표시

    // 상하좌우 탐색
    dfs(i + 1, j);
    dfs(i - 1, j);
    dfs(i, j + 1);
    dfs(i, j - 1);
  };

  // 가장자리 'O' 탐색 및 'E'로 표시
  for (let i = 0; i < rows; i++) {
    dfs(i, 0);
    dfs(i, cols - 1);
  }

  for (let j = 0; j < cols; j++) {
    dfs(0, j);
    dfs(rows - 1, j);
  }

  // 보드 순회하여 'O'를 'X', 'E'를 'O'로 변경
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (board[i][j] === "O") {
        board[i][j] = "X";
      } else if (board[i][j] === "E") {
        board[i][j] = "O";
      }
    }
  }
};

var solve = function (board) {
  if (board.length == 0) return null;

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (
        board[i][j] == "O" &&
        (i == 0 || i == board.length - 1 || j == 0 || j == board[0].length - 1)
      ) {
        dfs(board, i, j);
      }
    }
  }

  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[0].length; j++) {
      if (board[i][j] == "W") {
        board[i][j] = "O";
      } else {
        board[i][j] = "X";
      }
    }
  }

  return board;
};

function dfs(board, i, j) {
  if (
    i < 0 ||
    j < 0 ||
    i >= board.length ||
    j >= board[0].length ||
    board[i][j] == "X" ||
    board[i][j] == "W"
  ) {
    return;
  }
  board[i][j] = "W";
  dfs(board, i + 1, j);
  dfs(board, i - 1, j);
  dfs(board, i, j + 1);
  dfs(board, i, j - 1);
  return;
}
