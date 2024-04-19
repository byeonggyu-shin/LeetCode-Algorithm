/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
  let n = triangle.length;

  // 가장 아래 층부터 시작하여 최소 경로 합을 업데이트
  for (let row = n - 2; row >= 0; row--) {
    for (let col = 0; col <= row; col++) {
      // 현재 위치에서 가능한 다음 위치들 중 최소값을 찾고,
      // 현재 위치의 값과 더하여 현재 위치를 업데이트
      triangle[row][col] += Math.min(
        triangle[row + 1][col],
        triangle[row + 1][col + 1]
      );
    }
  }

  return triangle[0][0];
};
