/*You are in an infinite 2D grid where you can move in any of the 8 directions :

 (x,y) to 
    (x+1, y), 
    (x - 1, y), 
    (x, y+1), 
    (x, y-1), 
    (x-1, y-1), 
    (x+1,y+1), 
    (x-1,y+1), 
    (x+1,y-1) 
You are given a sequence of points and the order in which you need to cover the points. Give the minimum number of steps in which you can achieve it. You start from the first point.

Input :

Given two integer arrays A and B, where A[i] is x coordinate and B[i] is y coordinate of ith point respectively.
Output :

Return an Integer, i.e minimum number of steps.
Example :

Input : [(0, 0), (1, 1), (1, 2)]
Output : 2
It takes 1 step to move from (0, 0) to (1, 1). It takes one more step to move from (1, 1) to (1, 2).

This question is intentionally left slightly vague. Clarify the question by trying out a few cases in the “See Expected Output” section.
*/

var coverPoints = function(A, B){
    var minSteps = 0;
    
    if(A.length > 1){
        for(i = 0; i < A.length - 1; i++){
            var E1 = [A[i], B[i]]
            var E2 = [A[i+1], B[i+1]]
            minSteps = minSteps + getMinStepsBetweenEdges(E1, E2)
        }
    }
    return minSteps;
}

var getMinStepsBetweenEdges = function(E1, E2) {
    var x = Math.abs(E1[0] - E2[0])
    var y = Math.abs(E1[1] - E2[1])
    return x > y ? x : y
}

const testCases = [
    [[0,1,1], [0,1,2]],
    [[0,1,-10], [0,1,10]]
]
testCases.forEach(c => {
    console.log(coverPoints(c[0],c[1]));
});