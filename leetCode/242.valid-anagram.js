var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let freq = new Map();

  for (const ch of s.toLowerCase()) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  for (const ch of t.toLowerCase()) {
    const count = (freq.get(ch) || 0) - 1;
    if (count < 0) return false;
    freq.set(ch, count);
  }

  for (const v of freq.values()) if (v !== 0) return false;
  return true;
};

// time: O(n)
// space: O(1) since the size of the map is at most 26 for lowercase letters
// frequency counter
// count the frequency of each character in s
// decrement the frequency for each character in t
// if any frequency goes below 0, return false
// finally, check if all frequencies are 0
// if they are, return true, otherwise return false

// examples
// "anagram", "nagaram" => true
// "rat", "car" => false
