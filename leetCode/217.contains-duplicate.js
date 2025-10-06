var containsDuplicate = function (nums) {
  let set = new Set();

  for (let i = 0; i < nums.length; i++) {
    if (set.has(nums[i])) {
      return true;
    }
    set.add(nums[i]);
  }

  return false;
};

// time: O(n)
// space: O(n)
// hash set
// iterate through the array, if the element is already in the set, return true
// otherwise, add the element to the set
// if we finish the loop without finding duplicates, return false

// examples
// [1,2,3,1] => true
// [1,2,3,4] => false
// [1,1,1,3,3,4,3,2,4,2] => true

// what pattern problem ?
// frequency counter
