/*Give an array A, write code to rotate by B positions.

So, for example,
A : [1 2 3 4 5 6]
B : 1

The output :
[2 3 4 5 6 1]*/

// public class Solution {
//     public ArrayList<Integer> rotateArray(ArrayList<Integer> A, int B) {
//         B = B < A.size() ? B : (B%A.size());
//         ArrayList<Integer> ret = new ArrayList(A.subList(B, A.size()));
//         ret.addAll(A.subList(0, B));
//         return ret;
//     }
// }

var rotateArray = function(A, B){
    B = B < A.length ? B : (B%A.length);
    ret = A.slice(B, A.length);
    return ret.concat(A.slice(0, B));
}

const testCases = [
    [[0,1,1,8,3,23,54,75,3], 29],
    [[0,1,-10], 11]
]
testCases.forEach(c => {
    console.log(rotateArray(c[0],c[1]));
});

