var canJump = function (nums) {
  if (nums.length < 2) return true;

  let maxIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];

    if (maxIndex < i) {
      return false;
    }

    maxIndex = Math.max(maxIndex, current + i);

    if (maxIndex >= nums.length - 1) {
      return true;
    }
  }

  // return maxIndex >= nums.length - 1;
  return false;
};

var canJump = function (nums) {
  if (nums.length < 2) return true;

  let maxIndex = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    const current = nums[i];

    if (maxIndex < i) {
      return false;
    }

    maxIndex = Math.max(maxIndex, current + i);
  }

  return maxIndex >= nums.length - 1;
};
