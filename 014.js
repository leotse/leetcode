/*
Write a function to find the longest common prefix string amongst an array of strings.
*/

/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {

    if (strs.length === 0) {
        return '';
    }

    if (strs.length === 1) {
        return strs[0];
    }

    let lengths = strs.map(str => str.length);
    let minLength = Math.min(...lengths);
    let prefix = '';
    let i = j = 0;
    for (i = 0; i < minLength; i++) {
        for (j = 0; j < strs.length - 1; j++) {
            if (strs[j][i] !== strs[j + 1][i]) {
                return prefix;
            }
        }
        prefix = prefix + strs[j][i];
    }

    return prefix;
}

const tests = [
    [
        ''
    ],
    [
        ['abc', 'abc'],
        'abc',
    ],
    [
        ['ccccc', 'c'],
        'c',
    ],
    [
        ['ababcde', 'ccc'],
        '',
    ],
];
tests.forEach((test, i) => {
    const [input, expected] = test;
    console.log(`test     #${i}`);
    console.log(`output   "${longestCommonPrefix(input)}"`);
    console.log(`expected "${expected}"`);
    console.log();
});