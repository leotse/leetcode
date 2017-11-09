/*
Given a digit string, return all possible letter combinations that the number could represent.

A mapping of digit to letters (just like on the telephone buttons) is given below.

Input:Digit string "23"
Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
Note:
Although the above answer is in lexicographical order, your answer could be in any order you want.

*/

/**
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (digits.length === 0) {
        return [];
    }
    const letters = digits
        .split('')
        .map(digit => lettersOf(digit));
    return permute(letters);
}

// letters map
const letters = new Map();
letters.set('2', ['a', 'b', 'c']);
letters.set('3', ['d', 'e', 'f']);
letters.set('4', ['g', 'h', 'i']);
letters.set('5', ['j', 'k', 'l']);
letters.set('6', ['m', 'n', 'o']);
letters.set('7', ['p', 'q', 'r', 's']);
letters.set('8', ['t', 'u', 'v']);
letters.set('9', ['w', 'x', 'y', 'z']);

function permute(letters) {
    return p('', letters);
}

function p(prefix, letters) {
    if (letters.length === 1) {
        return letters[0].map(letter => `${prefix}${letter}`);
    } else {
        let solutions = [];
        for (let i = 0; i < letters[0].length; i++) {
            solutions = solutions.concat(p(`${prefix}${letters[0][i]}`, letters.slice(1)));
        }
        return solutions;
    }
}

// helper - get letters of a digit
// digit must be a string
function lettersOf(digit) {
    if (letters.has(digit)) {
        return letters.get(digit);
    }
    return [];
}

const tests = [{
    args: ['23'],
    expected: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'],
}, {
    args: ['78'],
    expected: [],
}, {
    args: [''],
    expected: [],
}, {
    args: ['2'],
    expected: ['a', 'b', 'c'],
}];

tests.forEach((test, i) => {
    const {
        args,
        expected
    } = test;
    const output = letterCombinations(...args);
    console.log(`test #${i}`);
    console.log(expected);
    console.log(output);
    console.log();
});