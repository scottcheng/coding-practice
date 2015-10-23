// https://leetcode.com/problems/edit-distance/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = function(word1, word2) {
    var dp = {};
    var recur = function(w1, w2) {
        if (dp[w1 + ':' + w2] != null) { return dp[w1 + ':' + w2]; }

        var val;
        if (w1.length === 0) { val = w2.length; }
        else if (w2.length === 0) { val = w1.length; }
        else if (w1[0] === w2[0]) { val = recur(w1.substring(1), w2.substring(1)); }
        else {
            val = Math.min(recur(w1.substring(1), w2) + 1,
                           recur(w1, w2.substring(1)) + 1,
                           recur(w1.substring(1), w2.substring(1)) + 1);
        }
        dp[w1 + ':' + w2] = val;
        return val;
    }

    return recur(word1, word2);
};
