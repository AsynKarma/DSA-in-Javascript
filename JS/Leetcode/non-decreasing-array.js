// 665. Non-decreasing Array
// Easy
// Given an array with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

// We define an array is non-decreasing if array[i] <= array[i + 1] holds for every i (1 <= i < n).

// Example 1:
// Input: [4,2,3]
// Output: True
// Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
// Example 2:
// Input: [4,2,1]
// Output: False
// Explanation: You can't get a non-decreasing array by modify at most one element.
// Note: The n belongs to [1, 10,000].

var maxReplaceable = 100000
var replaceCount = 0;
var checkPossibility = function(nums) {
    for(i = 0; i < nums.length; i++){
        if(i == nums.length - 1){
            if(replaceCount <= maxReplaceable){
                return true;
            }else{
                return false;
            }   
        }
        if(nums[i] > nums[i+1]){
            replaceCount++;
            if(replaceCount > maxReplaceable){
                return false;
            }
            if(nums[i] < nums[i+2]){
                nums[i+1] = nums[i]
            }else{
                nums[i] = nums[i+1]
            }
            
            break;
        }
    }
    console.log(nums);
    return checkPossibility(nums)
}; 

var createTestCase = ((num) => {
    let case1 = []
    let i = 0;
    while(num>0){
        case1.push(num);
        num--;
    }
    console.log(case1);
    return case1;
})

let testCases = [
    createTestCase(1000),
]

testCases.forEach(c =>{
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();
    console.log(checkPossibility(c));
    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
})


