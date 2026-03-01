function getDigitPattern(n) {
    let count = new Array(10).fill(0)

    let numToStr = String(n)

    for(digit of numToStr) {
        count[digit]++
    }
    return count
}

var reorderedPowerOf2 = function(n) {
    let targetPattern = getDigitPattern(n);

    for(let i=0;i<=30;i++) {
        let power = 2**i;

        let powerPattern = getDigitPattern(power)
        if(targetPattern.join("") === powerPattern.join("")) {
            return true
        }
    }
    return false
};