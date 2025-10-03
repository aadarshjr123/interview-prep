var maxProfit = function (prices) {
  min_price = prices[0];
  max_price = 0;
  for (let price of prices) {
    if (price < min_price) {
      min_price = price;
    }

    let profit = price - min_price;
    if (profit > max_price) {
      max_price = profit;
    }
  }
  return max_price;
};

// time: O(n)
// space: O(1)
// one pass
// iterate through the prices array
// keep track of the minimum price seen so far
// calculate the potential profit at each price by subtracting the minimum price from the current price
// update the maximum profit if the potential profit is greater than the current maximum profit
// return the maximum profit after iterating through the array

// example
// [7,1,5,3,6,4] => 5 (buy at 1, sell at 6)
// [7,6,4,3,1] => 0 (no profit possible)
// [1,2] => 1 (buy at 1, sell at 2)
