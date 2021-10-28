const memoize = (fn) => {
    const memo = {}
    return (a, b) => {
        if (memo[key]) return memo[key]
        else {
            const result = fn(a, b);
            memo[key] = result
        }
        return result;
    }
}

add(2, 3) //calculate and return 5
add(2, 3) //calculate and return 5

const memoizedAdd = memoize(add)

memoizedAdd(2, 3) //calculate and return 5
memoizedAdd(2, 3) //return 5 from cache


// browser -> google.com -> DNS -> Getting IP
// tcp handshake
// creates a request -> Header
// server responds with http status code, data(HTML, JSON),
