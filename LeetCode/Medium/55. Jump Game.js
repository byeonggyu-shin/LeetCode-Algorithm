/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  const dfs = (idx, num, arr) => {
    if (idx === arr.length) {
      return true;
    }

    for (let i = 0; i <= num; i++) {
      dfs(idx + i, arr[idx + i], arr);
    }
  };

  dfs(0, nums[0], nums);

  return false;
};

// dfs 문제
// 재귀로 돌리는 것이 옳은 것인가
// 하나 확인  QERRRRED,99
