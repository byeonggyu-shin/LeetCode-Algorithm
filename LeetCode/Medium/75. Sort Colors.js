/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  return nums.sort((a, b) => a - b);
};

var sortColors = function (nums) {
  // 카운트 배열 초기화
  let cnt = [0, 0, 0]; // red, white, blue

  // 각 색깔의 개수를 카운팅
  for (let num of nums) {
    cnt[num]++;
  }

  // 정렬된 결과를 저장할 배열
  let idx = 0;

  // 빨간색부터 시작하여 순서대로 배열에 추가
  for (let i = 0; i < cnt[0]; i++) {
    nums[idx++] = 0;
  }

  // 흰색 추가
  for (let i = 0; i < cnt[1]; i++) {
    nums[idx++] = 1;
  }

  // 파란색 추가
  for (let i = 0; i < cnt[2]; i++) {
    nums[idx++] = 2;
  }

  return nums;
};
