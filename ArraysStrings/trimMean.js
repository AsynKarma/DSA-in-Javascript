var trimMean = function (arr) {
    const sortedArr = [...arr];
    sortedArr.sort((a, b) => {
        const returnVal = a - b;
        return returnVal;
    });
    const smallest5Index = sortedArr.length * 0.05;
    const largest5Index = sortedArr.length * 0.95;
    let numbersConsideredCount = 0;
    let consideredSum = 0;
    sortedArr.forEach((num, index) => {
        if (index >= smallest5Index && index < largest5Index) {
            numbersConsideredCount = numbersConsideredCount + 1;
            consideredSum = consideredSum + num;
        }
    })
    return consideredSum / numbersConsideredCount;
};


// [0, 0, 0, 0, 1, 1, 1, 1, 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 6, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 9, 10, 10]
const testCase = [6, 0, 7, 0, 7, 5, 7, 8, 3, 4, 0, 7, 8, 1, 6, 8, 1, 1, 2, 4, 8, 1, 9, 5, 4, 3, 8, 5, 10, 8, 6, 6, 1, 0, 6, 10, 8, 2, 3, 4]; // 4.77778
console.log(trimMean(testCase));