/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
  let zero = 0;
  let one = 0;
  let two = 0;

  for (let i = 0; i < nums.length; i++) {
    switch (nums[i]) {
      case 0:
        zero++;
        break;
      case 1:
        one++;
        break;
      default:
        two++;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    while (i < zero) {
      nums[i] = 0;
      i++;
    }
    while (i >= zero && i < one + zero) {
      nums[i] = 1;
      i++;
    }
    while (i >= one && i < one + zero + two) {
      nums[i] = 2;
      i++;
    }
  }
};

