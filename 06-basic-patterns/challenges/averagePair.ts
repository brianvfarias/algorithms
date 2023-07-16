function averagePair(arr: Array<number>, target: number) {
  if (!arr.length) return false;
  let i = 0;
  let j = arr.length - 1;
  while (i < arr.length) {
    let average = (arr[i] + arr[j]) / 2;
    if (average === target) return true;
    if (average > target) {
      j--;
    }
    if (average < target) {
      i++;
    }
  }
  return false;
}

console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
