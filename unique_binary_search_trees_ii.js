// https://leetcode.com/problems/unique-binary-search-trees-ii/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) { return [[]]; }

    // Return possible BSTs with [s, e]
    var recur = function(s, e) {
        var res = [];
        var add = function(root, left, right) {
            var t = new TreeNode(root);
            t.left = left;
            t.right = right;
            res.push(t);
        };

        for (var root = s; root <= e; root++) {
            var left = recur(s, root - 1);
            var right = recur(root + 1, e);
            if (left.length === 0 && right.length === 0) {
                add(root, null, null);
            } else if (left.length === 0) {
                right.forEach(function(r) {
                    add(root, null, r);
                });
            } else if (right.length === 0) {
                left.forEach(function(l) {
                    add(root, l, null);
                });
            } else {
                left.forEach(function(l) {
                    right.forEach(function(r) {
                        add(root, l, r);
                    });
                });
            }
        }
        return res;
    };

    return recur(1, n);
};
