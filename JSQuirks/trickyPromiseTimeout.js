let promise = new Promise((resolve, reject) => {
    console.log('b')
    resolve('c')
})

console.log('a')

setTimeout(() => {
    console.log('d')
}, 0)

promise.then(val => {
    console.log(val)
})




