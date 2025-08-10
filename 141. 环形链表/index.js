/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// 方法一、哈希表
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// var hasCycle = function (head) {
//   let cur = head
//   const set = new Set()
//   while (cur !== null) {
//     if (set.has(cur)) {
//       return true
//     } else {
//       set.add(cur)
//       cur = cur.next
//     }
//   }
//   return false
// };

// 方法二、快慢指针
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false;
  }
  let slow = head, fast = head.next
  while (fast !== null && fast.next !== null) {
    if (slow === fast) return true
    slow = slow.next // 慢指针移动
    fast = fast.next.next // 快指针移动
  }
  return false
};

function ListNode(val) {
  this.val = val;
  this.next = null;
}