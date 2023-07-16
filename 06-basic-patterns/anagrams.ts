/*
  Frequency counter

  Creating an object in order to compare its values and keys, instead of using nested loops
*/
function isAnagram(word1: string, word2: string) {
  if (word1.length !== word2.length) {
    return false;
  }
  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  const frequency1 = {};
  const frequency2 = {};
  for (let char of word1) {
    frequency1[char] ? frequency1[char]++ : (frequency1[char] = 1);
  }
  for (let char of word2) {
    frequency2[char] ? frequency2[char]++ : (frequency2[char] = 1);
  }
  for (let key in frequency1) {
    if (!(key in frequency2) || frequency1[key] !== frequency2[key]) {
      return false;
    }
  }
  return true;
}

console.log(isAnagram("jonny", "nonjy"));
