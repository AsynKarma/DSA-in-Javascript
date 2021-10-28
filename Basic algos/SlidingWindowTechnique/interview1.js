/*

Write a function promiseAll which takes an array of Promises as an array 
and returns a promise, which if resolved, returns the result of each
 promise in an array, or an error catch block, if one of the promises is rejected.

Eg: 
Where task is a function that returns a promise with a deOutput: [1000, 5000, 3000]
lay passed as arg.

*/

function task(time) {
    const promise = new Promise((success, failure) => {
        setTimeout(() => {
            success(time);
        }, time);
    });
    return promise;
}

const taskList = [task(1000), task(5000), task(3000)];
Promise.all(taskList).then((res) => {
    console.log(res);
}).catch(e => console.log(e));



// this.setState({ 'a': 'b' }, () => { this.setState({ 'a': 'c' }) }) // c, 2

// this.setState({ 'a': 'b' })
// this.setState({ 'a': 'c' })