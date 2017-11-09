/*
Given a sorted array, remove the duplicates in-place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Example:

Given nums = [1,1,2],

Your function should return length = 2, with the first two elements of nums being 1 and 2 respectively.
It doesn't matter what you leave beyond the new length.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
function removeDuplicates(nums) {

    // no work needed if there are < 2 nums
    if (nums.length < 2) {
        return nums.length;
    }

    let i = 0;
    let j = 1;
    while (j < nums.length) {
        if (nums[i] === nums[j]) {
            j++;
        } else {
            nums[i + 1] = nums[j];
            i++;
            j++;
        }
    }

    nums.splice(i + 1, nums.length - i - 1);
    return nums.length;
}

const tests = [{
    args: [1, 1, 2]
}, {
    args: [1, 1, 1, 1, 2, 2]
}, {
    args: [],
}, {
    args: [1, 1, 2, 2, 3, 3, 4, 4, 5],
}, {
    args: [1, 2, 3, 4, 5]
}, {
    args: [1, 1, 1, 1]
}];

tests.forEach((test, i) => {
    const { args } = test;
    const res = removeDuplicates(args);
    console.log(`test #${i}`);
    console.log(args);
    console.log(res);
    console.log();
});