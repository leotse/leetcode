/*
Given an array and a value, remove all instances of that value in-place and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

Example:

Given nums = [3,2,2,3], val = 3,

Your function should return length = 2, with the first two elements of nums being 2.
*/

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
function removeElement(nums, val) {
    if (nums.length === 0) {
        return nums.length;
    }

    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] === val) {
            j++;
        } else {
            nums[i] = nums[j];
            i++;
            j++;
        }
    }

    nums.splice(i, nums.length - i);
    return i;
}

const tests = [{
    args: [[3, 2, 2, 3], 3]
}, {
    args: [[1, 2, 3, 4, 5], 6],
}, {
    args: [[1, 1, 1, 1, 1], 1]
}, {
    args: [[], 3]
}, {
    args: [[1], 1]
}];

tests.forEach((test, i) => {
    const { args } = test;
    const [nums, val] = args;
    const res = removeElement(nums, val);
    console.log(`test #${i}`);
    console.log(nums);
    console.log(res);
    console.log();
});