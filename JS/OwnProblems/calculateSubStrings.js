

numberOfSubStrings = (str) => {
    let subStrArr = []
    let checkCount = 0
    for (let i = 0; i < str.length; i++) {
        if (!subStrArr.includes(str.slice(i, str.length))) {
            subStrArr.push(str.slice(i, str.length))
        }
        for (let j = str.length - 1; j >= 0; j--) {
            checkCount++
            let newSubStr = str.slice(i, j)
            if (!subStrArr.includes(newSubStr)) {
                subStrArr.push(newSubStr)
            }
        }
    }
    console.log(`Number of checks: ${checkCount}`);
    // console.log(subStrArr);
    return subStrArr.length
}

const testCases = [
    // "ababa",
    // "bababab",
    "abababababababababababababababbababaabbaababababababababa"
]

testCases.forEach(str => {
    console.log(`Number of subStrings: ${numberOfSubStrings(str)}`);
    console.log("<<<<<<<<<<<<<<<<<<<<<<<");
});