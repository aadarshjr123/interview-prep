var mergeIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  let merged = [];
  for (let i = 0; i < intervals.length; i++) {
    if (merged.length === 0 || merged[merged.length - 1][1] < intervals[i][0]) {
      merged.push(intervals[i]);
    } else {
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      );
    }
  }

  return merged;
};

console.log(
  mergeIntervals([
    [1, 3],
    [8, 10],
    [2, 6],
    [15, 18],
  ])
);

// time: O(nlogn) due to sorting
// space: O(n) for the merged array
// sort intervals by start time
// iterate through sorted intervals
// if merged is empty or current interval does not overlap with last merged, add it to merged
// else there is an overlap, so merge the current interval with the last merged interval

//examples
// [[1,3],[2,6],[8,10],[15,18]] => [[1,6],[8,10],[15,18]]
// [[1,4],[4,5]] => [[1,5]]
// [[1,4],[0,4]] => [[0,4]]
// [[1,4],[2,3]] => [[1,4]]

// what pattern problem ?
// sorting and merging intervals
