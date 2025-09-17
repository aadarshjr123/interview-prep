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
