/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
  const res = []
  if (!root) return res
  // 使用队列存储
  const q = []
  q.push(root)
  while (q.length !== 0) {
    let level = q.length
    const arr = []
    for (let i = 0; i < level; i++) {
      const node = q.shift()
      arr.push(node?.val)
      if (node?.left) {
        q.push(node.left)
      }
      if (node?.right) {
        q.push(node.right)
      }
    }
    res.push(arr)
  }
  return res
};

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}