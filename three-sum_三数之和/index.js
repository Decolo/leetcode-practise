const quickSort = (arr) => {

  if (arr.length < 2) return arr;

  const pivotIndex = Math.ceil(arr.length / 2) - 1;
  const pivot =  arr[pivotIndex];
  const left = [];
  const right = [];

  for (let i = 0; i < arr.length; i++) {
      const current = arr[i];

      if (current > pivot) {
          right.push(current);
      } else if (i !== pivotIndex ) {
          left.push(current);
      }

  }

  const newLeft = quickSort(left);
  const newRight = quickSort(right);

  return  [...newLeft, pivot, ...newRight];
}

const threeSum = (nums) => {
  const newNums = quickSort(nums);
  const result = [];

  for (let index = 0; index < newNums.length; index++) {
    const current = newNums[index];

    if (current > 0) {
      return result;
    }
    // debugger
    if (index - 1 > -1 && current === newNums[index - 1]) {
      continue;
    }

    let left = index + 1;
    let right = newNums.length - 1;
    // debugger
    while (right > left) {
      const sum = newNums[right] + newNums[left] + current;
      if (sum > 0) {
        right--;
      } else if (sum < 0) {
        left ++;
      } else {
        result.push([current, newNums[left],  newNums[right]]);
        while (left < newNums.length - 1 && newNums[left] === newNums[left + 1]) {
          left++;
        }
        while (right > index && newNums[right] === newNums[right - 1]) {
          right--;
        }
        left++;
        right--;
      }
    }
  }

  return result;
}

// console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([-2,0,0,2,2]))