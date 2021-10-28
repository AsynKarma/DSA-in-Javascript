//Find the sum of prime numbers in an array with in range

class sum-of - prime - numbers -in -range {
    let inputArr = []
    var bit = []
    var primeNumberPreCompiled = []

    updatePrimeNumbersArr(arr){
        let n = arr.length
        let sqRtOfMaxN = Math.ceil(Math.sqrt(Math.pow(10, 10)))
        for (let i = 0; i < sqRtOfMaxN; i++) {
            for (let j = 0; j < n; j++) {
                if (inputArr[j] % i !== 0 && !primeNumberPreCompiled[j]) {
                    primeNumberPreCompiled[j]
                }

            }
        }
    }

    updateBIT(arr) {
        let n = arr.length
        var x = 1
        //Update logic
        //Update all the elements which satisfy newX = X + (X&-X)
        while (x < n + 1) {
            bit[x] = 
        }
    }

    getSumInRangeBIT() {

    }
}


const testCases = [
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12],
    [1, 2, 3, 5, 7]
]

testCases.forEach(c => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    console.log(rotateArray(c.arr, c.rotations));

    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
});