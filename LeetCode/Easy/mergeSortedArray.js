/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {

  while (nums1.length > m) {
    nums1.pop()
  }
  while (nums2.length > n) {
    nums2.pop()
  }

  for (let i = 0; i < nums2.length; i++) {
    nums1.push(nums2[i])
  }

  nums1.sort((a, b) => a - b)

  console.log(nums1)
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([7, 4, 3, 0, 0, 0], 3, [2, 5, 6], 3)
merge([1], 1, [], 1)
merge([], 1, [1], 1)
