// Given an array of integers, return indices of the two numbers such that they add up to a specific target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// Example:
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

function twoSum(nums, target) {
    
    // init map
    const numsMap = new Map();
    
    for(let j = 0; j < nums.length; j++) {
        const num = nums[j];
        const delta = target - num;
        if(numsMap.has(delta)) {
            const i = numsMap.get(delta);
            return [i, j];
        }
        numsMap.set(num, j);
    }
    
    return [-1, -1];
}