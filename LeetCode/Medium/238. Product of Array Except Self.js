/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const n = nums.length;

  // 왼쪽 부분의 곱을 저장하는 배열
  const leftProducts = new Array(n).fill(1);
  // 오른쪽 부분의 곱을 저장하는 변수
  let rightProduct = 1;

  // 왼쪽 부분의 곱 계산
  for (let i = 1; i < n; i++) {
    leftProducts[i] = leftProducts[i - 1] * nums[i - 1];
  }

  // 오른쪽 부분의 곱을 이용하여 결과 계산
  for (let i = n - 1; i >= 0; i--) {
    leftProducts[i] *= rightProduct;
    rightProduct *= nums[i];
  }

  return leftProducts;
};
