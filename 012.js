/*

Given an integer, convert it to a roman numeral.

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
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    return r(num);
}

function r(num) {
    if (num >= 1000) {
        return 'M' + r(num - 1000);
    } else if (num >= 900) {
        return 'CM' + r(num - 900);
    } else if (num >= 500) {
        return 'D' + r(num - 500);
    } else if (num >= 400) {
        return 'CD' + r(num - 400);
    } else if (num >= 100) {
        return 'C' + r(num - 100);
    } else if (num >= 90) {
        return 'XC' + r(num - 90);
    } else if (num >= 50) {
        return 'L' + r(num - 50);
    } else if (num >= 40) {
        return 'XL' + r(num - 40);
    } else if (num >= 10) {
        return 'X' + r(num - 10);
    } else if (num >= 9) {
        return 'IX' + r(num - 9);
    } else if (num >= 5) {
        return 'V' + r(num - 5);
    } else if (num >= 4) {
        return 'IV' + r(num - 4);
    } else if (num >= 1) {
        return 'I' + r(num - 1);
    }

    // base case: num === 0
    return '';
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
    const [input, expected] = test;
    console.log(`test #${i}`);
    console.log(`input    ${input}`);
    console.log(`output   ${intToRoman(input)}`);
    console.log(`expected ${expected}`);
    console.log();
});