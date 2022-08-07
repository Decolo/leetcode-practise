var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (right > left) {
      const midIndex = Math.floor((right + left) / 2);
      const mid = nums[midIndex];

      if (mid === target) {
          return midIndex
      } else if (target > nums[right]) {
          // console.log(mid, target)
          if (mid < target) {
              if (mid > nums[left]) {
                  left = midIndex + 1;
              } else {
                  right = midIndex - 1;
              }
          } else {
              right = midIndex - 1;
          }
      } else {
          if (mid > target) {
              if (mid > nums[right]) {
                  left = midIndex + 1;
              } else {
                  right = midIndex - 1
              }
          } else {
              left = midIndex + 1;
          }
      }
  }

  return nums[left] === target ? left: -1
}