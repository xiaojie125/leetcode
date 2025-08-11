// 归并排序主函数
function mergeSort(array) {
  // 递归终止条件：当数组长度为1或0时，直接返回该数组
  if (array.length <= 1) {
    return array;
  }

  // 1. 找到数组的中间位置
  const middle = Math.floor(array.length / 2);

  // 2. 将数组分成左右两部分
  const leftArray = array.slice(0, middle); // 左半部分
  const rightArray = array.slice(middle);  // 右半部分

  // 3. 分别对左右两部分进行递归归并排序
  const sortedLeft = mergeSort(leftArray);
  const sortedRight = mergeSort(rightArray);

  // 4. 合并排序后的左右数组
  return merge(sortedLeft, sortedRight);
}

// 合并两个有序数组的函数
function merge(leftArray, rightArray) {
  const result = [];
  let i = 0; // 左数组的指针
  let j = 0; // 右数组的指针

  // 5. 比较左右两数组的元素，按大小依次加入结果数组
  while (i < leftArray.length || j < rightArray.length) {
    // 6. 将剩余未处理的元素加入结果数组
    // 如果左数组还有剩余
    if (j >= rightArray.length) {
      result.push(leftArray[i]);
      i++;
    } else if (i >= leftArray.length) {
      // 如果右数组还有剩余
      result.push(rightArray[j]);
      j++;
    } else if (leftArray[i] <= rightArray[j]) {
      result.push(leftArray[i]); // 左边小的元素进入结果数组
      i++;
    } else {
      result.push(rightArray[j]); // 右边小的元素进入结果数组
      j++;
    }
  }

  // 返回合并后的有序数组
  return result;
}

// 测试归并排序
// const array = [38, 27, 43, 3, 9, 82, 10];
// console.log("原始数组:", array);
// const sortedArray = mergeSort(array);
// console.log("排序后的数组:", sortedArray);