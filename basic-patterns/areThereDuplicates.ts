function areThereDuplicates(...args) {
  let i = 0,
    j = 1;
  while (j < args.length) {
    if (args[i] !== args[j]) {
      i++;
      args[i] = args[j] ? args[j] : args[j - 1];
    } else if (args[i] == args[j]) return true;
    j++;
  }
  return false;
}

console.log(areThereDuplicates(1, 2, 3));
console.log(areThereDuplicates(1, 2, 2));
console.log(areThereDuplicates("a", "b", "c", "a"));
console.log(areThereDuplicates(1, 2, "2"));

function areThereDuplicates2(...args) {
  let obj = {};
  for (let i = 0; i < args.length; i++) {
    if (obj[args[i]]) {
      return true;
    } else {
      obj[args[i]] = 1;
    }
  }
  return false;
}

console.log(areThereDuplicates2(1, 2, 3));
console.log(areThereDuplicates2(1, 2, 2));
console.log(areThereDuplicates2("a", "b", "c", "a"));
console.log(areThereDuplicates2(1, 2, "2"));
