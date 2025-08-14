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
 * @return {number}
 */
// 深度优先
var sumNumbers = function (root) {
  const dfs = (root, prevSum) => {
    if (!root) return 0
    const sum = root.val + prevSum * 10
    if (!root.left && !root.right) {
      return sum
    } else {
      return dfs(root.left, sum) + dfs(root.right, sum)
    }
  }
  return dfs(root, 0)
};

// 广度优先
// var sumNumbers = function (root) {
//   if (!root) return 0
//   const queueNode = []
//   const queueValue = []
//   queueNode.push(root)
//   queueValue.push(root.val + "") // 初始化的时候 是string类型就行
//   let res = 0
//   while (queueNode.length !== 0) {
//     const node = queueNode.shift()
//     const value = queueValue.shift()
//     if (!node?.left && !node?.right) {
//       // 叶子节点
//       res += Number(value)
//       continue
//     } else {
//       if (node?.left) {
//         queueNode.push(node.left)
//         queueValue.push(value + node.left.val)
//       }
//       if (node?.right) {
//         queueNode.push(node.right)
//         queueValue.push(value + node.right.val)
//       }
//     }
//   }
//   return res
// };

function TreeNode(val, left, right) {
  this.val = (val === undefined ? 0 : val)
  this.left = (left === undefined ? null : left)
  this.right = (right === undefined ? null : right)
}