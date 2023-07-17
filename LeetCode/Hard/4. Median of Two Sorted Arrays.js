/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let arr = [];

  let cnt = (nums1.length + nums2.length) / 2 + 1;
  let length = (nums1.length + nums2.length) % 2;

  for (let i = 0; i < cnt; i++) {
    if (nums1.length === 0) {
      arr.push(nums2.shift());
    } else if (nums2.length === 0) {
      arr.push(nums1.shift());
    } else if (nums1[0] >= nums2[0]) {
      arr.push(nums2.shift());
    } else {
      arr.push(nums1.shift());
    }
  }

  if (length === 1) {
    return arr[arr.length - 2];
  } else {
    return (arr[arr.length - 1] + arr[arr.length - 2]) / 2;
  }
};
