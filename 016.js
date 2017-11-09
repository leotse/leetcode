/*
Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target. Return the sum of the three integers. You may assume that each input would have exactly one solution.

    For example, given array S = {-1 2 1 -4}, and target = 1.

    The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function threeSumClosest(nums, target) {
    const n = nums.length;
    nums = nums.sort((x, y) => x - y);

    let a, b, c, sum, closest = Math.pow(2, 31);
    for (b = 1; b < n - 1; b++) {
        a = 0
        c = n - 1;
        while (a < b && c > b) {
            sum = nums[a] + nums[b] + nums[c];

            // best solution?
            if (sum === target) {
                return sum;
            } else if (Math.abs(sum - target) < Math.abs(closest - target)) {
                closest = sum;
            }

            // update pointers
            if(sum < target) {
                a++;
            } else {
                c--;
            }
        }
    }

    return closest;
}

const tests = [{
    args: [
        [-1, 2, 1, -4], 1
    ],
    expected: 2
}];

tests.forEach((test, i) => {
    const {
        args,
        expected
    } = test;
    const output = threeSumClosest(...args);
    console.log(`test #${i}`);
    console.log(args, expected, output);
});