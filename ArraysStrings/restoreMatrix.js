// const rowSum = [3, 8], colSum = [4, 7]
var restoreMatrix = function (rowSum, colSum) {
    const rowsCount = rowSum.length;
    const columnCount = colSum.length;
    const result = [];
    for (let row = 0; row < rowsCount; row++) {
        for (let column = 0; column < columnCount; column++) {
            const num = Math.min(colSum[column], rowSum[row]);
            if (result[row]) {
                result[row].push(num);
            } else {
                result[row] = [num];
            }
            rowSum[row] = rowSum[row] - num;
            colSum[column] = colSum[column] - num;
        }
    }
    return result;
};
// console.log(restoreMatrix([3, 8], [4, 7]))
console.log(restoreMatrix([5, 7, 10], [8, 6, 8]))