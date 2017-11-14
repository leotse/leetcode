/*
You are given a string, s, and a list of words, words, that are all of the same length. Find all starting indices of substring(s) in s that is a concatenation of each word in words exactly once and without any intervening characters.

For example, given:
s: "barfoothefoobarman"
words: ["foo", "bar"]

You should return the indices: [0,9].
(order does not matter).
*/

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {

    // edge cases checking
    if (words.length === 0) {
        return [];
    }
    if (s.length === 0) {
        return [];
    }

    const solutionLength = words[0].length * words.length;
    if (solutionLength === 0) {
        return [];
    }
    if (solutionLength > s.length) {
        return [];
    }

    // iterate the solution space..
    const solutions = [];

    let i, candidate;
    for (i = 0; i <= s.length - solutionLength; i++) {
        candidate = s.substring(i, i + solutionLength);
        if (isSolution(candidate, words)) {
            solutions.push(i);
        }
    }

    return solutions;
}

function isSolution(candidate, words) {
    const wordLength = words[0].length;

    let currentIndex = 0;
    let currentPart = '';
    let wordsIndex = 0;
    let availableWords = words.map(w => w);
    while (availableWords.length > 0) {
        currentPart = candidate.substring(currentIndex, currentIndex + wordLength);
        wordsIndex = availableWords.indexOf(currentPart);
        if (wordsIndex < 0) {
            return false;
        }
        availableWords.splice(wordsIndex, 1);
        currentIndex += wordLength;
    }
    return true;
}

const tests = [{
    args: [
        'barfoothefoobarman',
        ['foo', 'bar']
    ],
    expected: [0, 9]
}, {
    args: [
        "a",
        ["a", "a"]
    ],
    expected: []
}, {
    args: [
        "barfoofoobarthefoobarman",
        ["bar", "foo", "the"]
    ],
    expected: [6, 9, 12]
}, {
    args: [
        "wordgoodgoodgoodbestword",
        ["word", "good", "best", "good"]
    ],
    expected: [8]
}];

tests.forEach(test => {
    const { args, expected } = test;
    const res = findSubstring(...args);
    console.log(`args:     ${args.join(' ')}`);
    console.log(`res:      ${res}`);
    console.log(`expected: ${expected}`);
    console.log();
});