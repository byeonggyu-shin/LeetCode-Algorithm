/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  let n = nums.length;
  if (n === 3) return nums[0] + nums[1] + nums[2];

  nums.sort((a, b) => a - b);
  let close = nums[0] + nums[1] + nums[2];
  // 이중포인터
  for (let i = 0; i < n - 2; i++) {
    let left = i + 1; // 왼쪽 포인터
    let right = n - 1; // 오른쪽 포인터

    while (left < right) {
      // 왼쪽이 작은동안만 동작
      let cur = nums[i] + nums[left] + nums[right];
      if (Math.abs(cur - target) < Math.abs(close - target)) {
        close = cur;
      }
      if (cur < target) {
        left++;
      } else if (cur > target) {
        right--;
      } else {
        return cur;
      }
    }
  }

  return close;
};
