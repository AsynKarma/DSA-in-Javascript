// Given a string, find the length of the longest substring, which has all distinct characters.

const non_repeat_substring = function (str) {
    let leftPointer = 0,
        rightPointer = 0,
        maxLength = 0,
        windowChar = {};
    while (rightPointer < str.length) {
        const rightChar = str[rightPointer];
        if (windowChar[rightChar]) {
            leftPointer = Math.max(leftPointer, windowChar[rightChar] + 1);
        }
        windowChar[rightChar] = rightPointer;
        maxLength = Math.max(maxLength, (rightPointer - leftPointer) + 1);
        rightPointer++;
    }
    // TODO: Write your code here
    return maxLength;
};

console.log(non_repeat_substring('abccde')) // abc, cde