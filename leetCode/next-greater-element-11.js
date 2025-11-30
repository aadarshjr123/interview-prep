function nextGreaterElements(nums) {
    const result = new Array(nums.length).fill(-1)
    const stack = []

    for (let i =0;i < 2*nums.length;i++) {
        const idx = i % nums.length

        while(stack.length !==0 && nums[idx] > nums[stack[stack.length -1]]) {
            let prevStack = stack.pop()
            result[prevStack] = nums[idx]
        }
        if(i < nums.length) {
            stack.push(idx)
        }
    }

    return result
}

// PATTERN:
// monotonic decreasing stack + circular array (next greater element II)

// HOW IT WORKS:
// - stack keeps indices of elements waiting for a greater value
// - loop 2*n times to simulate circular behavior
// - when current value is greater than stack top → update its next greater

// EXAMPLE:
// nums = [1,2,1]
// result = [2,-1,2]
