// https://leetcode.com/problems/partition-list/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

var partition = function(head, x) {
    if (!head) { return null; }

    var lHead = new ListNode(0);
    var lTail = lHead;
    var rHead = new ListNode(0);
    var rTail = rHead;

    while (head) {
        if (head.val < x) {
            lTail.next = head;
            lTail = head;
        } else {
            rTail.next = head;
            rTail = head;
        }
        head = head.next;
    }
    lTail.next = rHead.next;
    rTail.next = null;
    return lHead.next;
};
