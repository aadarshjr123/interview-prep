var longestCommonSubsequence = function(text1, text2) {
    const n = text1.length;
    const m = text2.length;

    const dp = Array.from({length: n },() => Array(m).fill(-1));

    function solve(i,j) {
        if(i === text1.length || j=== text2.length) {
            return 0;
        }

        if(dp[i][j] !== -1 ) {
            return dp[i][j]
        }

        if(text1[i] === text2[j]) {
            return dp[i][j] = 1 + solve(i+1, j+1)
        } else {
            let option1 = solve(i+1,j)
            let option2 = solve(i,j+1)
            
            dp[i][j] = Math.max(option1,option2)
        }

        return dp[i][j]
    }

    return solve(0,0)
};