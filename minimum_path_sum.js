// https://leetcode.com/problems/minimum-path-sum/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    if (grid.length === 0 || grid[0].length === 0) { return 0; }

    var rowSums = [];
    for (var r = 0; r < grid.length; r++) {
        for (var c = 0; c < grid[0].length; c++) {
            if (r === 0 && c === 0) {
                rowSums[c] = grid[r][c];
            } else if (r === 0) {
                rowSums[c] = rowSums[c - 1] + grid[r][c];
            } else if (c === 0) {
                rowSums[c] += grid[r][c];
            } else {
                rowSums[c] = Math.min(rowSums[c - 1], rowSums[c]) + grid[r][c];
            }
        }
    }

    return rowSums[grid[0].length - 1];
};
