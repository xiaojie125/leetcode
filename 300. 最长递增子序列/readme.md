# 题目

https://leetcode.cn/problems/longest-increasing-subsequence/description/

# 解析
**方法一、动态规划**
要找到dp[j] 最大的子序列 就是要找到 dp[i] 最大的子序列 加 j 这个的子序列
所以可以得到递推公式
dp[j] = max(dp[i]) + 1 // i < j, dp[j] > dp[i]