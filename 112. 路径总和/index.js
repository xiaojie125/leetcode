/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方法一、广度优先

/**
 * @param {TreeNode} root
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  if (root === null) return false
  // 队列
  const queNode = []
  const queVal = []
  queNode.push(root)
  queVal.push(root.val)

  while (queNode.length !== 0) {
    // 取出每层的所有节点
    let node = queNode.shift()
    let sum = queVal.shift()
    // 判断是否是叶子节点了
    if (node?.left === null && node?.right === null) {
      if (sum === targetSum) return true
      continue;
    }
    // 继续寻找
    if (node?.left) {
      queNode.push(node.left)
      queVal.push(node.left.val + sum)
    }
    if (node?.right) {
      queNode.push(node.right)
      queVal.push(node.right.val + sum)
    }
  }

  // 寻找完了
  return false
};

// 方法二、递归

// /**
//  * @param {TreeNode} root
//  * @param {number} targetSum
//  * @return {boolean}
//  */
// var hasPathSum = function (root, targetSum) {
//   if (root === null) return false

//   if (root.left === null && root.right === null) {
//     // 这已经是叶子节点了
//     return targetSum === root.val
//   }

//   return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right, targetSum - root.val)
// };

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}