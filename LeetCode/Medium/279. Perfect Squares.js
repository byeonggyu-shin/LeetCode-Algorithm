/**
 * @param {number} n
 * @return {number}
 */
var numSquares = function (n) {
  const q = [];
  // 방문 여부를 저장하는 배열 생성
  const visited = new Array(n + 1).fill(false);
  q.push([n, 0]);

  while (q.length > 0) {
    const [num, level] = q.shift();

    // 현재 숫자가 0이면 최소 개수를 찾은 것이므로 결과 반환
    if (num === 0) return level;

    // 현재 숫자에서 가능한 모든 완전 제곱수 조합에 대해 탐색
    for (let i = 1; i * i <= num; i++) {
      const nextNum = num - i * i;
      // 방문한 적 없는 숫자인 경우 큐에 추가
      if (!visited[nextNum]) {
        q.push([nextNum, level + 1]);
        visited[nextNum] = true;
      }
    }
  }
};

var numSquares = function (n) {
  // i까지 합으로 이루어진 최소 완전 제곱수의 개수를 저장하기 위한 배열을 생성합니다.
  const dp = new Array(n + 1).fill(Number.MAX_SAFE_INTEGER);

  // 기본 경우: 0까지의 합으로 이루어진 최소 완전 제곱수의 개수는 0입니다.
  dp[0] = 0;

  // 1부터 n까지 반복합니다.
  for (let i = 1; i <= n; i++) {
    // i 이하의 모든 완전 제곱수에 대해 반복합니다.
    for (let j = 1; j * j <= i; j++) {
      // 현재 값과 1 + dp[i - j*j]를 비교하여 dp[i]를 업데이트합니다.
      dp[i] = Math.min(dp[i], 1 + dp[i - j * j]);
    }
  }

  // n까지의 합으로 이루어진 최소 완전 제곱수의 개수를 반환합니다.
  return dp[n];
};
