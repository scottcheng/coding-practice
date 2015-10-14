const longestIncSubseq = (array) => {
  const lenAtIdx = []; // lenAtIdx[i] = j means the longest increasing subsequence that ends at array[i] has length of j
  const prevIdx = []; // prevIdx[i] is index of predecessor of array[i] in a increasing subsequence
  let endIdx = null;
  let maxLen = -1;

  for (let i = 0; i < array.length; i++) {
    // Find lenAtIdx[i] and prevIdx[i]
    lenAtIdx[i] = 1;
    for (let j = 0; j < i; j++) {
      if (lenAtIdx[j] >= lenAtIdx[i] && array[j] < array[i]) {
        lenAtIdx[i] = lenAtIdx[j] + 1;
        prevIdx[i] = j;
      }
    }

    if (lenAtIdx[i] > maxLen) {
      endIdx = i;
      maxLen = lenAtIdx[i];
    }
  }

  const ret = [];
  while (endIdx >= 0) {
    ret.push(array[endIdx]);
    endIdx = prevIdx[endIdx];
  }

  return ret.reverse();
};

const longestIncSubseqBinary = (array) => {
  const minIdxAtLength = []; // minIdxAtLength[i] = j means array[j] is the minimum number and there is a increasing subsequence of length i + 1 that end at j
  const prevIdx = []; // prevIdx[i] is predecessor of array[i] in a increasing subsequence

  for (let i = 0; i < array.length; i++) {
    // Find prevIdx[i] and update minIdxAtLength

    // Binary search in minIdxAtLength for j so that array[minIdxAtLength[j]] < array[i] and array[minIdxAtLength[j + 1]] >= array[i]
    let l = 0;
    let r = minIdxAtLength.length;
    while (l < r) {
      const m = Math.floor((l + r) / 2);
      if (array[i] > array[minIdxAtLength[m]]) { l = m + 1; }
      else { r = m; }
    }
    // l === r
    minIdxAtLength[r] = i;
    if (r > 0) { prevIdx[i] = minIdxAtLength[r - 1]; }
  }

  let endIdx = minIdxAtLength[minIdxAtLength.length - 1];
  const ret = [];
  while (endIdx != null) {
    ret.push(array[endIdx]);
    endIdx = prevIdx[endIdx];
  }

  return ret.reverse();
};

const test = (func) => {
  console.log(func([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]
  console.log(func([3, 1, 2, 6, 4, 5])); // [1, 2, 4, 5]
  console.log(func([1, 4, 4, 4, 5])); // [1, 4, 5]
  console.log(func([3, 2, 6, 4, 5, 1])); // [3, 4, 5] or [2, 4, 5]
  console.log(func([0, 8, 4, 12, 2, 10, 6, 14, 1, 9, 5, 3, 11, 7, 15])); // [0, 4, 6, 9, 13, 15] or [0, 2, 6, 9, 13, 15]
};

test(longestIncSubseq);
test(longestIncSubseqBinary);
