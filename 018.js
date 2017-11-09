/*
Given an array S of n integers, are there elements a, b, c, and d in S such that a + b + c + d = target? Find all unique quadruplets in the array which gives the sum of target.

Note: The solution set must not contain duplicate quadruplets.

For example, given array S = [1, 0, -1, 0, -2, 2], and target = 0.

A solution set is:
[
  [-1,  0, 0, 1],
  [-2, -1, 1, 2],
  [-2,  0, 0, 2]
]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
function fourSum(nums, target) {
    const n = nums.length;

    // edge case
    if (n < 4) {
        return [];
    }

    // sort the nums for algo
    nums = nums.sort((n1, n2) => n1 - n2);

    // map to ensure solution uniqueness
    const solutions = new Map();

    // explore solutino space
    let sum;
    let a, b, c, d;
    for (a = 0; a < n - 3; a++) {
        for (d = n - 1; d >= a + 3; d--) {
            b = a + 1;
            c = d - 1;
            while (b < c) {
                sum = nums[a] + nums[b] + nums[c] + nums[d];
                if (sum < target) {
                    b++;
                } else if (sum > target) {
                    c--;
                } else {
                    solutions.set(`${nums[a]}${nums[b]}${nums[c]}${nums[d]}`, [nums[a], nums[b], nums[c], nums[d]]);
                    b++;
                    c--;
                }
            }
        }
    }

    return Array.from(solutions.values());
}

const tests = [{
    args: [
        [1, 0, -1, 0, -2, 2],
        0,
    ],
    expected: [
        [-1, 0, 0, 1],
        [-2, -1, 1, 2],
        [-2, 0, 0, 2],
    ]
}, {
    args: [
        [-1, 0, 0, 1],
        0,
    ],
    expected: [
        [-1, 0, 0, 1]
    ]
}];

tests.forEach(test => {
    const {
        args,
        expected
    } = test;
    const output = fourSum(...args);
    console.log(`args:     ${args}`);
    console.log(`output:   ${output.join('  ')}`);
    console.log(`expected: ${expected.join('  ')}`);
    console.log();
});