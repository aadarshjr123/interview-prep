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

// time: O(n)
// space: O(n)
// two pointers
// preprocess the string to remove non-alphanumeric characters and convert to lowercase
// initialize two pointers, one at the start and one at the end of the processed string
// compare characters at both pointers, if they are not equal, return false
// move the left pointer to the right and the right pointer to the left
// if the pointers cross each other, return true

// example

// "ana" => true
// "racecar" => true
// "car" => false

// what pattern problem ?
// two pointers
