# 题目

https://leetcode.cn/problems/binary-search/description/

# 解析

在升序数组 nums 中寻找目标值 target，对于特定下标 i，比较 nums[i] 和 target 的大小：

如果 nums[i]=target，则下标 i 即为要寻找的下标；

如果 nums[i]>target，则 target 只可能在下标 i 的左侧；

如果 nums[i]<target，则 target 只可能在下标 i 的右侧。



需要注意 计算中值的时候 需要带上左下标
