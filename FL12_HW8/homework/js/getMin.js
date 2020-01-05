function getMin() {
    let min = arguments[0];
    for (let i in arguments) {
        if (min > arguments[i]) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(getMin(1,3,4,2));