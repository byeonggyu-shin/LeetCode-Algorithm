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

// function searchInsert(nums, target) {
//   return binarySearch(nums, target, 0, nums.length - 1);
// };


// function binarySearch(array, target, start, end) {
//  // If the target is less then the very last item then insert it at that item index
//  // because anything index less then that has already been confirmed to be less then the target.
//  // Otherwise insert it at that item index + 1
//  // because any index grater then that has already been confirmed to be greater then the target
//   if (start > end) return start;
  
//   const midPoint = Math.floor((start + end)/2);
  
// // found target
//   if (array[midPoint] === target) return midPoint;
  
// // search the left side
//   if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
//   // search the right side
//   if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
// }