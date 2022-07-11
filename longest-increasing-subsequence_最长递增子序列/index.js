// dynamic program
var lengthOfLIS = function (nums) {
  if (nums.length < 2) return nums.length;

  if (nums.length === 2) return nums[1] - nums[0] ? 2 : 1;

  const temp = new Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let tempMaxLength = 1;
    for (let j = 0; j <= i; j++) {
      if (nums[i] > nums[j]) {
        tempMaxLength = Math.max(tempMaxLength, temp[j] + 1);
      }
    }

    temp[i] = tempMaxLength;
  }

  return temp.sort((a, z) => a - z)[temp.length - 1];
};

// 二分查找

var lengthOfLIS = function (nums) {
  if (nums.length < 2) return nums.length;

  const result = [nums[0]];
  for (let i = 1; i < nums.length; i++) {
    const current = nums[i];

    if (current > result[result.length - 1]) {
      result.push(current);
    } else {
      let tempIndex = 0;
      let left = 0;
      let right = result.length - 1;

      while (right >= left) {
        const middleIndex = Math.floor((right + left) / 2);
        const middle = result[middleIndex];

        if (middle === current) {
          tempIndex = middleIndex;
          break;
        } else if (current > middle) {
          left = middleIndex + 1;
        } else {
          right = middleIndex - 1;
        }
      }

      if (right < left) {
        tempIndex = left;
      }

      result[tempIndex] = current;
    }
  }

  return result.length;
};
