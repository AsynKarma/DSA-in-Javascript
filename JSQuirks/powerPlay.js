const fn1 = (a) => {
    let memo = {};
    return () => {
        if (memo[a] !== undefined) return memo[a];
        const res = a + 5;
        memo[a] = res;
        return res;
    }
}

const userInfo = { name: 'venu', job: 'Software', loaction: 'Hyd', somethingEls: 'fsadfa' };

const { name, job, ...rest } = userInfo;

let a = [10, 1, 2], b = { x: 5, y: 10 };
[a, b] = [b, a];
console.log(a, b);