/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const res = []
  const track = [] // 记录路径
  // 路径中的元素会被标记为true 避免重复使用
  const used = new Array(nums.length).fill(false)
  // 定义回溯函数
  const backtrack = (nums, used) => {
    if (track.length === nums.length) {
      // 已经找到了一组
      res.push([...track]);
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i] === true) continue;  //  path已经手机的元素 跳过
      used[i] = true;
      track.push(nums[i])
      backtrack(nums, used)
      track.pop() // 回溯
      used[i] = false
    }
  }
  backtrack(nums, used)
  return res
};

const nums = [1, 2, 3]
console.log(permute(nums))
