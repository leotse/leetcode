/*
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

I 1
V 5
X 10
L 50
C 100
D 500
M 1000

*/

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {

    // base case
    if (s === '') {
        return 0;
    }

    const p1 = s.substring(0, 1);
    const p2 = s.substring(0, 2);
    if (p1 === 'M') {
        return 1000 + romanToInt(s.substring(1));
    } else if (p2 === 'CM') {
        return 900 + romanToInt(s.substring(2));
    } else if (p1 === 'D') {
        return 500 + romanToInt(s.substring(1));
    } else if (p2 === 'CD') {
        return 400 + romanToInt(s.substring(2));
    } else if (p1 === 'C') {
        return 100 + romanToInt(s.substring(1));
    } else if (p2 === 'XC') {
        return 90 + romanToInt(s.substring(2));
    } else if (p1 === 'L') {
        return 50 + romanToInt(s.substring(1));
    } else if (p2 === 'XL') {
        return 40 + romanToInt(s.substring(2));
    } else if (p1 === 'X') {
        return 10 + romanToInt(s.substring(1));
    } else if (p2 === 'IX') {
        return 9 + romanToInt(s.substring(2));
    } else if (p1 === 'V') {
        return 5 + romanToInt(s.substring(1));
    } else if (p2 === 'IV') {
        return 4 + romanToInt(s.substring(2));
    } else if (p1 === 'I') {
        return 1 + romanToInt(s.substring(1));
    }
}

[
    [0, ''],
    [1, 'I'],
    [2, 'II'],
    [3, 'III'],
    [4, 'IV'],
    [5, 'V'],
    [6, 'VI'],
    [7, 'VII'],
    [8, 'VIII'],
    [34, 'XXXIV'],
    [40, 'XL'],
    [44, 'XLIV'],
    [49, 'XLIX'],
    [51, 'LI'],
    [73, 'LXXIII'],
    [88, 'LXXXVIII'],
    [99, 'XCIX'],
    [100, 'C'],
    [1874, 'MDCCCLXXIV'],
    [1990, 'MCMXC'],
    [3999, 'MMMCMXCIX'],
]
.forEach((test, i) => {
    const [expected, input] = test;
    console.log(`test #${i}`);
    console.log(`input    ${input}`);
    console.log(`output   ${romanToInt(input)}`);
    console.log(`expected ${expected}`);
    console.log();
});