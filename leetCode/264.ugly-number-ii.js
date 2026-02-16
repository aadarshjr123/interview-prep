var nthUglyNumber = function(n) {
    let dp = new Array(n)

    dp[0] = 1
    let p2 = 0;
    
    let p3 = 0;
    let p5 = 0;

    for (let i=1;i<n;i++) {
        let next2 = dp[p2] *2;
        let next3 = dp[p3] *3;
        let next5 = dp[p5] *5;

        let nextUglyNumber = Math.min(next2,next3,next5);

        dp[i] = nextUglyNumber

        if(nextUglyNumber === next2) {
            p2++;
        } 
        
        if(nextUglyNumber === next3) {
            p3++;
        } 
        
        if(nextUglyNumber === next5) {
            p5++;
        } 
    }

    return dp[n-1];
};