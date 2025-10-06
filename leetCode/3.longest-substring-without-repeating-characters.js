var lengthOfLongestSubstring = function (s) {
  let left = 0;
  let maxLen = 0;
  let lastSeen = new Map();
  for (let right = 0; right < s.length; right++) {
    const ch = s[right];
    if (lastSeen.has(ch) && lastSeen.get(ch) >= left) {
      left = lastSeen.get(ch) + 1;
    }
    lastSeen.set(ch, right);
    const windowLen = right - left + 1;
    if (windowLen > maxLen) maxLen = windowLen;
  }

  return maxLen;
};

// time: O(n) single pass
// space: O(min(m,n)) m is the size of the charset, n is the size of the string
// sliding window with two pointers
// use a map to store the last seen index of each character
// move the right pointer to expand the window
// if the character at the right pointer has been seen and is within the current window, move the left pointer to the right of the last seen index of that character
// update the last seen index of the character at the right pointer
// calculate the current window length and update maxLen if it's larger

// examples
// "abcabcbb" => 3 ("abc")
// "bbbbb" => 1 ("b")
// "pwwkew" => 3 ("wke")

// what pattern problem ?
// sliding window, two pointers, hash map
