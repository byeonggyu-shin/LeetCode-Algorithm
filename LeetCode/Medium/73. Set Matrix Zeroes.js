/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
  let m = matrix.length;
  let n = matrix[0].length;

  const checkZero = [];
  // 현재 숫자가 0이면 idx 저장
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        checkZero.push([i, j]);
      }
    }
  }
  // 0이 없다면 그대로 리턴
  if (!checkZero.length) return matrix;

  // 0이 있는 경우 해당 행열 0할당
  while (checkZero.length) {
    for (let i = 0; i < n; i++) {
      matrix[checkZero[0][0]][i] = 0;
    }
    for (let j = 0; j < m; j++) {
      matrix[j][checkZero[0][1]] = 0;
    }
    checkZero.shift();
  }

  return matrix;
};
