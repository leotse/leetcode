/*
Implement strStr().

Return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

Example 1:

Input: haystack = "hello", needle = "ll"
Output: 2
Example 2:

Input: haystack = "aaaaa", needle = "bba"
Output: -1
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    let i = 0;
    let j = 0;
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] !== needle[j]) {
            i = i - j + 1;
            j = 0;
        } else {
            i++;
            j++;
        }
    }

    // found solution?
    if (j === needle.length) {
        return i - needle.length;
    }
    return -1;
}

const tests = [{
    args: ['hello', 'll']
}, {
    args: ['aaaaa', 'bba']
}, {
    args: ['aaaaab', 'b']
}, {
    args: ['aabc', 'cd']
}, {
    args: ['', '']
}, {
    args: ['aaa', '']
}, {
    args: ["mississippi", "issipi"]
}, {
    args: ["mississippi", "issip"]
}, {
    args: ['abcbcebcbcf', 'bce']
}];

tests.forEach(test => {
    const { args } = test;
    const [haystack, needle] = args;
    const res = strStr(haystack, needle);
    console.log(haystack, needle, res);
    console.log();
});