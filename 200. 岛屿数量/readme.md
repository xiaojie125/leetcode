# 题目

https://leetcode.cn/problems/number-of-islands/description/

# 解析

**方法一、深度遍历**
循环岛屿的二维数组 当某个点为1的时候 则寻找周围是否还有为1的
使用深度遍历的方式
将周围为1的设置为0

**方法二、广度遍历**
存储节点的方法 通过存储位置
通过当前节点的 row * columnMax + column
取的时候 r = Math.floor(pos / columnMax) c = pos % columnMax 
floor 向下取整数
round 四舍五入
