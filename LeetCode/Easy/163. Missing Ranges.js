/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {string[]}
 */
var findMissingRanges = function (nums, lower, upper) {
  // nums 받으면 el과 lower upper 비교
  // 만약 범위 해당이 안될 경우 빈 배열 리턴
  //  범위 해당시 lower 와 nums[0] 부터
  // upper  nums[nums.length]까지 비교

  let start = lower;
  const res = [];
  for (const num of nums) {
    if (start < num) {
      res.push(formatRange(start, num - 1));
    }
    start = num + 1;
  }
  if (start <= upper) res.push(formatRange(start, upper));
  return res;
};

const formatRange = (lower, upper) => {
  if (lower === upper) return lower.toString();
  return `${lower}->${upper}`;
};
