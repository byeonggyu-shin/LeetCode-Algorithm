/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];

  const recursion = (curr, start) => {
    // 결과에 추가
    result.push([...curr]);

    // 가능한 모든 조합 생성
    for (let i = start; i < nums.length; i++) {
      // 다음 요소를 현재에 추가하고 재귀
      curr.push(nums[i]);
      recursion(curr, i + 1);
      // 다음 재귀 호출을 위해 현재 요소를 제거
      curr.pop();
    }
  };

  // 재귀 함수 호출
  recursion([], 0);

  return result;
};
