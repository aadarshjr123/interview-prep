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
