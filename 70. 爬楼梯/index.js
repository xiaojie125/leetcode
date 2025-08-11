// 方法一、递归
/**
* @param {number} n
* @return {number}
*/
var climbStairs = function (n) {
  if (n === 1) return 1
  if (n === 2) return 2
  return climbStairs(n - 1) + climbStairs(n - 2)
};

// 方法二、动态规划
// /**
//  * @param {number} n
//  * @return {number}
//  */
// var climbStairs = function (n) {
//   let n1 = 0, n2 = 0, n3 = 1
//   for (let i = 1; i <= n; i++) {
//     n1 = n2
//     n2 = n3
//     n3 = n1 + n2
//   }
//   return n3

//   // let nums = [1, 2]
//   // if (n === 1) return 1
//   // if (n === 2) return 2
//   // for (let i = 2; i < n; i++) {
//   //   nums[i] = nums[i - 2] + nums[i - 1]
//   // }
//   // return nums[n - 1]
// };

const n = 10
console.log(climbStairs(n))