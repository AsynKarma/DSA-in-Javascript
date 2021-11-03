class Heap {
    /**
     * 
     * @param {*} A Every array is considered a Heap
     */
    constructor(A) {
        this.heap = A,
            this.heapSize = A.length
    }

    /**
     * Call this function only if you are sure the left subtree and right subtree of the index you sent are max Heaps
     * @param {number} nodeIndex 
     */
    maxHeapify(nodeIndex) {
        let leftNodeIndex = 2 * nodeIndex + 1
        let rightNodeIndex = leftNodeIndex + 1
        if (!this.heap[rightNodeIndex] && !this.heap[leftNodeIndex]) return
        let maxValueNode
        if (this.heap[rightNodeIndex]) {
            maxValueNode = this.heap[leftNodeIndex] > this.heap[rightNodeIndex] ? leftNodeIndex : rightNodeIndex
        } else {
            maxValueNode = leftNodeIndex
        }
        if (this.heap[nodeIndex] < this.heap[maxValueNode]) {
            // Swap elements at nodeIndex and leftNode Index
            let tempValue = this.heap[nodeIndex]
            this.heap[nodeIndex] = this.heap[maxValueNode]
            this.heap[maxValueNode] = tempValue

            // Call heapify with leftNodeIndex
            this.maxHeapify(maxValueNode)
        } else {
            return
        }
    }

    buildMaxHeap() {
        for (var i = Math.floor(this.heapSize / 2 - 1); i >= 0; i--) {
            this.maxHeapify(i)
        }
    }

    insertElementInMaxHeap(newElement) {
        this.heap.push(newElement)
        this.heapSize++
        this.buildMaxHeap()
    }

    deleteElementInMaxHeap() {
        let max = this.heap[0]
        this.heap[0] = this.heap[this.heapSize - 1]
        this.heap.pop()
        this.heapSize--
        this.maxHeapify(0)
        return max
    }

    sort() {
        let sortedArr = []
        var i = this.heap.length - 1
        while (i >= 0) {
            sortedArr.push(this.deleteElementInMaxHeap())
            i--
        }
        return sortedArr
    }

    minHeapify(nodeIndex) {
        let leftNodeIndex = 2 * nodeIndex + 1
        let rightNodeIndex = leftNodeIndex + 1
        if (!this.heap[rightNodeIndex] && !this.heap[leftNodeIndex]) return
        let minValueNode
        if (this.heap[rightNodeIndex]) {
            minValueNode = this.heap[leftNodeIndex] < this.heap[rightNodeIndex] ? leftNodeIndex : rightNodeIndex
        } else {
            minValueNode = leftNodeIndex
        }
        if (this.heap[nodeIndex] > this.heap[minValueNode]) {
            // Swap elements at nodeIndex and leftNode Index
            let tempValue = this.heap[nodeIndex]
            this.heap[nodeIndex] = this.heap[minValueNode]
            this.heap[minValueNode] = tempValue

            // Call heapify with leftNodeIndex
            this.minHeapify(minValueNode)
        } else {
            return
        }
    }

    buildMinHeap() {
        for (var i = Math.floor(this.heapSize / 2 - 1); i >= 0; i--) {
            this.minHeapify(i)
        }
    }

    insertElementInMinHeap(newElement) {
        this.heap.push(newElement)
        this.heapSize++
        this.buildMinHeap()
    }

    deleteElementInMinHeap() {
        let max = this.heap[0]
        this.heap[0] = this.heap[this.heapSize - 1]
        this.heap.pop()
        this.heapSize--
        this.minHeapify(0)
        return max
    }
}

module.exports = Heap

const heap = new Heap([1, 2, 3, 4, 5])
heap.buildMaxHeap();
heap.insertElementInMaxHeap(6)
heap.insertElementInMaxHeap(2)
console.log(heap.heap)
console.log(heap.sort())