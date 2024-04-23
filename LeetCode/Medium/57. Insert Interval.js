/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  const ans = [];
  let i = 0;

  // 새로운 간격의 위치
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]); // `newInterval`보다 앞에 있는 간격을 추가
    i++;
  }

  // 중첩 시 병합
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(newInterval[0], intervals[i][0]);
    newInterval[1] = Math.max(newInterval[1], intervals[i][1]);
    i++;
  }

  ans.push(newInterval);

  // 나머지 추가
  while (i < intervals.length) {
    ans.push(intervals[i]);
    i++;
  }

  return ans;
};
