/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let profit = 0;

  // prices 돌며, 상승하는 구간에서 이익을 계산
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }

  return profit;
};
// prices 가격이 담겨있는 배열
// ex) [7,1,5,3,6,4]  최대 1주만 보유 가능
// 1 buy 5 sell 3 buy 6sell => 7 max
