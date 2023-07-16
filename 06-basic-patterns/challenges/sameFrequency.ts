/*
Frequency Counter - sameFrequency
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

Sample Input:

sameFrequency(182,281) // true
sameFrequency(34,14) // false
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222) // false

*/

function sameFrequency(n1: number, n2: number) {
  let s1 = String(n1);
  let s2 = String(n2);
  if (s1.length != s2.length) return false;
  let frequency1 = {};
  let frequency2 = {};
  for (let i = 0; i < s1.length; i++) {
    frequency1[s1[i]] ? frequency1[s1[i]]++ : (frequency1[s1[i]] = 1);
    frequency2[s2[i]] ? frequency2[s2[i]]++ : (frequency2[s2[i]] = 1);
  }

  for (let key in frequency1) {
    if (!(key in frequency2) || frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

console.log(sameFrequency(3333, 5557)); // false
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
