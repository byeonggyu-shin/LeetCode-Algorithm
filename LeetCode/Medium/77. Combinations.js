/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  const ans = [];

  const backtrack = (start, curr) => {
    // 현재 조합의 길이가 k와 같으면 결과에 추가
    if (curr.length === k) {
      ans.push([...curr]);
      return;
    }

    // 현재 조합에 다음 숫자를 추가하고 재귀 호출
    for (let i = start; i <= n; i++) {
      curr.push(i);
      backtrack(i + 1, curr);
      curr.pop();
    }
  };

  backtrack(1, []);

  return ans;
};
