// This code uses dynamic programming. It takes O(N) space and O(N) time.

process.stdin.resume();
process.stdin.setEncoding("ascii");

var buffer = '';  // Input buffer

process.stdin.on('data', function (input) {
  buffer += input;
});

process.stdin.on('end', function(arguments) {
  lines = buffer.split('\n');

  // Data preprocessing
  var N;  // Dimension of farmland
  var land = [];  // N-by-N matrix, storing the elevation of farmland
  var i;

  N = parseInt(lines[0]);
  // Fill in land data
  for (i = 0; i < N; i++) {
    land[i] = lines[i + 1].split(' ').map(function(num) {
      return parseInt(num);
    });
  }

  partitionLand(N, land);
})

var partitionLand = function(N, land) {
  var sink = [];  // N-by-N matrix. sink[i][j] stores the sink of the basin that
                  // land[i][j] belongs to, represented as [k, l]
  var i, j;

  // Initialize sink
  for (i = 0; i < N; i++) {
    sink[i] = [];
  }

  // Find the sink of each point in land
  for (i = 0; i < N; i++) {
    for (j = 0; j < N; j++) {
      // Used a little trick to prevent causing too deep calling stacks
      findSink(N, land, sink, (i + 240) % N, (j + 240) % N);
    }
  }

  // Count basin sizes based on sink matrix
  var basins = [];
  sink.forEach(function(row) {
    row.forEach(function(sink) {
      var serializedSink = sink[0] + '-' + sink[1];  // Serialized coordinate
      if (!basins[serializedSink]) {
        basins[serializedSink] = 0;
      }
      basins[serializedSink]++;
    });
  });

  // Put basin sizes into an array
  var basinSizes = [];
  for (var sink in basins) {
    basinSizes.push(basins[sink]);
  }

  // Sort basinSizes by ascending order, then print reversely
  basinSizes.sort(function(a, b) { return a - b; });
  for (i = basinSizes.length - 1; i >= 0; i--) {
    process.stdout.write(basinSizes[i] + ' ');
  }
};

// Find the sink of land[i][j]
var findSink = function(N, land, sink, i, j) {
  if (sink[i][j]) {
    return sink[i][j];
  }

  var k, neighborI, neighborJ;
  var nextStep;  // Where water drains into from cell (i, j)
  var nextStepElevation = land[i][j];

  // Find lowest neighbor
  for (k = 0; k < 9; k++) {
    // Calculate the coordinate of the k-th neighbor (including itself)
    neighborI = i + Math.floor(k / 3) - 1;
    neighborJ = j + k % 3 - 1;
    if (neighborI < 0 || neighborI >= N ||
        neighborJ < 0 || neighborJ >= N ||
        (k === 4)) {
      // Neighbor is out of land, or "neighbor" is (i, j) itself
      continue;
    }

    if (land[neighborI][neighborJ] < nextStepElevation) {
      // Found lower neighbor
      nextStepElevation = land[neighborI][neighborJ];
      nextStep = [neighborI, neighborJ];
    }
  }

  if (nextStep) {
    // There is a neighbor with lower elevation than cell (i, j)
    sink[i][j] = findSink(N, land, sink, nextStep[0], nextStep[1]);
    return sink[i][j];
  }

  // Otherwise, cell (i, j) is a sink
  sink[i][j] = [i, j];
  return sink[i][j];
};
