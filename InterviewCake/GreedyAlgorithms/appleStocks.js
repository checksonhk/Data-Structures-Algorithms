/*
Write an efficient function that takes stockPrices and returns the best profit I could have made from one purchase and one sale of one share of Apple stock yesterday.

const stockPrices = [10, 7, 5, 8, 11, 9];

getMaxProfit(stockPrices);
// Returns 6 (buying for $5 and selling for $11)

No "shorting"—you need to buy before you can sell. Also, you can't buy and sell in the same time step—at least 1 minute has to pass.

*/

// time complexity of O(n) space complexity of O(1)
function getMaxProfit(stocks) {
  if (!stocks.length) throw Error;
  if (stocks.length === 1) throw Error;
  // the only thing that matters is what is the current max Profit
  // which can be calculated by keeping track of the lowest possible stock
  let maxProfit = stocks[1] - stocks[0];
  let lowestSeen = stocks[0];

  for (let i = 1; i < stocks.length; i++) {
    const stock = stocks[i];
    // check to see what the current max profit is
    maxProfit = Math.max(maxProfit, stock - lowestSeen);
    // check lowest seen
    lowestSeen = Math.min(lowestSeen, stock);
  }
  return maxProfit;
}

console.log(getMaxProfit([10, 7, 5, 8, 11, 9]));
