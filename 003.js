// Given a string, find the length of the longest substring without repeating characters.

// Examples:

// Given "abcabcbb", the answer is "abc", which the length is 3.

// Given "bbbbb", the answer is "b", with the length of 1.

// Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.

// tests
// "bbbbb"
// "dvde"
// "qrsvbspk"
// "bbtablud"
// "pmukfzdskwdyne"
// "wllxdiklosdrdxfohgwringzefwbytmwgxtjhdxwycpbawphcnbmajmeokhoftlmsexakuyixplxmagoojdospvjbcxh"

function lengthOfLongestSubstring(s) {
  const n = s.length;

  // map to keep track of characters
  const map = new Map();

  // keep track of longest length
  let solution = 0;

  // init sliding window
  let i = 0;
  let j = 0;

  while (j < n) {
    const char = s[j];

    console.log(`solution: ${solution} char ${char} window ${s.substring(i, j)}`);
    console.log(map);

    if (!map.has(char)) {

      // no dups! grow window
      map.set(char, j);
      j++;

    } else {

      // slide char out of window
      if (s[i] !== char) {
        map.delete(s[i]);
      }

      // and finally slide window!
      i++;
      j++;
    }

    solution = Math.max(solution, map.size);
  }

  return solution;
}

const input = process.argv[2];
console.log(lengthOfLongestSubstring(input));