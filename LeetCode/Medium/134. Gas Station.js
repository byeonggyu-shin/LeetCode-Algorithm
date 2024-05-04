/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  let totalGas = 0;
  let totalCost = 0;
  let start = 0; // 가능한 시작점
  let currGas = 0; // 현재 가스량

  // 각 스테이션을 순회하며 총 가스와 총 비용을 계산
  for (let i = 0; i < gas.length; i++) {
    totalGas += gas[i];
    totalCost += cost[i];

    // 현재 가스량 업데이트
    currGas += gas[i] - cost[i];

    // 현재 가스량이 음수라면, 해당 시작점에서 완주할 수 없음
    if (currGas < 0) {
      start = i + 1; // 다음 스테이션을 시작점으로 설정
      currGas = 0; // 가스량 초기화
    }
  }

  if (totalGas < totalCost) {
    return -1;
  }

  return start;
};
