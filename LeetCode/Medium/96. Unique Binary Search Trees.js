/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function (n) {
  let dp = Array(n + 1).fill(0);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; ++i) {
    for (let j = 1; j <= i; ++j) {
      // `dp[j - 1]`은 루트 `j`의 왼쪽에 있는 노드 수로 가능한 BST 수
      // `dp[i - j]`은 루트 `j`의 오른쪽에 있는 노드 수로 가능한 BST 수
      dp[i] += dp[j - 1] * dp[i - j];
    }
  }

  return dp[n];
};

var numTrees = function (n) {
  const catalan = new Array(n + 1).fill(0);

  // 초기 카탈란 수 정의
  catalan[0] = 1;
  catalan[1] = 1;

  // 카탈란 수 계산
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      catalan[i] += catalan[j] * catalan[i - 1 - j];
    }
  }
  // n개의 노드로 가능한 고유한 이진 탐색 트리의 수 반환
  return catalan[n];
};
