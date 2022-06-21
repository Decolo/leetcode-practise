var twoSum = function (nums, target) {
  let res = {};
  for (let i = 0; i < nums.length; i++) {
    // 每个人登记自己想要配对的人，让主持人记住
    res[target - nums[i]] = nums[i];
  }
  for (let j = 0; j < nums.length; j++) {
    // 每个人再次报数的时候，主持人看一下名单里有没有他
    if (res[nums[j]] !== undefined) {
      return [nums[j], res[nums[j]]];
    }
  }
};
