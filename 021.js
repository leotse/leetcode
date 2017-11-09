/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
*/

const list = require('./linkedlist');

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
function mergeTwoLists(l1, l2) {

    if (!l1) {
        return l2;
    }

    if (!l2) {
        return l1;
    }

    if (l1.val < l2.val) {
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}

const tests = [{
    args: [
        list.create([1, 2, 3, 4, 5]),
        list.create([6, 7, 8, 9, 10]),
    ]
}, {
    args: [
        list.create([6, 7, 8, 9, 10]),
        list.create([1, 2, 3, 4, 5]),
    ]
}, {
    args: [
        list.create([1, 3, 5]),
        list.create([2, 4, 6]),
    ]
}, {
    args: [
        list.create([2, 4, 6]),
        list.create([1, 3, 5]),
    ]
}, {
    args: [
        list.create([1, 2]),
        list.create([1, 3, 4]),
    ]
}, {
    args: [
        list.create([1]),
        list.create([0]),
    ]
}];

tests.forEach(test => {
    const {
        args
    } = test;
    console.log(`args:   ${list.format(args[0])}  ${list.format(args[1])}`);
    const output = mergeTwoLists(...args);
    console.log(`output: ${list.format(output)}`);
    console.log();
});