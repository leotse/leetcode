/*

Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.

Note:
Given n will always be valid.
Try to do this in one pass.

*/

const list = require('./linkedlist');

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {

    // edge cases
    if (!head) {
        return head;
    }
    if (!head.next) {
        return null;
    }

    // store nodes
    const nodes = [];
    let node = head;
    while (!!node) {
        nodes.push(node);
        node = node.next;
    }

    // remove anything from a list of length 1 will result in empty array
    // problem specifies n will always be valid, no need to check
    const length = nodes.length;
    if (n === length) {
        return head.next;
    } else if (n === 1) {
        nodes[length - n - 1].next = null;
    } else {
        nodes[length - n - 1].next = nodes[length - n + 1];
    }

    return head;
}

const tests = [{
        args: [list.create([1, 2, 3, 4, 5]), 2],
        expected: list.create([1, 2, 3, 5])
    },
    {
        args: [list.create([1, 2, 3, 4, 5]), 1],
        expected: list.create([1, 2, 3, 4])
    }, {
        args: [list.create(1), 1],
        expected: null,
    }
];

tests.forEach(test => {
    const {
        args,
        expected
    } = test;
    const output = removeNthFromEnd(...args);
    console.log('output  ', list.format(output));
    console.log('expected', list.format(expected));
    console.log();
});