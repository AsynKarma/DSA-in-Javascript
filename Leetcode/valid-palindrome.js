//125
// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.
// Note: For the purpose of this problem, we define empty string as valid palindrome.
// Example 1:
// Input: "A man, a plan, a canal: Panama"
// Output: true

// Example 2:
// Input: "race a car"
// Output: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    console.log(s);
    let str = s.replace(/([^a-zA-Z0-9])/g, '').toLowerCase()
    if(str.length < 2){
        return true;
    }
    let mid = Math.floor(str.length/2)
    var isPalindrome = true;
    for(i = 0; i <= mid; i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
            break;
        }
    }
    return isPalindrome;
};

let testCases = [
    "0P",
    "A man, a plan, a canal?: Panama",
    "race a car"
]

testCases.forEach(c =>{
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();
    console.log(isPalindrome(c));
    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>>>>>");
})