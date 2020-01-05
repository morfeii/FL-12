let addOne = num => ++num;
let sqr = num => num * num;
let multiplyFive = num => num * 5;

function pipe(num) {
    for (let i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }
    return num;
}

console.log(pipe(1, addOne, sqr, multiplyFive));