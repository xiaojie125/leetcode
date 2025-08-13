/**
 * @param {string} s
 * @return {string}
 */
// 动态规划
var longestPalindrome = function (s) {
  let maxStart = 0, maxEnd = 0
  const dp = new Array(s.length).fill([]).map(() => new Array(s.length).fill(false))
  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i <= j; i++) {
      // 初始化是false 所以不用考虑
      if (s[i] === s[j]) {
        if (j - i < 3) {
          dp[i][j] = true
        } else if (dp[i + 1][j - 1]) {
          dp[i][j] = true
        }
      }
      // 判断当前回文是否是最大的
      if (dp[i][j] && j - i > maxEnd - maxStart) {
        maxStart = i
        maxEnd = j
      }
    }
  }
  return s.slice(maxStart, maxEnd + 1)
};

// 中心扩展法
// var longestPalindrome = function (s) {
//   let res = ""
//   for (let i = 0; i < s.length; i++) {
//     // 当回文串是奇数的时候
//     let l = i - 1, r = i + 1
//     while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
//       l--;
//       r++;
//     }
//     // 判断当前回文的大小
//     if (res.length < s.slice(l + 1, r).length) {
//       res = s.slice(l + 1, r)
//     }
//     // 当回文串是偶数的时候
//     l = i, r = i + 1
//     while (l >= 0 && r < s.length && s.charAt(l) === s.charAt(r)) {
//       l--;
//       r++;
//     }
//     // 判断当前回文的大小
//     if (res.length < s.slice(l + 1, r).length) {
//       res = s.slice(l + 1, r)
//     }
//   }
//   return res
// };

const s = "babad"
console.log(longestPalindrome(s))