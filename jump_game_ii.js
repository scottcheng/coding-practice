// https://leetcode.com/problems/jump-game-ii/

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    if (nums.length === 1) { return 0; }

    var steps = 0;
    var cur = 0;
    while (cur + nums[cur] < nums.length - 1) {
        var bestNext = null;
        var bestNextDist = 0;
        for (var d = 1; d <= nums[cur]; d++) {
            if (d + nums[cur + d] > bestNextDist) {
                bestNextDist = d + nums[cur + d];
                bestNext = cur + d;
            }
        }
        cur = bestNext;
        steps++;
    }

    return steps + 1;
};
