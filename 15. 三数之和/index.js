/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [], len = nums.length
  // 首先对nums排序
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let l = i + 1, r = len - 1
    let target = 0 - nums[i]
    while (l < r) {
      if (nums[l] + nums[r] === target) {
        res.push([nums[i], nums[l], nums[r]])
        // 去重
        while (l < r && nums[l] === nums[l + 1]) l++;
        while (l < r && nums[r] === nums[r - 1]) r--;
        // 向中间移动
        l++;
        r--;
      } else if (nums[l] + nums[r] < target) {
        // 当和比目标值小 就左移指针
        l++
      } else {
        // 当和比目标值大 就右移指针
        r--
      }
    }
  }
  return res
};

const nums = [0, 0, 0, 0]
console.log(threeSum(nums))