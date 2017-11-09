/*
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

n = 1
()

n = 2
()()
(())

n = 3
()()()
()(())
(())()
((()))

n = 4
()()()()
(((())))
1,3
()()()()
()((()))
()()(())
()(())()
()((()))
2,2
()()()()
()()(())
(())()()
()()()()
3,1
()()()()
()(())()
(())()()
((()))()

n=5
()()()()()
((((()))))
1,4
()()()()()
()(((())))
()()()()()
()()((()))
()()()(())
()()(())()
()()((()))
()()()()()
()()()(())
()(())()()
()()()()()
()()()()()
()()(())()
()(())()()
()((()))()
2,3
()()()()()
()()()(())
()()(())()
()()((()))

(())()()()
(())()(())
(())(())()
(())((()))

*/

/**
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    if (n === 0) {
        return [];
    }
    if (n === 1) {
        return ['()'];
    }
    if (n > 1) {

        const solutions = new Map();

        // generate basic solutions based on the results for s(n-1)
        generateParenthesis(n - 1).forEach(s => {
            solutions.set(`${s}()`, true);
            solutions.set(`()${s}`, true);
            solutions.set(`(${s})`, true);
        });

        // higher order solutions for example
        // when n = 6, s(2)s(4) s(3)s(3) s(4)s(2)
        let i;
        for (i = 2; i < n - 1; i++) {
            permute(generateParenthesis(i), generateParenthesis(n - i))
                .forEach(s => append(s, solutions));
        }

        return Array.from(solutions.keys());
    }
}

function append(s, solutions) {
    return solutions.set(s, true);
}

function permute(s1, s2) {
    const permutations = [];
    let i, j;
    for (i = 0; i < s1.length; i++) {
        for (j = 0; j < s2.length; j++) {
            permutations.push(`${s1[i]}${s2[j]}`);
        }
    }
    return permutations;
}

const tests = [0, 1, 2, 3, 4];
tests.forEach(input => {
    const output = generateParenthesis(input);
    console.log(`n = ${input}`);
    console.log(output.join('\n'));
    console.log();
});