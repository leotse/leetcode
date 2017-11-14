/*
Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.

If such arrangement is not possible, it must rearrange it as the lowest possible order (ie, sorted in ascending order).

The replacement must be in-place, do not allocate extra memory.

Here are some examples. Inputs are in the left-hand column and its corresponding outputs are in the right-hand column.
1,2,3 → 1,3,2
3,2,1 → 1,2,3
1,1,5 → 1,5,1

1 2 3 4
1 2 4 3
1 3 2 4
1 3 4 2
1 4 2 3
1 4 3 2
2 1 3 4
2 1 4 3
2 3 1 4
2 3 4 1
2 4 1 3
2 4 3 1
3 1 2 4
3 1 4 2

1 4 3 2 5
1 4 3 5 2
1 4 5 2 3
1 4 5 3 2
1 5 2 3 4
1 5 2 4 3
1 5 3 2 4
1 5 3 4 2
1 5 4 2 3
1 5 4 3 2
2 1 3 4 5

*/

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums) {

    // check edge cases
    if (nums.length <= 1) {
        return;
    }

    const pivotIndex = getPivotIndex(nums);
    if (pivotIndex < 0) {
        sort(nums, 0);
        return;
    }

    // sort nums after pivot
    sort(nums, pivotIndex + 1);

    // get index of num we want to swap with
    // i.e. smallest num that is > than pivot
    const pivot = nums[pivotIndex];
    let swapIndex = getSwapIndex(nums, pivotIndex + 1, pivot);

    // swap pivot with the next smallest number
    let temp = nums[pivotIndex];
    nums[pivotIndex] = nums[swapIndex];
    nums[swapIndex] = temp;

    // ensure nums after new pivot is sorted
    sort(nums, pivotIndex + 1);
}

// helper - returns the swap index for the given from and pivot
// assumes nums after pivot are sorted
function getSwapIndex(nums, from, pivot) {
    let i;
    for (i = from; i < nums.length; i++) {
        if (nums[i] > pivot) {
            return i;
        }
    }
    return -1;
}

// helper - returns the pivot's index
// assumes nums.length is >= 2
function getPivotIndex(nums) {
    let i = nums.length - 2;
    let j = nums.length - 1;
    while (i >= 0) {
        if (nums[i] < nums[j]) {
            return i;
        }
        i--;
        j--;
    }
    return -1;
}

// helper - sort the given nums in-place
// cheats a little for now by using extra memory so we can use built-in sort
// improve later by implementing subarray sorting
function sort(nums, from) {

    const temp = nums.slice(from);
    temp.sort((n1, n2) => n1 - n2);

    let i;
    for (i = temp.length - 1; i >= 0; i--) {
        nums[from + i] = temp[i];
    }

    return nums;
}

const tests = [{
    args: [1, 2, 3],
    expected: [1, 3, 2]
}, {
    args: [3, 2, 1],
    expected: [1, 2, 3]
}, {
    args: [1, 1, 5],
    expected: [1, 5, 1]
}, {
    args: [1, 5, 4, 3, 2],
    expected: [2, 1, 3, 4, 5]
}, {
    args: [1, 4, 5, 3, 2],
    expected: [1, 5, 2, 3, 4]
}, {
    args: [1, 1, 1],
    expected: [1, 1, 1]
}, {
    args: [1],
    expected: [1]
}, {
    args: [],
    expected: []
}];

tests.forEach(test => {
    const { args, expected } = test;
    console.log(`args:     ${args}`);
    nextPermutation(args);
    console.log(`res:      ${args}`);
    console.log(`expected: ${expected}`);
    console.log();
});