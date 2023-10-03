/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
  if (nums.length === 1) return 0;
  if (nums.length === 2) return 1;

  let cnt = 1;
  let position = 0;
  let max = 0;

  while (position <= nums.length - 1) {
    max = Math.max(...nums.slice(position, position + nums[position]));
    position = max;
    cnt++;
  }
  return cnt;
};

// nums 안에서 가장 긴 방법을 찾는다.

// 0부터 length까지의 길이
// nums[0] 의 값부터 for문으로 가장 큰 수 찾아?
// 가장 멀리 까지 갈 방법을 찾는다?
// 완전 탐색?
// 인덱스 + value 값

// 2 3 4 5 6 7
// 2 9 3 8 4 7 5
