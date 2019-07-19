//Juggling alogorithm
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

rotateArray = (arr, rotations) => {
    let actualRotations = rotations % arr.length
    let numberOfSets = findGCDEfficent(arr.length, actualRotations)
    console.log(`numberOfSets: ${numberOfSets}`);
    let setRotations = actualRotations / numberOfSets
    console.log(`setRotations: ${setRotations}`);




}

const testCases = [
    { arr: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], rotations: 3 },
]

testCases.forEach(c => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    // console.log(findGCD(c[0], c[1]));
    console.log(rotateArray(c.arr, c.rotations));

    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
});