/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const arr1 = version1.split(".")
  const arr2 = version2.split(".")
  const len = Math.max(arr1.length, arr2.length)
  const strToNum = (s) => s === void 0 ? 0 : Number(s)
  for (let i = 0; i < len; i++) {
    // 从左到右依次比较 超过位数部分以0替代
    let num = strToNum(arr1[i]) - strToNum(arr2[i])
    if (num !== 0) {
      return num > 0 ? 1 : -1
    }
  }
  return 0;
};

const str1 = "1.0"
const str2 = "1.0.0"

console.log(compareVersion(str1, str2))