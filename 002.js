// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
// Output: 7 -> 0 -> 8


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {

    // new list head
    const root = new ListNode(0);

    // lists iterators
    let node = root;
    let c1 = l1;
    let c2 = l2;

    while (node) {

        const v1 = c1 ? c1.val : 0;
        const v2 = c2 ? c2.val : 0;
        const sum = node.val + v1 + v2;
        node.val = sum % 10;

        // do we need an additional node?
        const carry = (sum >= 10);
        const shouldCreate = carry || (c1 && c1.next) || (c2 && c2.next);
        if (!shouldCreate) {
            break;
        }

        // create next node based on carry
        if (carry) {
            node.next = new ListNode(1)
        } else {
            node.next = new ListNode(0)
        }

        // advance pointers
        node = node.next;
        if (c1) {
            c1 = c1.next;
        }
        if (c2) {
            c2 = c2.next;
        }
    }

    return root;
};