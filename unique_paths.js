// https://leetcode.com/problems/unique-paths/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    dp = [1, 1];
    var factorial = function(k) {
        if (dp[k]) { return dp[k]; }
        return k * factorial(k - 1);
    };
    return factorial(m + n - 2) / factorial(n - 1) / factorial(m - 1);
};
