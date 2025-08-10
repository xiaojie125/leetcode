/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  const dp = new Array(nums.length)
  dp[0] = nums[0]
  let start = 0, maxStart = 0, len = 0, maxLen = 0, maxSum = nums[0]
  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] + nums[i] > nums[i]) {
      dp[i] = dp[i - 1] + nums[i]
      len++
    } else {
      // 另起一个元素
      dp[i] = nums[i]
      start = i
      len = 1
    }
    if (dp[i] > maxSum) {
      maxStart = start
      maxLen = len
      maxSum = dp[i]
    }
  }
  console.log(maxStart, maxLen, maxSum, dp)
  return maxSum
};

const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
console.log(maxSubArray(nums))