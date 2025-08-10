# 题目

https://leetcode.cn/problems/binary-tree-level-order-traversal/description/



# 思路

**方法一、暴力法**

直接暴力循环



**方法二、动态规划**

假设我们在第 i 天卖出股票得到了最大的利润，那我们的买入价格一定是 前i-1天 中最低价格时买入的。