const max_sub_array_of_size_k = function (k, arr) {
    // TODO: Write your code here
    let leftPointer = 0;
    let rightPointer = 0;
    let maxSum = 0;
    let currentSum = 0;
    while (rightPointer < arr.length) {
        currentSum = currentSum + arr[rightPointer];
        maxSum = Math.max(maxSum, currentSum);
        if (rightPointer >= k - 1) {
            currentSum = currentSum - arr[leftPointer]
            leftPointer = leftPointer + 1;
        }
        rightPointer = rightPointer + 1;
    }

    return maxSum;
};

console.log(max_sub_array_of_size_k(3, [2, 1, 5, 1, 3, 2])) // 9