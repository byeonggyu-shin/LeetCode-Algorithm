/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  const result = [];
  nums.sort((a, b) => a - b); // 숫자를 정렬하여 중복을 방지합니다.

  function backtrack(currentPermutation, remainingNums) {
    if (remainingNums.length === 0) {
      result.push(currentPermutation.slice()); // 현재 순열을 결과에 추가합니다.
      return;
    }

    for (let i = 0; i < remainingNums.length; i++) {
      if (i > 0 && remainingNums[i] === remainingNums[i - 1]) {
        // 중복된 숫자를 건너뛰기 위해 continue를 사용합니다.
        continue;
      }
      const num = remainingNums[i];
      currentPermutation.push(num);
      remainingNums.splice(i, 1); // 현재 숫자를 배열에서 제거합니다.
      backtrack(currentPermutation, remainingNums);
      remainingNums.splice(i, 0, num); // 다시 숫자를 복원합니다.
      currentPermutation.pop(); // 현재 순열에서 숫자를 제거합니다.
    }
  }

  backtrack([], nums);
  return result;
};

console.log(permuteUnique([1, 1, 2]));
console.log(permuteUnique([1, 2, 3]));
