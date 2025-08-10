/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  // 滑动窗口 双指针
  let maxLength = 0, r = 0;
  let maxStr = new Set()
  for (let l = 0; l < s.length; l++) {
    // 取出最左边的
    if (l !== 0) {
      maxStr.delete(s.charAt(l - 1))
    }
    while (r < s.length && !maxStr.has(s.charAt(r))) {
      maxStr.add(s.charAt(r))
      // 向右滑动指针
      r++;
    }
    // 判断当前是否是最长子串
    maxLength = Math.max(maxLength, maxStr.size)
  }
  return maxLength;
};

const str = "abcb";
console.log(lengthOfLongestSubstring(str));
