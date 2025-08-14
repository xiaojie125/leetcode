# 题目

https://leetcode.cn/problems/spiral-matrix/description/

# 解析
**方法一、模拟**
上下左右转圈圈
从左到右，顶部一层遍历完往下移一位，top++；
从上到下，遍历完右侧往左移一位，right--；
从右到左，判断top <= bottom，即是否上下都走完了。遍历完底部上移，bottom--；
从下到上，判断left <= right，遍历完左侧右移，left++；

最后两步需要注意添加判断条件