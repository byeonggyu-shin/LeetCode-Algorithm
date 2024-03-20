/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function (word1, word2) {
  // 두 문자열의 길이를 저장
  const m = word1.length;
  const n = word2.length;

  // dp 테이블 초기화
  const dp = [];
  for (let i = 0; i <= m; i++) {
    dp[i] = [];
    for (let j = 0; j <= n; j++) {
      if (i === 0) {
        dp[i][j] = j; // 첫 번째 문자열이 빈 문자열일 경우
      } else if (j === 0) {
        dp[i][j] = i; // 두 번째 문자열이 빈 문자열일 경우
      } else {
        dp[i][j] = 0; // 나머지 경우는 초기값을 0으로 설정
      }
    }
  }

  // DP를 통한 문자열 비교
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1]; // 문자가 같으면 이전까지의 연산 횟수 그대로 유지
      } else {
        // 문자가 다르면 삽입, 삭제, 교체 중 최소 연산을 선택하여 dp 테이블 업데이트
        dp[i][j] = Math.min(
          dp[i - 1][j] + 1, // 삽입
          dp[i][j - 1] + 1, // 삭제
          dp[i - 1][j - 1] + 1 // 교체
        );
      }
    }
  }

  return dp[m][n]; // 최종적인 연산 횟수 반환
};
