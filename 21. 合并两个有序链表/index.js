/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

// 方法一、递归
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (list1 === null) {
    return list2
  } else if (list2 === null) {
    return list1
  } else if (list1.val <= list2.val) {
    // list1最前面的值 与 结果相加
    list1.next = mergeTwoLists(list1.next, list2)
    return list1
  } else {
    // list2最前面的值 与 结果想加
    list2.next = mergeTwoLists(list1, list2.next)
    return list2
  }
};


// 方法二、迭代

// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
// var mergeTwoLists = function (list1, list2) {
//   const preHead = new ListNode(-1)

//   let pre = preHead
//   while (list1 !== null && list2 !== null) {
//     if (list1.val <= list2.val) {
//       pre.next = list1
//       list1 = list1.next
//     } else {
//       pre.next = list2
//       list2 = list2.next
//     }
//   }

//   // 合并后list1 与 list2 只有一个还没有合并完成
//   pre.next = list1 === null ? list2 : list1
//   return preHead.next
// };

function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}