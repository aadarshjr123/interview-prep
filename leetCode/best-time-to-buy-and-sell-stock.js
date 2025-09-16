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
