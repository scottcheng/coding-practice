// https://leetcode.com/problems/maximum-subarray/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = nums[0];
    var sum = 0;
    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        if (sum > maxSum) { maxSum = sum; }
        if (sum < 0) { sum = 0; }
    }
    return maxSum;
};
