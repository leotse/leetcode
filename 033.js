/*
Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

You are given a target value to search. If found in the array return its index, otherwise return -1.

You may assume no duplicate exists in the array.
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    return searchIn(nums, 0, nums.length - 1, target);
}

function searchIn(nums, start, end, target) {
    if (nums.length === 0) {
        return -1;
    }

    const pivotIndex = Math.floor((end - start) / 2) + start;
    const pivot = nums[pivotIndex];

    if (pivot === target) {
        return pivotIndex;
    } else if (end <= start) {
        return -1;
    } else if (nums[start] <= pivot) {
        // bottom half is sorted
        if (nums[start] <= target && target <= pivot) {
            // AND target is in bottom half
            return searchIn(nums, start, pivotIndex - 1, target);
        }
        return searchIn(nums, pivotIndex + 1, end, target);
    } else if (pivot <= nums[end]) {
        // top half is sorted
        if (pivot <= target && target <= nums[end]) {
            // AND target is in top half
            return searchIn(nums, pivotIndex + 1, end, target);
        }
        return searchIn(nums, start, pivotIndex - 1, target);
    }
}

const tests = [{
        args: [[4, 5, 6, 7, 0, 1, 2], 1],
        expected: 5
    }, {
        args: [[4, 5, 6, 7, 0, 1, 2], 7],
        expected: 3
    }, {
        args: [[4, 5, 6, 7, 0, 1, 2], 6],
        expected: 2
    }, {
        args: [[4, 5, 6, 7, 0, 1, 2], 4],
        expected: 0
    }, {
        args: [[4, 5, 6, 7, 0, 1, 2], 2],
        expected: 6
    }, {
        args: [[4, 5, 6, 7, 0, 1, 2], 8],
        expected: -1
    }, {
        args: [[1], 1],
        expected: 0
    }, {
        args: [[], 9],
        expected: -1
    }, {
    args: [[5, 1, 3], 5],
    expected: 0
}];

tests.forEach(test => {
    const { args, expected } = test;
    const res = search(...args);
    console.log(`args:     ${args.join('  ')}`);
    console.log(`res:      ${res}`);
    console.log(`expected: ${expected}`);
    console.log();
});
