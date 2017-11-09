/*

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

The brackets must close in the correct order, "()" and "()[]{}" are all valid but "(]" and "([)]" are not.

*/


/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    const stack = new Stack();

    let i, char;
    for (i = 0; i < s.length; i++) {
        char = s[i];
        switch (char) {
            case '(':
            case '{':
            case '[':
                stack.push(char);
                break;
            case ')':
                char = stack.pop();
                if (char !== '(') {
                    return false;
                }
                break;
            case '}':
                char = stack.pop();
                if (char !== '{') {
                    return false;
                }
                break;
            case ']':
                char = stack.pop();
                if (char !== '[') {
                    return false;
                }
                break;
            default:
                return false;
        }
    }

    return stack.length === 0;
}

class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        const n = this.items.length;
        if (n === 0) {
            return null;
        }
        return this.items.splice(n - 1, 1)[0];
    }

    get length() {
        return this.items.length;
    }
}

const tests = [{
    input: '()[]{}',
    expected: true,
}, {
    input: '([)]',
    expected: false,
}, {
    input: '',
    expected: true,
}, {
    input: '(',
    expected: false,
}, {
    input: '(([]){})',
    expected: true,
}, {
    input: '(([]){})[',
    expected: false,
}];

tests.forEach(test => {
    const {
        input,
        expected
    } = test;
    const output = isValid(input);
    console.log(`input    "${input}"`);
    console.log(`output   ${output}`);
    console.log(`expected ${expected}`);
    console.log();
});