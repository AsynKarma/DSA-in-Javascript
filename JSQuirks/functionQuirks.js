// function a() {
//     var b = function () {
//         return 3;
//     };
//     return b();
//     var b = function () {
//         return 8;
//     };
// }

// function c() {
//     function b() {
//         return 3;
//     }
//     return b();
//     function b() {
//         return 8;
//     }
// }
// console.log(a())
// console.log(c())


// var a;
// (function blah() {
//     a = 10;
//     b = a
// })()
// console.log(a, b)

let cond = true;

while (cond) {
    if (cond) cond = false;
    console.log('Awesome');
}
