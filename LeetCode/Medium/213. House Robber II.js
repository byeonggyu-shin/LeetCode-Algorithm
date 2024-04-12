/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  if (nums.length === 2) return Math.max(nums[0], nums[1]);

  const robLinear = (nums, start, end) => {
    let rob1 = 0;
    let rob2 = 0;
    for (let i = start; i <= end; i++) {
      let newRob = Math.max(rob2, rob1 + nums[i]);
      rob1 = rob2;
      rob2 = newRob;
    }
    return rob2;
  };

  return Math.max(
    robLinear(nums, 0, nums.length - 2),
    robLinear(nums, 1, nums.length - 1)
  );
};
