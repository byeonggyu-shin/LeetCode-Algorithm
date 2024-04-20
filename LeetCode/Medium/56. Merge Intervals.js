/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // [0] 요소에 따라 정렬
  intervals.sort((a, b) => a[0] - b[0]);

  const ans = [];

  ans.push(intervals[0]);

  // 주어진 간격과 병합된 간격을 비교하여 병합
  for (let i = 1; i < intervals.length; i++) {
    const currentInterval = intervals[i];
    const lastMergedInterval = ans[ans.length - 1];

    // 현재 간격의 시작이 병합된 간격의 끝보다 크거나 같으면 새로운 간격 추가
    if (
      currentInterval[0] >= lastMergedInterval[0] &&
      currentInterval[0] <= lastMergedInterval[1]
    ) {
      lastMergedInterval[1] = Math.max(
        lastMergedInterval[1],
        currentInterval[1]
      );
    } else {
      // 그렇지 않으면 현재 간격을 병합된 간격에 추가
      ans.push(currentInterval);
    }
  }

  return ans;
};
