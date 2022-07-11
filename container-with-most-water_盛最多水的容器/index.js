var maxArea = function(height) {
  let max = 0;

  let left = 0;
  let right = height.length - 1;

  while (left < right) {
      max = Math.max(max, (right - left) * Math.min(height[right], height[left]))
      if (height[left] <= height[right]) {
          left++;
      } else {
          right--;
      }
  }

  return max
}