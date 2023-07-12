// My personal implementation

function countUnique(arr: Array<number>) {
  let count = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] !== arr[i + 1]) {
      count++;
    }
  }
  return count;
}

console.log(countUnique([-1, 0, -2, 1, 1, 1, 2, 4, 4, 5, 6, 6, 6, 7, 7]));
console.log(countUnique([-1, 0, 1, 1, 1, 2, 3]));
console.log(countUnique([1, 1, 1, 1, 1, 2]));
console.log(countUnique([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUnique([-2, -1, -1, 0, 1]));
console.log(countUnique([]));

// ===========================
// My implementation using "Multiple Pointers"

function countUnique2(arr: Array<number>) {
  let i = 0;
  let j = 1;
  while (j <= arr.length) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j] ? arr[j] : arr[j - 1];
    }
    j++;
  }
  console.log(arr);
  return i;
}
console.log(countUnique2([-1, 0, -2, 1, 1, 1, 2, 4, 4, 5, 6, 6, 6, 7, 7]));
console.log(countUnique2([-1, 0, 1, 1, 1, 2, 3]));
console.log(countUnique2([1, 1, 1, 1, 1, 2]));
console.log(countUnique2([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUnique2([-2, -1, -1, 0, 1]));
console.log(countUnique2([]));
