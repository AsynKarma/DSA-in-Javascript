function isUnique(str) {
    // Your code here
    const obj = {}
    let output = true;
    str.split('').forEach(char => {
        if (!obj[char]) {
            obj[char] = true;
        } else {
            output = false;
        }
    });
    return output;
}
console.log(isUnique('abcaef'));