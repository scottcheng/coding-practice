// https://leetcode.com/problems/merge-intervals/

/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length === 0) { return []; }

    intervals.sort(function(a, b) { return a.start - b.start; });
    var ret = [];
    var cur = intervals[0];

    for (var i = 1; i < intervals.length; i++) {
        if (intervals[i].start > cur.end) {
            ret.push(cur);
            cur = intervals[i];
        }
        cur.end = Math.max(cur.end, intervals[i].end);
    }
    ret.push(cur);

    return ret;
};
