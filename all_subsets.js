var set = [];

var findAllSubsets = function(arr, from) {
  if (from === arr.length) {
    console.log(set);
    return;
  }
  findAllSubsets(arr, from + 1);  // Not taking arr[from]
  set.push(arr[from]);
  findAllSubsets(arr, from + 1);  // Taking arr[from]
  set.splice(set.length - 1);
};

var findAllSubsets2 = function(arr, from) {
  console.log(set);
  for (var i = from; i < arr.length; i++) {
    set.push(arr[i]);
    findAllSubsets2(arr, i + 1);
    set.splice(set.length - 1);
  }
};

findAllSubsets2([0, 1, 2], 0);
