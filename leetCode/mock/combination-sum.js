/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 */

// @lc code=start
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let result = [];

    function dfs(startIndex,currentCombination,currentSum) {
        if(currentSum === target) {
            result.push([...currentCombination])
            return;
        }

        if(currentSum > target) {
            return;
        }

        for(let i=startIndex;i<candidates.length;i++) {
            const num = candidates[i];
            currentCombination.push(num)
            dfs(i,currentCombination,currentSum+num)
            currentCombination.pop()
        }
    }

    dfs(0,[],0)
    return result
};
// @lc code=end

