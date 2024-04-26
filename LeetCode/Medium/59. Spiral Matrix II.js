/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
  const save = Array.from(Array(n), () => Array(n).fill(0));

  let cnt = 1;

  // 각 경계의 위치를 지정
  let left = 0;
  let right = n - 1;
  let top = 0;
  let bottom = n - 1;

  // 나선형으로 채우기
  while (cnt <= n * n) {
    // 오른쪽 방향으로 이동하며 채우기
    for (let i = left; i <= right; i++) {
      save[top][i] = cnt;
      cnt++;
    }
    top++; // 위쪽 경계를 한 칸 아래로 이동

    // 아래쪽 방향으로 이동하며 채우기
    for (let i = top; i <= bottom; i++) {
      save[i][right] = cnt;
      cnt++;
    }
    right--; // 오른쪽 경계를 한 칸 왼쪽으로 이동

    // 왼쪽 방향으로 이동하며 채우기
    for (let i = right; i >= left; i--) {
      save[bottom][i] = cnt;
      cnt++;
    }
    bottom--; // 아래쪽 경계를 한 칸 위로 이동

    // 위쪽 방향으로 이동하며 채우기
    for (let i = bottom; i >= top; i--) {
      save[i][left] = cnt;
      cnt++;
    }
    left++; // 왼쪽 경계를 한 칸 오른쪽으로 이동
  }

  return save;
};
