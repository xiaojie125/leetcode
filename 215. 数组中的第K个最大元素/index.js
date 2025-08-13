/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // 快速排序
  const sort = (nums, left, right) => {
    const base = nums[left]
    while (left < right) {
      while (left < right && nums[right] >= base) {
        if (nums[right] == base) {
          right--;
          break;
        }
        right--;
      }
      nums[left] = nums[right]
      while (left < right && nums[left] <= base) {
        if (nums[left] == base) {
          left++;
          break;
        }
        left++;
      }
      nums[right] = nums[left]
    }
    nums[left] = base
    return left
  }
  const quickSort = (nums, left, right, k) => {
    let pivot = sort(nums, left, right)
    if (pivot === k) {
      return nums[k]
    } else if (pivot < k) {
      // 当基数的下标小于需要寻找的下标的时候 我们去找右侧
      return quickSort(nums, pivot + 1, right, k);
    } else {
      // 当技术的下标大于需要寻找下标的时候 我们去找左侧
      return quickSort(nums, left, pivot - 1, k);
    }
  }
  return quickSort(nums, 0, nums.length - 1, nums.length - k)
};

const nums = [3, 2, 1, 5, 6, 4]
console.log(findKthLargest(nums, 2))