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
