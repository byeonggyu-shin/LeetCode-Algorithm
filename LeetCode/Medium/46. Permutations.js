/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  function dfs(arr, depth) {
    if (depth === nums.length) {
      result.push(arr);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (arr.includes(nums[i])) continue;
      dfs([...arr, nums[i]], depth + 1);
    }
  }

  dfs([], 0);
  return result;
};
