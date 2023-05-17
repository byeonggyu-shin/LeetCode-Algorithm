/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
const fourSum = function(nums, target) {
  
  nums.sort((a, b) => a - b);
  const result = [];

  // 처음 세 숫자에 대해 세 개의 중첩 루프를 사용
  for (let a = 0; a < nums.length - 3; a++) {
    if (a > 0 && nums[a] === nums[a - 1]) continue;
    for (let b = a + 1; b < nums.length - 2; b++) {
      if (b > a + 1 && nums[b] === nums[b - 1]) continue;
      
      let c = b + 1;
      let d = nums.length - 1;

      while (c < d) {
         // 2점 접근 방식을 사용하여 네 번째 숫자 찾아서
        const sum = nums[a] + nums[b] + nums[c] + nums[d];
        // 중복되는 것을 방지하려면 정렬된 배열에서 인접한 이웃과 동일한 숫자는 건너뜁니다.
        if (sum === target) {
          result.push([nums[a], nums[b], nums[c], nums[d]]);
          while (c < d && nums[c] === nums[c + 1]) c++;
          while (c < d && nums[d] === nums[d - 1]) d--;
          c++;
          d--;
        } else if (sum < target) {
          c++;
        } else {
          d--;
        }
      }
    }
  }
  return result;
};

