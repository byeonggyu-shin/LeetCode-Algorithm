/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
  // 매트릭스 0,0 비교, => 아니다 0,1 1,0 각각 비교
  if (matrix[0][0] === target) {
    return true;
  } else {
    // 타겟이 0인덱스 열이다.
    for (let m = 0; m < matrix.length; m++) {
      // 타겟이 해당 열이다

      // 마지막 행 막는 좋은 방법을 찾아라. 조건을 걸면 매 반복시 조건을 거쳐야해 능률이 떨어짐.
      if (matrix[m + 1]) {
        if (matrix[m][0] <= target && matrix[m + 1][0] > target) {
          for (const n of matrix[m]) {
            if (n === target) {
              return true;
            } else {
              continue;
            }
          }
          // 해당 열에 없지만 다음열 보단 작다.
          return false;
        } else {
          // 디음열로 진행
          continue;
        }
      } else {
        for (const n of matrix[m]) {
          if (n === target) {
            return true;
          } else {
            continue;
          }
        }
        // 해당 열에 없지만 다음열 보단 작다.
        return false;
      }
    }

    // 모든 반복후 찾지 못한다면
    return false;
  }
};

// BF 방식이 아닌 DP 방식으로 차트에서 포인트를 움직이는 벙식으로 구현

// var searchMatrix = function(matrix, target) {
//   let row = 0;
//   let cell = matrix[0].length - 1;

//   while (row <= matrix.length - 1) {
//       if (matrix[row][cell] === target) {
//           return true;
//       }
//       else if(matrix[row][cell] > target) {
//           cell--;
//       }
//       else {
//           row++;
//       }
//   }

//   return false;
// };
