function topKFrequent(nums, k) {
    let freq = new Map()
    let maxHeap = new MaxPriorityQueue();
    for(let n of nums) {
        freq.set(n,(freq.get(n) || 0) + 1)
    } 

    for( let [val,count] of freq) {
        maxHeap.enqueue(val,count)
    }


    let result = []
    for(let i =0;i < k;i++) {
        let node = maxHeap.dequeue()
        result.push(node.element)
    }

    return result
}