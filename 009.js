// Determine whether an integer is a palindrome. Do this without extra space

/**
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {

    // negative can never be a palindrome
    if (x < 0) {
        return false;
    }

    // 0 is a palindrone
    if (x === 0) {
        return true;
    }

    const pow = Math.floor(Math.log(x) / Math.log(10));
    let i = 0;
    let j = pow;
    while(i >= 0 && i <= j) {
        if(digitAt(x, i) !== digitAt(x, j)) {
            return false;
        }
        i++;
        j--;
    }
    return true;
}

// helper - get digit at power
function digitAt(x, pow) {
    const me = x % Math.pow(10, pow + 1);
    const digit = Math.floor(me / Math.pow(10, pow));
    return digit;
}

const tests = [
    12345,
    1331,
    1341,
    98789,
    13958,
    1,
    0,
    101,
    -99,
];

tests.forEach((input, i) => {
    console.log(`\ntest #${i}`);
    console.log(`in  ${input}`);
    console.log(`out ${isPalindrome(input)}`);
});