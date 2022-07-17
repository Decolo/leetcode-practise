// greedy algorithm
var findContentChildren = function (g, s) {
  const sortedG = g.sort((a, z) => a - z);
  const sortedS = s.sort((a, z) => a - z);

  let result = 0;
  let index = sortedS.length - 1;

  for (let i = sortedG.length - 1; i > -1; i--) {
    if (index < 0) return result;

    if (sortedG[i] <= sortedS[index]) {
      index--;
      result++;
    }
  }

  return result;
};
