/**
 * 1-scan 알고리즘 사용, 배열을 뒤에서부터 스캔서 순열을 형성하는 데 필요한 규칙을 찾아냄
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function (nums) {
  let i = nums.length - 2;
  while (i >= 0 && nums[i + 1] <= nums[i]) {
    i--;
  }
  if (i >= 0) {
    let j = nums.length - 1;
    while (nums[j] <= nums[i]) {
      j--;
    }
    swap(nums, i, j);
  }
  reever(nums, i + 1, nums.length - 1);
};

function swap(num, i, j) {
  let temp = num[i];
  num[i] = num[j];
  num[j] = temp;
}

function reever(num, start, end) {
  while (start < end) {
    swap(num, start, end);
    start++;
    end--;
  }
}
