var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, z) => a[1] - z[1]);
  let ans = 1;
  let right = intervals[0][1];

  for (let i = 1; i < intervals.length; i++) {
    if (intervals[i][0] >= right) {
      ans++;
      right = intervals[i][1];
    }
  }

  return intervals.length - ans;
};
