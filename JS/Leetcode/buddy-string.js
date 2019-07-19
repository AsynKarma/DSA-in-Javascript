// 859
// Given two strings A and B of lowercase letters, return true if and only if we can swap two letters in A so that the result equals B.

// Example 1:
// Input: A = "ab", B = "ba"
// Output: true

// Example 2:
// Input: A = "ab", B = "ab"
// Output: false

// Example 3:
// Input: A = "aa", B = "aa"
// Output: true

// Example 4:
// Input: A = "aaaaaaabc", B = "aaaaaaacb"
// Output: true

// Example 5:
// Input: A = "", B = "aa"
// Output: false

// Note:
// 0 <= A.length <= 20000
// 0 <= B.length <= 20000
// A and B consist only of lowercase letters.
/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var buddyStrings = function(A, B) {
    console.log(A,B);
    if(A.length != B.length){
        return false;
    }
    if(A===B){
        for(i = 0;i<A.length;i++){
            if(A.slice(i+1,A.length).includes(A[i])){
                return true
            }
        }
    }else{
        var aVariant = []
        var bVariant = []
        for(i = 0;i<A.length;i++){
            if(A[i] !== B[i]){
                aVariant.push(A[i])
                bVariant.push(B[i])
            }
        }
        if(aVariant.length == 2 &&aVariant[0] == bVariant[1] && aVariant[1] == bVariant[0]){
            return true
        }
    }
    return false;
};

let testCases = [
    ['abcdefg','agcdefb'], //true
    ['aba','aba'], //'true'
    ['aa','aa'], //true
    ['ab','ab'], //false
    ['aaaaaabc','aaaaaacb'], //true
    ['ab','ba'], //true
    ['','aa'], //false
]

testCases.forEach(c =>{
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();
    console.log(buddyStrings(c[0],c[1]));
    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
})


