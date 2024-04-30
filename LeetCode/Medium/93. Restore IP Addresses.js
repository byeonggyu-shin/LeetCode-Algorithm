/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const result = [];

  function isValid(segment) {
    if (
      segment.length > 3 ||
      parseInt(segment) > 255 ||
      (segment.length > 1 && segment[0] === "0")
    ) {
      return false;
    }
    return true;
  }

  function backtrack(start, parts) {
    // 백트래킹을 통해 가능한 IP 주소를 생성하는 함수
    if (parts.length === 4 && start === s.length) {
      result.push(parts.join(".")); // 4개의 부분으로 완성된 경우, 결과에 추가
      return;
    }

    if (parts.length >= 4) {
      return;
    }

    // 최대 3자리 숫자로 나누기
    for (let len = 1; len <= 3; len++) {
      if (start + len > s.length) break; // 범위를 벗어나면 종료

      const segment = s.substring(start, start + len); // 현재 부분 추출
      if (isValid(segment)) {
        parts.push(segment); // 유효하면 부분 추가
        backtrack(start + len, parts);
        parts.pop(); // 백트래킹을 위해 마지막 부분 제거
      }
    }
  }

  backtrack(0, []);
  return result;
};
