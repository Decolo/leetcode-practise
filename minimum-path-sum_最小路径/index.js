/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
  const maxGrid = new Array(grid.length);
  for (let index = 0; index < maxGrid.length; index++) {
    maxGrid[index] = new Array(grid[0].length);
  }

  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[x].length; y++) {
      if (x === 0 && y === 0) {
        maxGrid[x][y] = grid[x][y];
      } else if (x === 0) {
        maxGrid[x][y] = maxGrid[x][y - 1] + grid[x][y];
      } else if (y === 0) {
        maxGrid[x][y] = maxGrid[x - 1][y] + grid[x][y];
      } else {
        maxGrid[x][y] =
          Math.min(maxGrid[x - 1][y], maxGrid[x][y - 1]) + grid[x][y];
      }
    }
  }

  const lastYnums = maxGrid[maxGrid.length - 1];
  return lastYnums[lastYnums.length - 1];
};
