// https://leetcode.com/problems/jump-game/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    var max = 0;
    for (var i = 0; i < nums.length && i <= max; i++) {
        max = Math.max(max, i + nums[i]);
    }
    return max >= nums.length - 1;
};
