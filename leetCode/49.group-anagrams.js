var groupAnagrams = function (strs) {
  let map = new Map();
  for (const str of strs) {
    let key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);

    map.get(key).push(str);
  }
  return Array.from(map.values());
};
