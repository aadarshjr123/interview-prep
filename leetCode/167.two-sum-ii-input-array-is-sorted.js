var twoSum = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    const sum = numbers[l] + numbers[r];
    if (sum === target) return [l + 1, r + 1];
    else if (sum < target) l++;
    else r--;
  }
  return [-1, -1];
};

// time: O(n)
// space: O(1)
// two pointers
// initialize two pointers, one at the start and one at the end of the array
// calculate the sum of the elements at the two pointers
// if the sum equals the target, return the indices (1-based)
// if the sum is less than the target, move the left pointer to the right to increase the sum
// if the sum is greater than the target, move the right pointer to the left to decrease the sum
// if the pointers meet, return [-1, -1] (not found)

// example
// [2,7,11,15], target=9 => [1,2]
// [2,3,4], target=6 => [1,3]
// [-1,0], target=-1 => [1,2]

// what pattern problem ?
// two pointers
