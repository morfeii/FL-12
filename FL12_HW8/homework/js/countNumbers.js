function countNumber(str) {
    let numbers = {};
    str = str.split('').filter(element => !isNaN(element));
    str.forEach(elem => {
        isNaN(numbers[elem]) ? numbers[elem] = 1 : numbers[elem]++;
    });
    return numbers;
}

console.log(countNumber("q22w33e4r5555t6y3777u8i2o0p"));