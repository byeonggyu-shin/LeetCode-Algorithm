/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  const numArr = [];

  for (let i = 0; i < numRows; i++) {
    let e = [];
    for (let j = 0; j <= i; j++) {
      if (i === j) {
        e.push(1);
      } else {
        e.push(
         
          j === 0 ? numArr[i -1][j] : numArr[i-1][j-1] + numArr[i-1][j]
        );
      }
    }
    numArr.push(e);
  }

  return numArr;
};

console.log(generate(5));
// 1
// 1  1
// 1 1+1 1
// 1 1+(1+1) (1+1)+1 1
