/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1
  while (left <= right) {
    const mid = Math.floor((right - left) / 2) + left
    const num = nums[mid]
    if (num === target) {
      return mid
    } else if (num > target) {
      // 继续找左边
      right = mid - 1
    } else {
      // 继续找右边
      left = mid + 1
    }
  }
  return -1
};

const nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search(nums, target))