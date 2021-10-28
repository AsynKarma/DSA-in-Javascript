const sum = (a) => {
    return (b) => {
        if (!b) return a;
        return sum(a + b);
    }
}
console.log(sum(1)(2)(3)())



// With Apply
function curry(fn) {
    let allElements = [];
    const returFn = function (...args) {
        allElements = allElements.concat(args);
        if (allElements.length === fn.length) {
            return fn.apply(this, allElements);
        }
        return returFn;
    }
    return returFn;
}

function sum(a, b, c) {
    return a + b + c;
}

const curriedSum = curry(sum);
console.log(curriedSum(1)(2)(3)); // 6
console.log(curriedSum(1, 2)(3)); // 6
console.log(curriedSum(1, 2, 3)); // 6
export default curry;