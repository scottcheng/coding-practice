// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length <= 1) { return 0; }

    var ret = 0;
    for (var i = 1; i < prices.length; i++) {
        ret += Math.max(0, prices[i] - prices[i - 1]);
    }

    return ret;
};
