/*
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

Example 1:
Input: [1,3,5,6], 5
Output: 2

Example 2:
Input: [1,3,5,6], 2
Output: 1

Example 3:

Input: [1,3,5,6], 7
Output: 4

Example 1:

Input: [1,3,5,6], 0
Output: 0
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchInsert(nums, target) {
    if (nums.length === 0) {
        return 0;
    }
    return search(nums, 0, nums.length - 1, target);
}

function search(nums, from, to, target) {
    const pivotIndex = from + Math.floor((to - from) / 2);
    const pivot = nums[pivotIndex];

    if (pivot === target) {
        return pivotIndex;
    }

    if (target < nums[from]) {
        return from;
    }

    if (target > nums[to]) {
        return to + 1;
    }

    if (target < pivot) {
        return search(nums, from, pivotIndex - 1, target);
    }

    if (target > pivot) {
        return search(nums, pivotIndex + 1, to, target);
    }
}

const tests = [{
    args: [[1, 3, 5, 6], 5],
    expected: 2
}, {
    args: [[1, 3, 5, 6], 2],
    expected: 1
}, {
    args: [[1, 3, 5, 6], 7],
    expected: 4
}, {
    args: [[1, 3, 5, 6], 0],
    expected: 0
}, {
    args: [[], 3],
    expected: 0
}, {
    args: [[5], 4],
    expected: 0
}, {
    args: [[5], 6],
    expected: 1
}, {
    args: [[3, 5, 7, 9, 10], 8],
    expected: 3
}];

tests.forEach(test => {
    const { args, expected } = test;
    const res = searchInsert(...args);
    console.log(`args:     ${args.join(' ')}`);
    console.log(`res:      ${res}`);
    console.log(`expected: ${expected}`);
    console.log();
});