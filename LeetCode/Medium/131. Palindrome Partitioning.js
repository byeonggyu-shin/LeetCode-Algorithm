/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  const result = [];

  const isPalindrome = (str) => {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
      if (str[left] !== str[right]) {
        return false;
      }
      left++;
      right--;
    }

    return true;
  };

  const backtrack = (start, currPartition) => {
    // 모든 문자열을 검사했을 때 결과에 추가
    if (start >= s.length) {
      result.push([...currPartition]);
      return;
    }

    // 문자열의 모든 부분을 탐색하여 회문 분할 생성
    for (let end = start; end < s.length; end++) {
      const substring = s.substring(start, end + 1);
      // 부분 문자열이 회문인지 확인
      if (isPalindrome(substring)) {
        currPartition.push(substring);
        backtrack(end + 1, currPartition);
        currPartition.pop();
      }
    }
  };

  backtrack(0, []);
  return result;
};
