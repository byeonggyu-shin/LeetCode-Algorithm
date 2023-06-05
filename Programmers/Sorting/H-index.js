// function solution(citations) {
//   const sortedCitations = citations.sort((a, b) => a - b);
//   let n = citations.length;
//   let answer = n - 1;

//   for (let i = 0; i < n; i++) {
//     let h = sortedCitations[i];
//     if (h >= n - i && h <= i + 1) {
//       answer = i;
//       break;
//     }
//   }

//   for (let i = 0; i < n; i++) {
//     if (citations[i] === sortedCitations[answer]) {
//       return i;
//     }
//   }
// }

function solution(citations) {
  citations.sort((a, b) => b - a);
  let i = 0;
  while (i + 1 <= citations[i]) {
    i++;
  }
  return i;
}
