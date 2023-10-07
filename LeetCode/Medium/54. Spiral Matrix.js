/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  if (matrix.length === 0) {
    return [];
  }

  const spiral = [];
  let top = 0;
  let bottom = matrix.length - 1;
  let left = 0;
  let right = matrix[0].length - 1;

  while (top <= bottom && left <= right) {
    // Traverse from left to right along the top row
    for (let i = left; i <= right; i++) {
      spiral.push(matrix[top][i]);
    }
    top++;

    // Traverse from top to bottom along the rightmost column
    for (let i = top; i <= bottom; i++) {
      spiral.push(matrix[i][right]);
    }
    right--;

    // Check if there are more rows and columns to traverse
    if (top <= bottom && left <= right) {
      // Traverse from right to left along the bottom row
      for (let i = right; i >= left; i--) {
        spiral.push(matrix[bottom][i]);
      }
      bottom--;

      // Traverse from bottom to top along the leftmost column
      for (let i = bottom; i >= top; i--) {
        spiral.push(matrix[i][left]);
      }
      left++;
    }
  }

  return spiral;
};

// 4방향을 변수로 설정하는방식,  dfs 로 탐색하는 방식
