// https://leetcode.com/problems/triangle/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
    for (var i = 0; i < triangle.length; i++) {
        for (var j = 0; j <= i; j++) {
            if (i === 0) { continue; }
            else if (j === 0) { triangle[i][j] += triangle[i - 1][j]; }
            else if (j === i) { triangle[i][j] += triangle[i - 1][j - 1]; }
            else { triangle[i][j] += Math.min(triangle[i - 1][j - 1], triangle[i - 1][j]); }
        }
    }
    return Math.min.apply(null, triangle[triangle.length - 1]);
};
