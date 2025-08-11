// 归并排序
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
  const merge = (leftArr, rightArr) => {
    const res = []
    let i = 0, j = 0
    while (i < leftArr.length || j < rightArr.length) {
      if (i >= leftArr.length) {
        res.push(rightArr[j])
        j++;
      } else if (j >= rightArr.length) {
        res.push(leftArr[i])
        i++;
      } else if (leftArr[i] < rightArr[j]) {
        res.push(leftArr[i])
        i++;
      } else {
        res.push(rightArr[j])
        j++;
      }
    }
    return res
  }
  const mergeSort = (nums) => {
    // 递归终止条件：当数组长度为1或0时，直接返回该数组
    if (nums.length <= 1) return nums
    // 获取中间的位置
    let mid = Math.floor(nums.length / 2)

    // 分别对左右两部分进行递归归并排序
    const leftSort = mergeSort(nums.slice(0, mid))
    const rightSort = mergeSort(nums.slice(mid))

    // 合并排序后的左右数组
    return merge(leftSort, rightSort)
  }
  return mergeSort(nums)
};

// 快速排序
// const quicklySort = (nums, left, right) => {
//   if (left < right) {
//     let pos = partition(nums, left, right)
//     quicklySort(nums, left, pos - 1)
//     quicklySort(nums, pos + 1, right)
//   }
// }
// const partition = (nums, left, right) => {
//   let base = nums[left]
//   while (left < right) {
//     while (left < right && nums[right] > base) {
//       right--;
//     }
//     // 比base小
//     nums[left] = nums[right]
//     while (left < right && nums[left] < base) {
//       left++;
//     }
//     // 比base大
//     nums[right] = nums[left]
//   }
//   nums[left] = base
//   return left
// }


const nums = [5, 2, 3, 1]
console.log(sortArray(nums))