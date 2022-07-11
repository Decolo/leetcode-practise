const quickSort = (nums) => {
  // console.log(nums)
  if (nums.length < 2) return nums;

  const pivotIndex = Math.floor(nums.length / 2) - 1;
  const pivot = nums[pivotIndex];
  const left = [];
  const right = [];

  for (let index = 0; index < nums.length; index++) {
    const current = nums[index];
    if (index === pivotIndex) {
      continue
    }

    if (current > pivot) {
      right.push(current)
    } else {
      left.push(current);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  const len = nums.length;

  const sortedNums = quickSort(nums);

  const last3 = sortedNums[len - 1] * sortedNums[len - 2] *  sortedNums[len - 3];


  const pre2 = sortedNums[0] * sortedNums[1];

  return Math.max(pre2 * sortedNums[len - 1], last3)

};

console.log(maximumProduct([-8,-7,-2,10,20]))
