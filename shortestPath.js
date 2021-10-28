/*Assume you have a robot that needs to navigate a Maze.The robot can carry with it X dynamites which can be used to blow away wall
nodes in the Maze  e.g.when dynamites = 3 : robot can bomb 3 wall nodes.A Robot can only move Up, Down, Left, and Right and not
diagonally.You want the Robot to navigate from the start of the maze to the end of the maze taking the shortest path(and return
the path taken by the robot). If there are multiple shortest paths, any of the shortest paths can be used.

Example maze: 

S 1 0 0 E
0 1 0 0 0

where
0 = empty
1 = wall
S = starting point
E = end point

Assuming Robot has 3 dynamites.

    Solution:
S → 1 → 0 →0 →E

Example 2:
S 1 0 0 0
0 1 0 1 0
0 1 0 1 0
0 0 0 1 E

Assuming Robot has 3 dynamites

Possible Solution 2(other solutions are possible):
S →1 → 0 →0
    |
    0
    |
    0
    |
    E

end(m, n)
s(x, y)
dynamites: d

S -> x, y
End -> (m, n)

x > m ? UpperRows : BottomROws
y > n ? Left Columns: Right COlumns

0 1 0 0 0
0 1 S 1 0
0 1 0 1 0
0 0 0 1 E

for (let i = startRow; i < endRow; i++) {
    for (let j = startColumn; j < endColumn; j++) {
        memo[]
    }
}

1 -> Wall 0 -> Way, 3 -> Start 2 -> End
0 1 0 0 0
0 1 - 1 1 0
0 1 0 1 0
0 0 0 1 2
*/
const start = [1, 2]
const end = [3, 4]
const arr = [
    [0, 1, 0, 0, 0],
    [0, 1, 3, 0, 0],
    [0, 1, 1, 1, 1],
    [0, 0, 1, 1, 2],
];

console.log(calculateShortestPath(arr, start, end, 1));

function calculateShortestPath(arr, start, end, dynamites) {
    let minDist = Infinity;
    const paths = [];
    DFS(arr, start[0], start[1], dynamites, 0);
    function DFS(dfsArr, i, j, d, dist) {
        const newArr = dfsArr.map(function (arrC) {
            return arrC.slice();
        });
        newArr[i][j] = 4;
        const top = newArr[i - 1] && newArr[i - 1][j];
        const left = newArr[i] && newArr[i][j - 1];
        const right = newArr[i] && newArr[i][j + 1];
        const bottom = newArr[i + 1] && newArr[i + 1][j];
        if (top === 2 || left === 2 || right === 2 || bottom === 2) {
            // Reached the end
            paths.push(dist + 1)
            minDist = Math.min(dist + 1, minDist);
        }
        if (top === 1 && d > 0) {
            DFS(newArr, i - 1, j, d - 1, dist + 1)
        }
        if (top === 0) DFS(newArr, i - 1, j, d, dist + 1)

        if (left === 1 && d > 0) {
            DFS(newArr, i, j - 1, d - 1, dist + 1);
        }
        if (left === 0) DFS(newArr, i, j - 1, d, dist + 1)

        if (right === 1 && d > 0) {
            DFS(newArr, i, j + 1, d - 1, dist + 1)
        }
        if (right === 0) DFS(newArr, i, j + 1, d, dist + 1)

        if (bottom === 1 && d > 0) {
            DFS(newArr, i + 1, j, d - 1, dist + 1)
        }
        if (bottom === 0) DFS(newArr, i + 1, j, d, dist + 1)
    }
    return minDist;
}






