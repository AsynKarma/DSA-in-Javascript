//Find the longest common sub string
//Find the longest common sub sequence
//Number of insertions to make the string palindrome

findCommonSubSequence = (s1, s2) => {
    let maxSubString = ''
    let m = s1.length
    let n = s2.length
    var twoDArr = new Array(n)
    for (let i = 0; i < n; i++) {
        twoDArr[i] = new Array(m)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] === s2[j]) {
                if (i > 0 && j > 0) {
                    twoDArr[j][i] = twoDArr[j - 1][i - 1] + ' ' + s1[i]
                } else {
                    twoDArr[j][i] = s1[i]
                }
                maxSubString = maxSubString.length < twoDArr[j][i].length ? twoDArr[j][i] : maxSubString
            } else {
                twoDArr[j][i] = maxSubString
            }
        }
    }

    return maxSubString
}

findCommonSubString = (s1, s2) => {
    let maxSubStringCount = 0
    let m = s1.length
    let n = s2.length
    var twoDArr = new Array(n)
    for (let i = 0; i < n; i++) {
        twoDArr[i] = new Array(m)
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] === s2[j]) {
                if (i > 0 && j > 0) {
                    twoDArr[j][i] = twoDArr[j - 1][i - 1] + 1
                } else {
                    twoDArr[j][i] = 1
                }
                maxSubStringCount = Math.max(maxSubStringCount, twoDArr[j][i])
            } else {
                twoDArr[j][i] = 0
            }
        }
    }

    return maxSubStringCount

}

const testCases = [
    ['abadsfaf', 'ajfkfjj'], //Ans: 3
    ['ABCDGH', 'AEDFHR'], //Ans 3
]

testCases.forEach((c) => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    console.log(findCommonSubSequence(c[0], c[1]));
    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
})