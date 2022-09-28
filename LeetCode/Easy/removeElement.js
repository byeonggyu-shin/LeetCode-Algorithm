/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {

  // for (let i = nums.indexOf(val); i < nums.length;) {
  //   if (nums[i] == val) {
  //     nums.splice(i, 1)
  //   } else {
  //     i++
  //   }
  // }
  // console.log(nums)
  // return nums.length



  nums = nums.filter((el) => el !== val)

  console.log(nums)
  return nums.length
};

debugger;
console.log(removeElement([3, 2, 2, 3], 3))
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))