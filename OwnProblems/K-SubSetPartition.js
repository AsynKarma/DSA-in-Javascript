let findKSubSets = (n, k) => {
    //f(n,k) = k * f(n-1, k) + f(n-1, k-1)
    if (n === k) {
        return 1
    }
    if (k === 1) {
        return 1
    }

    return k * findKSubSets(n - 1, k) + findKSubSets(n - 1, k - 1)
}

const testCases = [
    [12, 5]
]

testCases.forEach((c) => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    console.log(findKSubSets(c[0], c[1]))

    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
})