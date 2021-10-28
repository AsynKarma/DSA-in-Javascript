/**
#  * Q1.Find Number of Islands
# *PROBLEM STATEMENT
#   Write a function to find out the number of islands in a matrix. Islands are defined as
#   collection of adjacent 1s (not considering diagonally adjacent values). Os are considered 
#   to be water.
#   Sample Input:-
#   [[1,1,0,0,0],
#    [0,1,1,0,0],
#    [1,1,0,1,1]]

#  VisitedArr: 
#   [[1,1,0,0,0],
#    [0,1,1,0,0],
#    [1,1,0,1,1]]
#   Output:-
#   2
#  */
// [1,1] 
// Top: [0,1] [i-1, i]
// Left: [0,0] [i - 1] [i-1]
// Bottom: [i, i+1]
// Right: [i+1, i+1]

const testCase = 
[   [1,1,0,0,1],
    [0,1,0,1,0],
    [1,1,0,1,1]
]

// const testCase = 
// [   [1,1,0,0,1],
//     [0,1,0,1,0],
//     [0,0,1,0,1]
// ]
function countIslands(arr = []) {
    function throwError(errString) {
        throw new Error(errString);
    }
    if(arr.length === 0) throwError('input col array is empty');
    if(arr[0].length === 0) throwError('input row array is empty');
    const rowLength = arr[0].length;
    const colLength = arr.length;
    var islandCount = 0;
    for(let i = 0; i < colLength; i++) {
        for(let j = 0; j < rowLength; j++) {
            if(arr[i][j] === 1) {
                islandCount = islandCount + 1
                DFS(i,j);
            }
        }
    }
    
    function DFS(i, j) {
        arr[i][j] = 2;
        const top = arr[i-1] && arr[i-1][j]
        const left= arr[i] && arr[i][j-1]
        const bottom = arr[i+1] && arr[i+1][j]
        const right = arr[i] && arr[i][j+1]
        if(top === 1) DFS(i-1, j);
        if(left === 1) DFS(i, j-1);
        if(right === 1) DFS(i, j+1);
        if(bottom == 1) DFS(i+1, j);
    }
    return islandCount;
}

console.log(countIslands(testCase));
