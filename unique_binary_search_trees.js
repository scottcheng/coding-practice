// https://leetcode.com/problems/unique-binary-search-trees/

/**
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = [];
    var recur = function(s, e) {
        if (dp[e - s]) { return dp[e - s]; }

        var res = 0;
        for (var root = s; root <= e; root++) {
            var left = recur(s, root - 1);
            var right = recur(root + 1, e);
            res += left * right;
        }
        if (res === 0) { res = 1; }
        dp[e - s] = res;
        return res;
    };

    return recur(1, n);
};
