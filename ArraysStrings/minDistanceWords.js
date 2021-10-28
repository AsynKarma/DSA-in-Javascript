/**
 * @param {string} word
 * @return {number}
 */

/* const wordMap = {
    'A': [0, 0],
    'B': [0, 1],
    'C': [0, 2],
    'D': [0, 3],
    'E': [0, 4],
    'F': [0, 5],
    'G': [1, 0],
    'H': [1, 1,],
    'I': [1, 2,],
    'J': [1, 3,],
    'K': [1, 4,],
    'L': [1, 5,],
    'M': [2, 0],
    'N': [2, 1],
    'O': [2, 2],
    'P': [2, 3],
    'Q': [2, 4],
    'R': [2, 5],
    'S': [3, 0],
    'T': [3, 1],
    'U': [3, 2],
    'V': [3, 3],
    'W': [3, 4],
    'X': [3, 5],
    'Y': [4, 0],
    'Z': [4, 1],
}

var minimumDistance = function (word) {

    function distance(c1, c2) {
        if (!c1 || !c2) return 0;
        const c1Coord = wordMap[c1];
        const c2Coord = wordMap[c2];
        return Math.abs(c1Coord[0] - c2Coord[0]) + Math.abs(c1Coord[1] - c2Coord[1]);
    }

    function minDist(i, left, right) {
        if (i < 0) return 0;
        let dist1, dist2;
        if (left) {
            dist1 = distance(word[i], left) + minDist(i - 1, word[i - 1], right);
        } else {
            dist1 = minDist(i - 1, word[i - 1], right);
        }
        if (right) {
            dist2 = distance(word[i], right) + minDist(i - 1, left, word[i - 1]);
        } else {
            dist2 = minDist(i - 1, left, word[i - 1])
        }
        let dist = Math.min(
            dist1,
            dist2);
        return dist;
    }
    const minDIst = minDist(word.length - 1, undefined, undefined);
    return minDIst;
    // const characters = word.split('');
    // let leftFinger = characters[0];
    // let rightFinger;
    // const dp = { `${leftFinger}${}`: 0 };
    // for (let i = 1; i < characters.length; i++) {
    //     const distanceFromLeftFinger = distance(characters[i], leftFinger);
    //     const distanceFromRightFinger = distance(characters[i], rightFinger);
    //     dp[characters[i]] = Math.min(
    //         distance(leftFinger, characters[i]),
    //         distance(rightFinger, characters[i])
    //     );
    // }
    // distanceArr.sort((a, b) => a - b);
    // let minDistance = distanceArr.reduce((acc, cv, index) => {
    //     if (index !== word.length - 1) {
    //         return acc + cv;
    //     }
    //     return acc;
    // }, 0);
    // return minDistance;
};
console.log(minimumDistance('CAKE'));
// console.log(minimumDistance('HAPPY'));
// console.log(minimumDistance('NEW'));
// console.log(minimumDistance('YEAR'));


// C -> A(left)
//     -> A(right)
//     -> K(left)
//     -> K(right)
//     -> E(left)
//     -> E(right);


// dp(k, left, right) = min(dp[k - 1, left, right) + distance)



// fn(s, index, left, right) = min(
//     dist(a, s[i])
//     +
//     fn(s, i - 1, s[i], b),

//     dist(b, s[i])
//     +
//     fn(s, i - 1, a, s[i])
// );
*/

function minimumDistance(word) {
    const wordMap = {
        'A': [0, 0],
        'B': [0, 1],
        'C': [0, 2],
        'D': [0, 3],
        'E': [0, 4],
        'F': [0, 5],
        'G': [1, 0],
        'H': [1, 1,],
        'I': [1, 2,],
        'J': [1, 3,],
        'K': [1, 4,],
        'L': [1, 5,],
        'M': [2, 0],
        'N': [2, 1],
        'O': [2, 2],
        'P': [2, 3],
        'Q': [2, 4],
        'R': [2, 5],
        'S': [3, 0],
        'T': [3, 1],
        'U': [3, 2],
        'V': [3, 3],
        'W': [3, 4],
        'X': [3, 5],
        'Y': [4, 0],
        'Z': [4, 1],
    }

    function dist(c1, c2) {
        if (!c1 || !c2) return 0;
        const c1Coord = wordMap[c1];
        const c2Coord = wordMap[c2];
        return Math.abs(c1Coord[0] - c2Coord[0]) + Math.abs(c1Coord[1] - c2Coord[1]);
    }

    const N = word.length;
    const cache = {};
    function best(left, right, index) {
        if (index === N) return 0;
        const key = `${left}-${right}-${index}`;
        if (cache[key]) {
            return cache[key];
        }
        const nextFinger = word[index];
        cache[key] = Math.min(
            best(nextFinger, right, index + 1) + dist(left, nextFinger),
            best(left, nextFinger, index + 1) + dist(right, nextFinger)
        );
        return cache[key]
    }
    let res;
    for (let x = 0; x < 26; x++) {
        for (let y = 0; y < 26; y++) {
            res = Math.min(res, best(x, y, 0))
        }
    }
    return res
}

console.log(minimumDistance('HAPPY'))
