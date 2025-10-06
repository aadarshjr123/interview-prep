var maxSubArray = function (nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(nums[i], currentSum + nums[i]);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
};

// time: O(n)
// space: O(1)
// Kadane's algorithm
// iterate through the array, for each element, decide whether to add it to the existing subarray or start a new subarray
// update maxSum if currentSum is greater

// examples
// [-2,1,-3,4,-1,2,1,-5,4] => 6 (subarray [4,-1,2,1])
// [1] => 1
// [5,4,-1,7,8] => 23 (subarray [5,4,-1,7,8])

// what pattern problem ?
// dynamic programming, array one pass
