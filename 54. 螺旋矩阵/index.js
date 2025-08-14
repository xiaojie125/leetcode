/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// 模拟
var spiralOrder = function (matrix) {
  const res = []
  let m = matrix.length, n = matrix[0].length
  let left = 0, right = n - 1, top = 0, bottom = m - 1
  while (left <= right && top <= bottom) {
    // 从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i])
    }
    top++;
    // 从上到下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right])
    }
    right--;
    // 因为前面已经变动了top和right 所以后面需要加判断条件
    // 从右到左
    if (top <= bottom) {
      for (let i = right; i >= left; i--) {
        res.push(matrix[bottom][i])
      }
    }
    bottom--;
    // 从下到上
    if (left <= right) {
      for (let i = bottom; i >= top; i--) {
        res.push(matrix[i][left])
      }
    }
    left++;
  }
  return res
};