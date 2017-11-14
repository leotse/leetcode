/*
Divide two integers without using multiplication, division and mod operator.

If it is overflow, return MAX_INT.
*/

const MAX_INT = Math.pow(2, 31) - 1;
const MIN_INT = -Math.pow(2, 31);

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {

    // sign of the quotient
    let sign;
    if ((dividend > 0 && divisor > 0) || (dividend < 0 && divisor < 0)) {
        sign = 1;
    } else {
        sign = -1;
    }

    // we stored the sign.. so it's now safe to take abs
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    // base case: divided by 0
    if (divisor === 0) {
        return MAX_INT;
    }

    // base case: dividend < divisor
    if (dividend < divisor) {
        return 0;
    }

    // match # of dividend's and divisor binary length
    let n = 0;
    while ((dividend - (divisor * Math.pow(2, n)) >= 0)) {
        n++;
        if (n > 31) {
            // overflow!
            if (sign > 0) {
                return MAX_INT;
            } else {
                return MIN_INT;
            }
        }
    }
    n--;

    const remainder = dividend - (divisor * Math.pow(2, n));
    return sign * (Math.pow(2, n) + divide(remainder, divisor));
}

const tests = [
    [4, 3],
    [10, 3],
    [0, 3],
    [0, 0],
    [3, 3],
    [5, 2],
    [6, 2],
    [1073741824, 1],
    [-16, 4],
    [-2147483648, 1],
    [2147483647, 2], //1073741823
    [-2147483648, 2], //-1073741824
];

tests.forEach(args => {
    const res = divide(...args);
    console.log(args, res);
    console.log();
});