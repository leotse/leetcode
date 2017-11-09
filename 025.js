/*
Given a linked list, reverse the nodes of a linked list k at a time and return its modified list.

k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes in the end should remain as it is.

You may not alter the values in the nodes, only nodes itself may be changed.

Only constant memory is allowed.

For example,
Given this linked list: 1->2->3->4->5

For k = 2, you should return: 2->1->4->3->5

For k = 3, you should return: 3->2->1->4->5
*/

const list = require('./linkedlist');

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {

    // base case: k <= 1
    if (k <= 1) {
        return head;
    }

    // fill up buffer
    const knodes = [];
    let i = 0;
    let node = head;
    while (node && i < k) {
        knodes.push(node);
        node = node.next;
        i++
    }

    // base case: # of nodes in list is < k
    if (knodes.length < k) {
        return head;
    }

    // reverse
    let j;
    knodes[0].next = knodes[k - 1].next;
    for (j = knodes.length - 1; j > 0; j--) {
        knodes[j].next = knodes[j - 1];
    }

    // recursively reverse the rest of the linked list
    knodes[0].next = reverseKGroup(knodes[0].next, k);

    // done!
    return knodes[k - 1];
}

const tests = [{
    args: [list.create([1, 2, 3, 4, 5]), 1]
}, {
    args: [list.create([1, 2, 3, 4, 5]), 2]
}, {
    args: [list.create([1]), 1]
}, {
    args: [list.create([1]), 0]
}, {
    args: [list.create([]), 0]
}, {
    args: [list.create([1, 2, 3]), 0]
}];

tests.forEach((test, i) => {
    const { args } = test;
    const res = reverseKGroup(...args);
    console.log(`test #${i}`);
    console.log(list.format(res));
    console.log();
});