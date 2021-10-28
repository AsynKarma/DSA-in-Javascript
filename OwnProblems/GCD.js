//HCF or GCD
//Efficent code algo is Euclidean Algorithms

var findGCD = (fNum, sNum) => {
    var max = 0
    var min = 0
    if (fNum > sNum) {
        max = fNum
        min = sNum
    } else {
        max = sNum
        min = fNum
    }

    //BestCase: Highest num divisible by leastNumber
    if (max - min === min || max === min) {
        return min
    }
    return findGCD(max - min, min)
}

findGCDEfficent = (fNum, sNum) => {
    var minNum = fNum
    var remainder = 0
    if (sNum === 0) {
        return fNum
    } else if (fNum === 0) {
        return sNum
    } else if (fNum === 0 && sNum === 0) {
        return fNum
    }
    if (fNum > sNum) {
        minNum = sNum
        remainder = fNum % sNum
    } else {
        minNum = fNum
        remainder = sNum % fNum
    }
    return findGCDEfficent(minNum, remainder)
}

const testCases = [
    [123452345678923456789023456789670, 12323456789023456789023456784230],
    [80, 45],
    [17, 27],
    [32, 78],
    [60, 60]
]

testCases.forEach(c => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    // console.log(findGCD(c[0], c[1]));
    console.log(findGCDEfficent(c[0], c[1]));

    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
});