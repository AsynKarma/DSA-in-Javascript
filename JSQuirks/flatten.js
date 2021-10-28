const arr = [
    [1, 2, 3],
    [[4, 5]],
    [[[8, 7, 6]]]
]


Array.prototype.customFlatten = function () {
    const returnArr = [];
    const flatteningFunc = function (arr) {
        arr.forEach(item => {
            Array.isArray(item) ?
                flatteningFunc(item) :
                returnArr.push(item);
        })
    }
    flatteningFunc(this);
    return returnArr;
}

console.log(arr.customFlatten()) // [1,2,3,4,5,8,7,6];