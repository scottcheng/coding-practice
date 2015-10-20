// https://leetcode.com/problems/insertion-sort-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var insertionSortList = function(head) {
    if (head === null) { return head; }

    var lastSorted = head;
    var next = lastSorted.next;
    while (next) {
        if (head.val >= next.val) {
            lastSorted.next = next.next;
            next.next = head;
            head = next;
        } else {
            var before = head;
            while (before.next && before.next.val < next.val) {
                before = before.next;
            }
            // before.next.val >= next.val
            if (before.next === next) {
                lastSorted = next;
            } else {
                lastSorted.next = next.next;
                next.next = before.next;
                before.next = next;
            }
        }
        next = lastSorted.next;
    }
    return head;
};
