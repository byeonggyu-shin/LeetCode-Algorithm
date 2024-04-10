/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  if (nums.length <= 2) return nums.length;

  let idx = 2;

  // 배열을 순회하면서 중복된 요소를 최대 두 번까지만 남기고 제거
  for (let i = 2; i < nums.length; i++) {
    // 현재 요소가 바로 앞의 두 번째 요소와 같은 경우, 쓰여진 인덱스에 현재 요소를 덮어쓰기
    if (nums[i] !== nums[idx - 2]) {
      nums[idx] = nums[i];
      idx++;
    }
  }

  return idx;
};
