function dailyTemperature(temps) {
    let stack = []
    let result = Array(temps.length).fill(0)

    for(let i = 0;i<temps.length;i++) {
        
        while (stack.length !== 0 && temps[i] > temps[stack[stack.length - 1]]) {
            let prevIndex = stack.pop()
            result[prevIndex] = i - prevIndex  
        }
        stack.push(i)
    }
    return result
}

// PATTERN:
// monotonic decreasing stack

// HOW IT WORKS:
// - stack keeps indices of colder days
// - when a warmer day appears, pop and update result

// EXAMPLE:
// temps = [73,74,75,71,69,72,76,73]
// result = [1,1,4,2,1,1,0,0]