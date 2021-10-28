const debounce = function (fn, d) {
    let timer;
    return function () {
        let context = this,
            args = arguments;
        clearTimeout(timer);
        timer = setTimeout(() => {
            getData.apply(context, arguments);
        }, d);
    }
}

let counter = 0;
const getData = () => {
    // calls an API and gets Data
    console.log("Fetching Data ..", counter++);
}

const betterFunction = debounce(getData, 300);




const loggerFunc = () => {
    console.count("Throttled Function");
}

const throttle = (fn, limit) => {
    let flag = true;
    return function () {
        let context = this;
        let args = arguments;
        if (flag) {
            fn.apply(context, args);
            flag = false;
            setTimeout(() => {
                flag = true;
            }, limit);
        }
    }
}

const betterLoggerFunction = throttle(loggerFunc, 1000);

window.addEventListener("resize", betterLoggerFunction);

// This is the normal Function without Throttling
//Check the console for the difference between the calls of Normal Function and the Throttled Function 
const normalFunc = () => {
    console.count("Normal Function");
}

window.addEventListener("resize", normalFunc);


export {
    debounce, throttle
}