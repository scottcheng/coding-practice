const findAllSubsets = (arr, curSet = []) => {
  if (arr.length === 0) { return console.log(curSet); }

  const nextArr = arr.slice(1);
  findAllSubsets(nextArr, curSet);
  curSet.push(arr[0]);
  findAllSubsets(nextArr, curSet);
  curSet.pop();
};

const findAllSubsets2 = (arr, curSet = []) => {
  console.log(curSet);
  for (let i = 0; i < arr.length; i++) {
    // i is the first element in arr we choose to put into set
    curSet.push(arr[i]);
    findAllSubsets2(arr.slice(i + 1), curSet);
    curSet.pop();
  }
};

const test = (func) => {
  func([0, 1, 2]);
};

test(findAllSubsets);
test(findAllSubsets2);
