// 快速排序主函数
function quickSort(array) {
  // 递归终止条件：数组长度为1或0时，直接返回
  if (array.length <= 1) {
    return array;
  }

  // 1. 选择基准值（这里选择数组的最后一个元素）
  const pivot = array[array.length - 1];

  // 2. 定义两个数组：存放小于基准值和大于等于基准值的元素
  const left = [];  // 小于基准值的元素
  const right = []; // 大于等于基准值的元素

  // 3. 遍历数组，将元素按照基准值分配到左右两边
  for (let i = 0; i < array.length - 1; i++) { // 忽略最后一个基准值
    if (array[i] < pivot) {
      left.push(array[i]);
    } else {
      right.push(array[i]);
    }
  }

  // 4. 递归地对左右两部分排序，并将结果合并
  return [...quickSort(left), pivot, ...quickSort(right)];
}

// 测试快速排序
// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log("原始数组:", array);
// const sortedArray = quickSort(array);
// console.log("排序后的数组:", sortedArray);

