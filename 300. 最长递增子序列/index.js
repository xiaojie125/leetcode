/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  if (nums.length === 0) {
    return 0
  }
  const dp = []
  dp[0] = 1
  let maxAns = 1
  for (let i = 1; i < nums.length; i++) {
    dp[i] = 1
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[j] + 1, dp[i])
      }
    }
    maxAns = Math.max(maxAns, dp[i])
  }
  return maxAns
};

const nums = [10, 9, 2, 5, 3, 7, 101, 18]
console.log(lengthOfLIS(nums))