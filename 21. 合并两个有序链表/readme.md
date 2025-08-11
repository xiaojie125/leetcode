# 题目

https://leetcode.cn/problems/merge-two-sorted-lists/

# 解析

**方法一、递归**

我们可以如下递归地定义两个链表里的 merge 操作（忽略边界情况，比如空链表等）：



```
- list1[0]+merge(list1[1:],list2)   list1[0]<list2[0]
- list2[0]+merge(list1,list2[1:])   otherwise
```




也就是说，两个链表头部值较小的一个节点与剩下元素的 merge 操作结果合并。



**方法二、迭代**

我们可以用迭代的方法来实现上述算法。当 l1 和 l2 都不是空链表时，判断 l1 和 l2 哪一个链表的头节点的值更小，将较小值的节点添加到结果里，当一个节点被添加到结果里之后，将对应链表中的节点向后移一位。

