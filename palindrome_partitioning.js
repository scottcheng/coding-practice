// https://leetcode.com/problems/palindrome-partitioning/

/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
    if (s === '') { return []; }

    var res = [];

    var isPalindrome = function(t) {
        if (t.length <= 1) { return true; }
        return t[0] === t[t.length - 1] && isPalindrome(t.substring(1, t.length - 1));
    };

    var partitions = [];
    // t is the current substring of s
    var recur = function(i, t) {
        if (i === s.length) {
            if (isPalindrome(t)) {
                res.push(partitions.concat([t]));
            }
            return;
        }

        if (isPalindrome(t)) {
            // Partition at i
            partitions.push(t);
            recur(i + 1, s[i]);
            partitions.pop();
        }

        // Not partition at i
        recur(i + 1, t + s[i], partitions);
    };
    recur(1, s[0], []);

    return res;
};
