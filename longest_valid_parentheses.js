// https://leetcode.com/problems/longest-valid-parentheses/

/**
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    var lastIdxWithHeight = [-1];
    var prevIdxWithSameHeight = [];
    var h = 0;
    var res = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            h++;
        } else {
            h--;

            var j = lastIdxWithHeight[h];
            while (true) {
                if (s[prevIdxWithSameHeight[j] + 1] === '(') {
                    j = prevIdxWithSameHeight[j];
                } else {
                    break;
                }
            }
            if (res < i - j) {
                res = i - j;
            }
        }
        prevIdxWithSameHeight[i] = lastIdxWithHeight[h];
        lastIdxWithHeight[h] = i;
    }

    return res;
};
