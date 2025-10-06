var groupAnagrams = function (strs) {
  let map = new Map();
  for (const str of strs) {
    let key = str.split("").sort().join("");
    if (!map.has(key)) map.set(key, []);

    map.get(key).push(str);
  }
  return Array.from(map.values());
};

// time: O(n * klogk) n is number of strings, k is max length of a string
// space: O(n)
// use a hash map to group anagrams by their sorted string as the key
// iterate through each string, sort it to get the key, and add the original string to the corresponding group in the map
// finally, return the values of the map as an array

// examples
// ["eat","tea","tan","ate","nat","bat"] => [["eat","tea","ate"],["tan","nat"],["bat"]]
// [""] => [[""]]
// ["a"] => [["a"]]
// ["abc","bca","cab","cba","bac","acb"] => [["abc","bca","cab","cba","bac","acb"]]

// what pattern problem ?
// hash map, string manipulation
