/**
 * @param {number} n
 * @return {number[]}
 */
var grayCode = function (n) {
  const result = [];
  const numCodes = 1 << n; // 2^n

  // i는 0부터 2^n - 1까지 증가
  for (let i = 0; i < numCodes; i++) {
    const gray = i ^ (i >> 1);
    result.push(gray);
  }

  return result;
};
