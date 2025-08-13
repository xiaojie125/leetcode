# 题目

https://leetcode.cn/problems/kth-largest-element-in-an-array/

# 解析

**快速排序**
简单想想，如果nums[i] == base，那么每次都只会执行一次i ++和 j --，而不是让i一直++，这样当i >= j结束循环时就会让i和j趋于中间，又因为最后的j为枢纽的位置，所以这样就尽可能地将枢纽划分到中间位置，加快了速度。