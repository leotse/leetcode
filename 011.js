/*
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container and n is at least 2.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(heights) {
    const n = heights.length;

    let maxSize = 0;
    let size = 0;
    let i = 0;
    let j = n - 1;
    while (i < j) {
        size = sizeOf(heights, i, j);
        maxSize = Math.max(maxSize, size);
        if (heights[i] < heights[j]) {
            i++;
        } else {
            j--;
        }
    }
    return maxSize;
}

// helper - calculate the container size
function sizeOf(heights, i, j) {
    const length = Math.abs(i - j);
    const height = Math.min(heights[i], heights[j]);
    return length * height;
}

const tests = [
    [1, 1],
    [1, 2, 3, 4, 5],
    [2, 3, 4, 5, 18, 17, 6],
];

tests.forEach((input, i) => {
    const output = maxArea(input);
    console.log(`test   #${i}`);
    console.log(`input  ${input}`);
    console.log(`output ${output}`);
    console.log();
});