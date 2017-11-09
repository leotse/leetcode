/*
Reverse digits of an integer.

Example1: x = 123, return 321
Example2: x = -123, return -321

click to show spoilers.

Note:
The input is assumed to be a 32-bit signed integer. Your function should return 0 when the reversed integer overflows.
*/

/**
 * @param {number} x
 * @return {number}
 */
function reverse(x) {

    // negative?
    const sign = x >= 0 ? 1 : -1;

    // how many digits?
    const length = Math.floor(Math.log(x * sign) / Math.log(10)) + 1;

    // reverse the digits
    const digits = getDigits(x * sign, length);

    // combine back into number
    const solution = digits.reduce((sum, digit, i) => {
        sum += digit * Math.pow(10, i);
        return sum;
    }, 0);

    // restrict to 32-bit based on requirement, even though code works fine for up to 64-bit
    if(solution > Math.pow(2, 31)) {
        return 0;
    }

    return sign * solution;
}

function getDigits(x, length) {
    if (length > 0) {
        const divider = Math.pow(10, length - 1);
        const digit = Math.floor(x / divider);
        return [ digit ].concat(getDigits(x % divider, length - 1));
    }
    return [];
}





const tests = [
    1,
    10,
    99,
    123,
    1234,
    9999,
    10000,
    13953,
    -123,
    1534236469,
    1563847412
];

tests.forEach((num, i) => {
    console.log(`\ntest #${i}`);
    console.log(`in  ${num}`);
    console.log(`out ${reverse(num)}`);
});