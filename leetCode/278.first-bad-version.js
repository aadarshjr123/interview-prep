/*
 * @lc app=leetcode id=278 lang=javascript
 *
 * [278] First Bad Version
 */

// @lc code=start
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let left = 0,
      right = n;
    while (left < right) {
      let mid = left + Math.floor((right - left) / 2);
      if (isBadVersion(mid)) {
        right = mid;
      } else {
        left = mid + 1;
      }
    }

    return left;
  };
};

// @lc code=end

// time: O(logn)
// space: O(1)

// binary search
// left starts from 0, right starts from n
// while left < right
// find mid
// if mid is bad version, right = mid
// else left = mid + 1
// return left

// examples
// n = 5, bad = 4
// versions: 1,2,3,4,5
// isBadVersion(3) = false
// isBadVersion(4) = true
// isBadVersion(5) = true
// first bad version is 4

// what pattern problem ?
// binary search
