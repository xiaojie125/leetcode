/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
function ListNode(val, next) {
  this.val = (val === undefined ? 0 : val)
  this.next = (next === undefined ? null : next)
}

// 方法一、迭代
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
// var reverseList = function (head) {
//   let cur = head, pre = null;
//   while (cur !== null) {
//     const curListNode = new ListNode(cur.val, pre)
//     pre = curListNode
//     cur = cur.next
//   }
//   return pre
// };
// 官方
// var reverseList = function (head) {
//   let cur = head, pre = null;
//   while (cur !== null) {
//     const next = cur.next;
//     cur.next = pre;
//     pre = cur;
//     cur = next;
//   }
//   return pre
// };

// 方法二、递归 
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const newHead = reverseList(head.next)
  head.next.next = head
  head.next = null;
  return newHead
};

