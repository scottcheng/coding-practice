// https://leetcode.com/problems/generate-parentheses/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    var res = [];

    var recur = function(s, n, nOpen, nUnmatched) {
        if (s.length === n * 2) {
            return res.push(s);
        }

        if (nOpen < n) {
            recur(s + '(', n, nOpen + 1, nUnmatched + 1);
        }
        if (nUnmatched > 0) {
            recur(s + ')', n, nOpen, nUnmatched - 1);
        }
    };

    recur('', n, 0, 0);

    return res;
};

// With stack
var generateParenthesis2 = function(n) {
    var res = [];

    var stack = [];
    stack.push(['', 0, 0]);

    while (stack.length > 0) {
        var t = stack.pop();
        var s = t[0];
        var nOpen = t[1];
        var nUnmatched = t[2];

        if (s.length === n * 2) {
            res.push(s);
            continue;
        }

        if (nOpen < n) {
            stack.push([s + '(', nOpen + 1, nUnmatched + 1]);
        }
        if (nUnmatched > 0) {
            stack.push([s + ')', nOpen , nUnmatched - 1]);
        }
    }

    return res;
};
