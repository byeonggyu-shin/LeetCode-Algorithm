/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var wiggleSort = function (nums) {
  nums.sort((a, b) => a - b);

  let mid = 1;

  // 중간값이 배열의 중간보다 작거나 같은 경우까지 반복합니다.
  while (mid <= nums.length - 2) {
    // 배열의 마지막 값을 꺼내어 중간값 인덱스에 삽입합니다.
    nums.splice(mid, 0, nums.pop());
    // 중간값 인덱스를 2 증가시킵니다.
    mid += 2;
  }

  return nums;
};
