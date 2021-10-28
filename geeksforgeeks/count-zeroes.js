// Given an array of size N consisting of only 0's and 1's ,which is sorted in such a manner that all the 1's are placed first and then they are followed by all the 0's. You have to find  the count of all the 0's.
 
// Input:
// The first line of input contains an integer T denoting the number of test cases. Then T test cases follow. 
// The first line of each test case contains an integer N, where N is the size of the array A[ ].
// The second line of each test case contains N space separated integers of all 1's follwed by all the 0's, denoting elements of the array A[ ].

// Output:
// Print out the number of 0's in the array. 
 
// Constraints:
// 1 <= T <= 100
// 1 <= N <= 30
// 0 <= A[i] <= 1

// Example :
// Input:
// 3
// 12
// 1 1 1 1 1 1 1 1 1 0 0 0 
// 5
// 0 0 0 0 0
// 6
// 1 1 1 1 1 1

// Output:
// 3
// 5
// 0

// Expected Complexity:
// O(logN)
var solution = function(arr){
    //Approach: Divide and conquer
    var count = 0;
    return countZeroes(arr, count)
}
var countZeroes = function(arr, count){
    //Default case
    if(arr.length < 1){
        return count;
    }

    let mid = Math.floor(arr.length/2)
    if(arr[mid] === 0){
        count += arr.length - mid
        return countZeroes(arr.slice(0,mid), count)
    }
    return countZeroes(arr.slice(mid+1,arr.length), count)
}

var createTestCase = ((num) => {
    let case1 = []
    var i = num;
    while(i>num/9){
        case1.push(1);
        i--;
    }
    i = num
    while(i>0){
        case1.push(0);
        i--;
    }
    console.log(case1);
    return case1;
})

const testCases = [
    [],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [1,1,1,1,1,1,1,1],
    [0,0,0,0,0],
    createTestCase(1000000)
]

testCases.forEach(c => {
    const NS_PER_SEC = 1e9;
    const time = process.hrtime();

    console.log(solution(c));

    const diff = process.hrtime(time);
    console.log(`Benchmark took ${diff[0] * NS_PER_SEC + diff[1]} nanoseconds`);
    console.log(">>>>>>>>>>>>>>>");
});