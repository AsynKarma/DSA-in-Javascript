const array = [1, 2, 3, 4, 5];
function print(arr) {
    for (let i = 0; i < arr.length; i++) {
        setTimeout(() => {
            console.log(arr[i])
        }, 1000);
    }
}

print(array);