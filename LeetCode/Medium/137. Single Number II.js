/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  // 32비트의 모든 위치에 대해 나타나는 빈도를 계산하기 위한 배열
  const bitCnt = new Array(32).fill(0);

  // 각 숫자의 각 비트 위치에 대해 빈도를 계산
  for (const num of nums) {
    for (let i = 0; i < 32; i++) {
      if ((num >> i) & 1) {
        bitCnt[i]++; // i번째 비트가 1이면 해당 비트 위치의 빈도 증가
      }
    }
  }

  let ans = 0;

  // 각 비트 위치에 대해, 3으로 나눈 나머지가 1이면 해당 비트는 한 번 나타나는 요소의 비트
  for (let i = 0; i < 32; i++) {
    if (bitCnt[i] % 3 === 1) {
      ans |= 1 << i; // i번째 비트가 1이면 해당 비트를 결과에 설정
    }
  }

  return ans;
};

var singleNumber = function (nums) {
  let ones = 0;
  let twos = 0;
  for (let num of nums) {
    // XOR된 후, twos가 0인 비트만 유지
    ones = (ones ^ num) & ~twos;
    // XOR된 후, ones가 0인 비트만 유지
    twos = (twos ^ num) & ~ones;
  }
  return ones;
};
