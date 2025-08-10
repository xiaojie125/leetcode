/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let min = prices[0], max = 0
  for (let i = 1; i < prices.length; i++) {
    // 找到当前值前面最小的值
    min = Math.min(min, prices[i - 1])
    // 计算最大的差值
    max = Math.max(max, prices[i] - min)
  }
  return max
};

const prices = [7, 6, 4, 3, 1]
console.log(maxProfit(prices))