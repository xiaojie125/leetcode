/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  const res = new Array(m + n).fill(0)
  let i = 0, j = 0, cur
  while (i < m || j < n) {
    if (i === m) {
      cur = nums2[j++]
    } else if (j === n) {
      cur = nums1[i++]
    } else if (nums1[i] > nums2[j]) {
      cur = nums2[j++]
    } else {
      cur = nums1[i++]
    }
    res[i + j - 1] = cur
  }
  for (let i = 0; i < m + n; i++) {
    nums1[i] = res[i]
  }
};

const nums1 = [1, 2, 3, 0, 0, 0], m = 3, nums2 = [2, 5, 6], n = 3
console.log(merge(nums1, m, nums2, n))