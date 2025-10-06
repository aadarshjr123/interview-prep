var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let storeTriplet = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let left = i + 1,
      right = nums.length - 1;
    while (left < right) {
      if (nums[i] + nums[left] + nums[right] === 0) {
        storeTriplet.push([nums[i], nums[left], nums[right]]);

        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (nums[i] + nums[left] + nums[right] < 0) {
        left++;
      } else {
        right--;
      }
    }
  }

  return storeTriplet;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));

// time: O(n^2) due to sorting and two pointers
// space: O(n) for the output array
// sort the array
// iterate through the array, for each element, use two pointers to find pairs that sum to the negative of the current element
// skip duplicates to avoid repeating triplets

// examples
// [-1,0,1,2,-1,-4] => [[-1,-1,2],[-1,0,1]]
// [0,1,1] => []
// [0,0,0] => [[0,0,0]]

// what pattern problem ?
// two pointers, sorting
