/*

The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:

string convert(string text, int nRows);
convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

p a y
  p
a l i
  s
h i r
  i
n g

n = 14
r = 3
(0 4 8 12 | 1 3 5 7 9 11 13 | 2 6 10)

p a y p
    a
  l
i s h i
    r
  i
n g

n = 14
r = 4
(0 6 12 | 1 5 7 11 13 | 2 4 8 10 | 3 9)

p a y p a
      l
    i
  s
h i r i n
      g

n = 14
r = 5
(0 8 | 1 7 9 | 2 6 10 | 3 5 11 13 | 4 12)

*/



/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {

    // edge case: 1 row
    if (numRows === 1) {
        return s;
    }

    // init solution
    const solution = Array(numRows).fill(0).map(a => []);

    // build solution
    // basically an iterator that oscillates each row
    let row = 0;
    let direction = 1;
    for (let i = 0; i < s.length; i++) {
        solution[row].push(s[i]);

        // update direction when needed
        if(row === 0) {
            direction = 1;
        } else if(row === numRows - 1) {
            direction = -1;
        }

        // and update row
        row += direction;
    }

    return solution.reduce((final, row) => {
        return final + row.join('');        
    }, '');
}

// tests
[{
    args: ['PAYPALISHIRING', 3],
    expected: 'PAHNAPLSIIGYIR',
}, {
    args: ['PAYPALISHIRING', 2],
    expected: 'PYAIHRNAPLSIIG',
}, {
    args: ['PAYPALISHIRING', 1],
    expected: 'PAYPALISHIRING',
}].forEach((test, i) => {
    const output = convert(...test.args);
    console.log(`\ntest #${i}`);
    console.log(`out:      ${output}`);
    console.log(`expected: ${test.expected}`);
});