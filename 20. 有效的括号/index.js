/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const arr = []
  const left = ['{', "[", "("]
  const right = ['}', "]", ")"]
  for (let i = 0; i < s.length; i++) {
    if (left.includes(s.charAt(i))) {
      // 加左括号 直接push进去
      arr.push(s.charAt(i))
    } else {
      // 加右括号 需要判断栈顶是否是对应的左括号
      const str = arr.pop() || ""
      if (right.indexOf(s.charAt(i)) !== left.indexOf(str)) return false
    }
  }
  if (arr.length !== 0) return false
  return true
};