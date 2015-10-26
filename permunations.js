// https://leetcode.com/problems/permutations/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    var recur = function(arr, cur) {
        if (arr.length <= 1) { return [arr]; }

        var perms = recur(arr.slice(1));
        var ret = [];
        perms.forEach(function(p) {
            for (var i = 0; i <= p.length; i++) {
                ret.push([].concat(p.slice(0, i), [arr[0]], p.slice(i)));
            }
        });
        return ret;
    };

    return recur(nums);
};
