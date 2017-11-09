// There are two sorted arrays nums1 and nums2 of size m and n respectively.

// Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).

// Example 1:
// nums1 = [1, 3]
// nums2 = [2]

// The median is 2.0
// Example 2:
// nums1 = [1, 2]
// nums2 = [3, 4]

// The median is (2 + 3)/2 = 2.5


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

function findMedianSortedArrays(nums1, nums2) {

    const totalLength = nums1.length + nums2.length;
    const targetI = Math.floor(totalLength / 2);
    const needAvg = totalLength % 2 === 0;

    const sorted = [];
    let m = 0;
    let n = 0;

    while (m < nums1.length || n < nums2.length) {
        const num1 = nums1[m];
        const num2 = nums2[n];

        if (typeof num1 === 'undefined') {
            sorted.push(num2);
            n++;
        } else if (typeof num2 === 'undefined') {
            sorted.push(num1);
            m++;
        } else if (num1 <= num2) {
            sorted.push(num1);
            m++;
        } else {
            sorted.push(num2);
            n++;
        }
    }

    if (needAvg) {
        return (sorted[targetI] + sorted[targetI - 1]) / 2;
    } else {
        return sorted[targetI];
    }
};

const tests = [
    [
        [1, 3],
        [2]
    ],
    [
        [1, 2],
        [3, 4]
    ],
    [
        [1, 5],
        [2, 3],
    ],
    [
        [1, 1, 1, 1, 1],
        [1, 1],
    ],
    [
        [1, 3, 5, 7],
        [2],
    ],
    [
        [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22],
        [0, 6],
    ]
];

tests.forEach(test => {
    const res = findMedianSortedArrays(...test);
    console.log(res);
});