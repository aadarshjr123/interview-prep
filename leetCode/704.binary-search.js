var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (target === nums[mid]) {
      return mid;
    } else if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));

// time: O(logn)
// space: O(1)
// left starts from 0, right starts from nums.length - 1
// while left <= right
// find mid
// if mid is target, return mid
// if target < mid, right = mid - 1
// else left = mid + 1
// return -1 if not found

// examples
// [-1,0,3,5,9,12], 9 => 4
// [-1,0,3,5,9,12], 2 => -1
// [5], 5 => 0
// [5], 2 => -1

// what pattern problem ?
// binary search
