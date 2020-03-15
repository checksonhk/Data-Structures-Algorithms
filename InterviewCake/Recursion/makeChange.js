/*
Write a function that, given:

an amount of money
an array of coin denominations
computes the number of ways to make the amount of money with coins of the available denominations.
*/

// recursive way
function _count(n, coinsIdx, coins) {
  if (n === 0) return 1;
  if (n < 0) return 0;

  let ways = 0;
  for (let coin = coinsIdx; coin < coins.length; coin++) {
    ways += _count(n - coins[coin], coin, coins);
  }
  return ways;
}

function count(n) {
  const coins = [1, 2, 5];
  return _count(n, 0, coins);
}

function changePossibilitiesBottomUp(amount, denominations) {
  // Initialize an array of zeros with indices up to amount
  const waysOfDoingNcents = new Array(amount + 1).fill(0);
  waysOfDoingNcents[0] = 1;

  denominations.forEach(coin => {
    for (let higherAmount = coin; higherAmount <= amount; higherAmount++) {
      const higherAmountRemainder = higherAmount - coin;
      waysOfDoingNcents[higherAmount] += waysOfDoingNcents[higherAmountRemainder];
    }
  });

  return waysOfDoingNcents[amount];
}

console.log(makeChange(4, [1, 2, 3]));
