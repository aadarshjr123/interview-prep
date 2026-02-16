var divide = function(dividend, divisor) {
    
    if (dividend === -2147483648 && divisor === -1) {
        return 2147483647;
    }

    const negative = (dividend < 0) !== (divisor < 0);

    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);

    let low = 0;
    let high = dividend;
    let answer = 0;
    while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        if (isValid(dividend, divisor, mid)) {
            answer = mid;
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return negative ? -answer : answer;
};

function isValid(dividend, divisor, mid) {

    let sum = 0;
    let remaining = mid;

    while (remaining > 0) {

        let current = divisor;
        let multiple = 1;
        while (
            sum + current * 2 <= dividend &&
            multiple * 2 <= remaining
        ) {
            current *= 2;
            multiple *= 2;
        }

        sum += current;
        remaining -= multiple;

        if (sum > dividend) {
            return false;
        }
    }

    return true;
}