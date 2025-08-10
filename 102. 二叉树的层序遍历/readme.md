# 题目

https://leetcode.cn/problems/binary-tree-level-order-traversal/description/



# 思路

**方法一、广度优先搜索**

使用队列

- 首先根元素入队
- 当队列不为空的时候
  - 求当前队列的长度 *s**i*
  - 依次从队列中取 *s**i* 个元素进行拓展，然后进入下一次迭代