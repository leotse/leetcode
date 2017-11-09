/*
Implement atoi to convert a string to an integer.

Hint: Carefully consider all possible input cases. If you want a challenge, please do not see below and ask yourself what are the possible input cases.

Notes: It is intended for this problem to be specified vaguely (ie, no given input specs). You are responsible to gather all the input requirements up front.
*/

/**
 * @param {string} str
 * @return {number}
 */
function myAtoi(str) {

    if (str.length === 0) {
        return 0;
    }

    if (str.length >= 2) {
        if (str.substring(0, 2) === '+-' || str.substring(0, 2) === '-+') {
            return 0;
        }
    }

    if (str[0] === '+') {
        return Number(str.substring(1));
    }

    if (str[0] === '-') {
        return -Number(str.substring(1));
    }

    return Number(str);
}

const tests = [
    '1.33213e3',
    '0xfffee',
    '19.3',
    '+123',
    '-333',
    '+-2',
    '-+2',
];

tests.forEach((input, i) => {
    console.log(`\ntest #${i}`);
    console.log(`in  ${input}`);
    console.log(`out ${myAtoi(input)}`);
});