const NS_PER_SEC = 1e9;
const time = process.hrtime();

console.log(checkPossibility(x)); //Code you want to check HR time for

const diff = process.hrtime(time);
console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);