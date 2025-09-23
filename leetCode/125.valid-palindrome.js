var isPalindrome = function (s) {
  let processed = s.toLowerCase().replace(/[^a-z0-9]/g, "");
  let left = 0,
    rigth = processed.length - 1;
  while (left <= rigth) {
    if (processed[left] !== processed[rigth]) {
      return false;
    }
    left++;
    rigth--;
  }
  return true;
};
