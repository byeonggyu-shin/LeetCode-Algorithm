/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  if (nums.length === 0) {
    return 0;
  }

  const numSet = new Set(nums);
  let longestStreak = 0;

  for (let num of numSet) {
    // 현재 숫자가 연속된 시퀀스의 시작인지 확인
    if (!numSet.has(num - 1)) {
      let currentNum = num; // 현재 숫자를 기록
      let currentStreak = 1; // 연속된 길이를 1로 초기화

      // 다음 숫자가 있는지 계속 확인
      while (numSet.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};
