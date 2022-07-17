// dynamic program
var maxProfit = function (prices) {
  // 0 为持有股票， 1 为不持有股票
  // const dp = new Array(prices.length).fill(0).map(() => [0, 0]);

  // dp[0][0] = 0;
  // dp[0][1] = -prices[0];

  let notHas = 0;
  let has = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    // dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);

    // dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);

    notHas = Math.max(notHas, has + prices[i]);

    has = Math.max(has, notHas - prices[i]);
  }

  // return dp[dp.length - 1][0]
  return notHas;
};

// greedy algorithm

const maxProfit = (prices) => {
  let result = 0;

  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      result += prices[i] - prices[i - 1];
    }
  }

  return result;
};
