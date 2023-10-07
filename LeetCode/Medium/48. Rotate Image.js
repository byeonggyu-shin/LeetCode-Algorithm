/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
// const rotate = (matrix) => {
//   const rotaedMatrix = [];

//   for (let i = 0; i < matrix.length; i++) {
//     let arr = [];
//     for (let j = matrix.length; j > 0; j--) {
//       arr.push(matrix[j - 1][i]);
//     }
//     rotaedMatrix.push(arr);
//   }

//   return rotaedMatrix;
// };
// 원본 배열을 수정하여 리턴해야 하기 때문에 오답

var rotate1 = function (matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i + 1; j < matrix[i].length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].reverse();
  }
};
