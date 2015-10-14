const bsearch = (array, v) => {
  let l = 0;
  let r = array.length;
  while (l < r) {
    const m = Math.floor((l + r) / 2);
    if (array[m] === v) { return m; }
    else if (array[m] < v) { l = m + 1; }
    else { r = m; }
  }
  return -1;
};

const bsearchRecur = (array, v) => {
  const bs = (array, v, l, r) => {
    if (l >= r) { return -1; }
    const m = Math.floor((l + r) / 2);
    if (array[m] === v) { return m; }
    else if (array[m] > v) { return bs(array, v, l, m); }
    else { return bs(array, v, m + 1, r); }
  };

  return bs(array, v, 0, array.length);
};

const test = (func) => {
  console.log(bsearch([1, 4, 7, 9, 12], 1)); // 0
  console.log(bsearch([1, 4, 7, 9, 12], 4)); // 1
  console.log(bsearch([1, 4, 7, 9, 12], 12)); // 4
  console.log(bsearch([1, 4, 7, 9, 12], 10)); // -1
  console.log(bsearch([], 1)); // -1
};

test(bsearch);
test(bsearchRecur);
