/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {

  if (nums.findIndex((el) => el === target) === -1) {
    nums.push(target);
    nums.sort((a, b) => a - b);
  }
  return nums.findIndex((el) => el === target)
};

console.log(searchInsert([1, 3, 5, 6], 5))
console.log(searchInsert([1, 3, 5, 6], 2))
console.log(searchInsert([1, 3, 5, 6], 7))