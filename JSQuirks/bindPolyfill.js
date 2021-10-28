// Function.prototype.customBind = function (obj) {
//     let func = this;
//     return function () {
//         func.apply(obj);
//     }
// }

// let obj = { name: 'Venu' };
// const nameFunc = function () {
//     // console.log(this.name)
//     const returnVal = this.name;
//     return returnVal
// };
// const boundFunc = nameFunc.bind(obj);
// const boundFuncValue = boundFunc()
// console.log(
//     boundFuncValue
// )


let obj = {
    name: 'Jack',
};

let myFunc = function (id, city) {
    console.log(`${this.name}, ${id}, ${city}`);  // id will be undefined
    return `${this.name}, ${id}, ${city}`;
};

// Accepting any number of arguments passed to myBind
Function.prototype.myBind = function (...args) {
    let func = this,
        params = args.slice(1);
    // Accepting arguments passed to newFunc
    return function (...args2) {
        func.apply(obj, [...params, ...args2]);
    };
};

let newFunc = myFunc.myBind(obj, 'a_random_id')
newFunc('New York')
console.log(newFunc('Paris'));