/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  const result = [-1, -1];
  while (right >= left) {
    let mid = Math.floor((right + left) / 2);

    if (nums[mid] === target) {
      result[0] = mid;
      result[1] = mid;

      if (nums[mid + 1] === target) {
        let a = mid + 1;
        while (nums[a] === target) {
          if (nums[a + 1] !== target) {
            result[1] = a;
          }
          a++;
        }
      }
      if (nums[mid - 1] === target) {
        let a = mid - 1;
        while (nums[a] === target) {
          if (nums[a - 1] !== target) {
            result[0] = a;
          }
          a--;
        }
      }
      return result;
    }

    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }

  return result;
};
