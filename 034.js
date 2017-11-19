/*
Given an array of integers sorted in ascending order, find the starting and ending position of a given target value.

Your algorithm's runtime complexity must be in the order of O(log n).

If the target is not found in the array, return [-1, -1].

For example,
Given [5, 7, 7, 8, 8, 10] and target value 8,
return [3, 4].
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function searchRange(nums, target) {

    if (nums.length === 0) {
        return [-1, -1];
    }

    const start = searchLower(nums, 0, nums.length - 1, target);
    if (start < 0) {
        return [-1, -1];
    }
    const end = searchUpper(nums, 0, nums.length - 1, target);
    return [start, end];
}

function searchLower(nums, start, end, target) {
    const pivotIndex = start + Math.floor((end - start) / 2);
    const pivot = nums[pivotIndex];
    const pivotLeft = nums[pivotIndex - 1];

    if (pivot === target && pivotIndex === start) {
        return pivotIndex;
    } else if (pivot === target && pivotLeft < pivot) {
        return pivotIndex;
    } else if (end <= start) {
        return -1;
    } else if (target < pivot) {
        return searchLower(nums, start, pivotIndex - 1, target);
    } else if (pivot === target && pivotLeft === pivot) {
        return searchLower(nums, start, pivotIndex - 1, target);
    } else {
        return searchLower(nums, pivotIndex + 1, end, target);
    }
}

function searchUpper(nums, start, end, target) {
    const pivotIndex = start + Math.floor((end - start) / 2);
    const pivot = nums[pivotIndex];
    const pivotRight = nums[pivotIndex + 1];

    if (pivot === target && pivotIndex === end) {
        return pivotIndex;
    } else if (pivot === target && pivotRight > pivot) {
        return pivotIndex;
    } else if (end <= start) {
        return -1;
    } else if (target < pivot) {
        return searchUpper(nums, start, pivotIndex - 1, target);
    } else if (pivot === target && pivotRight === pivot) {
        return searchUpper(nums, pivotIndex + 1, end, target);
    } else {
        return searchUpper(nums, pivotIndex + 1, end, target);
    }
}

const tests = [{
    args: [[5, 7, 7, 8, 8, 10], 8],
    expected: [3, 4]
}, {
    args: [[5, 7, 7, 8, 8, 10], 3],
    expected: [-1, -1]
}, {
    args: [[8, 8, 8, 8, 8, 8], 8],
    expected: [0, 5]
}, {
    args: [[8], 8],
    expected: [0, 0]
}, {
    args: [[], 1],
    expected: [-1, -1]
}, {
    args: [[2, 2], 2],
    expected: [0, 1]
}];

tests.forEach(test => {
    const { args, expected } = test;
    const res = searchRange(...args);
    console.log(`args:     ${args.join(' ')}`);
    console.log(`res:      ${res}`);
    console.log(`expected: ${expected}`);
    console.log();
});