/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  const ans = [];
  nums.sort((a, b) => a - b);

  const backtrack = (start, curr) => {
    ans.push([...curr]); // 현재 부분 집합을 추가

    for (let i = start; i < nums.length; i++) {
      // 중복을 피하기 위해 이전 요소와 비교
      if (i > start && nums[i] === nums[i - 1]) continue;

      curr.push(nums[i]); // 부분 집합에 요소 추가
      backtrack(i + 1, curr); // 다음 요소로 이동
      curr.pop();
    }
  };

  backtrack(0, []);

  return ans;
};
