function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }

    map.set(nums[i], i);
  }

  return false;
}

//Time complexity - O(n)
//Space complexity - O(n)
// use a map to store the numbers we have seen so far and their indices
// for each number, calculate its complement (target - current number)
// check if the complement exists in the map
// if it does, return the indices of the complement and the current number
// if it doesn't, add the current number and its index to the map
// if no pair is found by the end of the loop, return false

// examples
// [2,7,11,15], target=9 => [0,1]
// [3,2,4], target=6 => [1,2]
// [3,3], target=6 => [0,1]

// what pattern problem ?
// hash map, array one pass
