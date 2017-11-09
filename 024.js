/*
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
*/

const list = require('./linkedlist');

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }

    // swap the first 2 nodes
    let n1 = head;
    let n2 = head.next;
    n1.next = n2.next;
    n2.next = n1;

    // recursive swap if there are more
    if (n1.next) {
        n1.next = swapPairs(n1.next);
    }

    return n2;
}

const tests = [{
    args: list.create([])
}, {
    args: list.create([1])
}, {
    args: list.create([1, 2])
}, {
    args: list.create([1, 2, 3])
}, {
    args: list.create([1, 2, 3, 4])
}, {
    args: list.create([1, 2, 3, 4, 5])
}, {
    args: list.create([1, 2, 3, 4, 5, 6])
}];

tests.forEach((test, i) => {
    const { args } = test;
    console.log(`test #${i}`);
    console.log(list.format(swapPairs(args)));
    console.log();
});