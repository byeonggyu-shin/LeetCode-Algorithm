/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => a - b);
  return nums[k - 1];
};

// 퀵선택과 유사하지만, 각 요소를 평균과 비교하여 분할하는 방식으로 동작
var findKthLargest = function (nums, k) {
  let N = nums.length; // 배열의 길이를 저장합니다.
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += nums[i]; // 배열 내 모든 요소의 합을 계산합니다.
  }
  function find(items = nums, total = sum, index = k) {
    let n = items.length;
    if (n == 1) return items[0]; // 배열의 길이가 1이면, 유일한 요소를 반환합니다.

    let lt = []; // 평균보다 작은 요소들을 저장할 배열
    let gte = []; // 평균 이상인 요소들을 저장할 배열
    let ave = total / n; // 주어진 요소들의 평균값을 계산합니다.
    let lt_sum = 0; // 평균보다 작은 요소들의 합을 저장합니다.
    let num;
    for (let i = 0; i < n; i++) {
      num = items[i];
      if (num < ave) {
        lt_sum += num; // 평균보다 작은 경우, lt 배열에 추가하고 합을 갱신합니다.
        lt.push(num);
      } else gte.push(num); // 그 외의 경우 gte 배열에 추가합니다.
    }
    if (lt.length == 0) return items[0]; // 모든 요소가 평균 이상인 경우 첫 번째 요소를 반환합니다.
    if (index <= gte.length) return find(gte, total - lt_sum, index); // k가 gte의 길이 이하면 gte 배열에서 k번째 요소를 찾습니다.
    return find(lt, lt_sum, index - gte.length); // 그렇지 않으면 lt 배열에서 (k-gte.length)번째 요소를 찾습니다.
  }
  return find(); // find 함수를 초기 조건으로 호출합니다.
};
