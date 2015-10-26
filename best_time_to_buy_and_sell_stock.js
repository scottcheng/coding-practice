// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) { return 0; }
    var min = prices[0];
    var ret = 0;
    for (var i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        ret = Math.max(ret, prices[i] - min);
    }
    return ret;
};
