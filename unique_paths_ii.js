// https://leetcode.com/problems/unique-paths-ii/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    var dp = { '0:0': 1 };

    var fn = function(i, j) {
        if (i < 0 || j < 0) { return 0; }
        if (obstacleGrid[i][j] === 1) { return 0; }

        var key = i + ':' + j;
        if (dp[key]) { return dp[key]; }

        dp[key] = fn(i, j - 1) + fn(i - 1, j);
        return dp[key];
    };

    return fn(obstacleGrid.length - 1, obstacleGrid[0].length - 1);
};
