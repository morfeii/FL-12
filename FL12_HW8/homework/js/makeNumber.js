function makeNumber(str) {
    str = str.split('').filter(element => !isNaN(element));
    return str.join('');
}

console.log(makeNumber("1q2w3e4r5t6y7u8i9o0p"));