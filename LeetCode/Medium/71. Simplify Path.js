/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function (path) {
  const words = path.split("/");
  const stack = [];

  for (let word of words) {
    if (word === "" || word === ".") {
      // 빈 문자열 또는 현재 디렉토리를 나타내는 경우 무시
      continue;
    } else if (word === "..") {
      // 이전 디렉토리로 이동해야 하는 경우
      if (stack.length > 0) {
        stack.pop(); // 스택에서 마지막 요소 제거
      }
    } else {
      // 유효한 디렉토리 또는 파일 이름인 경우 스택에 추가
      stack.push(word);
    }
  }

  return "/" + stack.join("/");
};
