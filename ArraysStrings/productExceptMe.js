function productExceptMe(arr) {
    const leftSumArr = [], rightSumArr = [];
    let i = 0, j = arr.length - 1;
    while (i < arr.length && j >= 0) {
        if (i === 0) {
            leftSumArr.push(1);
        } else leftSumArr.push(arr[i - 1] * leftSumArr[i - 1]);
        if (j === arr.length - 1) {
            rightSumArr.push(1);
        } else rightSumArr.unshift(arr[j + 1] * rightSumArr[0]);
        i++;
        j--;
    }
    result = arr.map((num, index) => {
        return leftSumArr[index] * rightSumArr[index];
    });
    return result;
}

console.log(productExceptMe([-1, 1, 0, -3, 3]));