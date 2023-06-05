function solution(citations) {
  const sortedCitations = citations.sort((a, b) => a - b);
  let n = citations.length;
  let answer = n - 1;

  for (let i = 0; i < n; i++) {
    let h = sortedCitations[i];
    if (h >= n - i && h <= i + 1) {
      answer = i;
      break;
    }
  }

  for (let i = 0; i < n; i++) {
    if (citations[i] === sortedCitations[answer]) {
      return i;
    }
  }
}
