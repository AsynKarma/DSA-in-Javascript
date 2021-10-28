Array.prototype.customReduce = function (callBack, iv = null) {
    let i = 0
    let acc;
    if (iv) acc = iv
    else {
        acc = this[0];
        i = 1;
    }
    for (let index = i; index < this.length; index++) {
        const element = this[index];
        acc = callBack(acc, element);
    }
    return acc;
}

const reducer = (accumulator, currentValue) => accumulator + currentValue;
// console.log([1, 2, 3, 4].reduce(reducer, 5));

// console.log([1, 2, 3, 4].customReduce(reducer));