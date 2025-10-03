function sortedSquares(nums) {
  let i = 0,
    j = nums.length - 1;
  let pos = nums.length - 1;
  let result = [];
  while (i <= j) {
    if (Math.abs(nums[i]) > Math.abs(nums[j])) {
      result[pos] = nums[i] * nums[i];
      i++;
    } else {
      result[pos] = nums[j] * nums[j];
      j--;
    }
    pos--;
  }

  return result;
}

// time: O(n)
// space: O(n)
// two pointers
// compare the absolute values of the elements at the start and end of the array
// place the larger square at the end of the result array
// move the corresponding pointer inward
// repeat until the pointers meet

//example
// [-4,-1,0,3,10] => [0,1,9,16,100]
// [-7,-3,2,3,11] => [4,9,9,49,121]
