// Implement regular expression matching with support for '.' and '*'.

// '.' Matches any single character.
// '*' Matches zero or more of the preceding element.

// The matching should cover the entire input string (not partial).

// The function prototype should be:
// bool isMatch(const char *s, const char *p)

// Some examples:
// isMatch("aa","a") → false
// isMatch("aa","aa") → true
// isMatch("aaa","aa") → false
// isMatch("aa", "a*") → true
// isMatch("aa", ".*") → true
// isMatch("ab", ".*") → true
// isMatch("aab", "c*a*b") → true

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    return match(s, p);
}

// recursively match string with pattern
function match(s, p) {

    // console.log(s, p);

    if (p[0] === '*') {
        throw new Error('invalid pattern');
    }

    // base cases

    if (s === '' && p === '') {
        return true;
    }

    if (s === '' && p === '.*') {
        return true;
    }

    if (s.length > 0 && p.length === 0) {
        return false;
    }

    // recursive matching
    const char = s[0];

    // handle *
    if (p[1] === '*') {
        if (s === '') {
            return match(s, p.substring(2));
        }
        if (p[0] === '.') {
            return match(s.substring(1), p) || match(s, p.substring(2));
        }
        if (char === p[0]) {
            return match(s.substring(1), p) || match(s, p.substring(2));
        }
        if (char !== p[0]) {
            return match(s, p.substring(2));
        }
    }

    // handle .
    if (p[0] === '.') {
        if (s.length === 0) {
            return false;
        }
        return match(s.substring(1), p.substring(1));
    }

    // handle simple string match
    return (char === p[0]) && match(s.substring(1), p.substring(1));
}

const tests = [
    ['', '', true],
    ['', '.', false],
    ['', 'a*', true],
    ['aa', 'a', false],
    ['aa', 'aa', true],
    ['aaa', 'aa', false],
    ['aa', 'a*', true],
    ['aa', '.*', true],
    ['ab', '.*', true],
    ['aab', 'c*a*b', true],
    ['caa', 'c*a*b', false],
    ['abc', '....', false],
    ['ab', '.*c', false],
    ['aaa', 'a*a', true],
    ['', '.*', true],
];

tests.forEach((inputs, i) => {
    console.log(`\ntest #${i}`);
    console.log(`in  "${inputs[0]}" "${inputs[1]}"`);
    console.log(`out ${isMatch(inputs[0], inputs[1])}`);
    console.log(`exp ${inputs[2]}`);
});