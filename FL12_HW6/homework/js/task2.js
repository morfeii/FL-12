let a = parseFloat(prompt("Insert the length of the first side of the triangle (it must be a positive integer)","")),
    b = parseFloat(prompt("Insert the length of the second side of the triangle (it must be a positive integer)","")),
    c = parseFloat(prompt("Insert the length of the third side of the triangle (it must be a positive integer)",""));

if(isNaN(a) || isNaN(b) || isNaN(c)) {
alert("Input values should be ONLY numbers");
} else if(a === 0 || b === 0 || c === 0) {
    alert("A triangle must have 3 sides with a positive definite length");
} else if(a + b <= c || b + c <= a || c + a <= b) {
    alert("Triangle doesn’t exist");
} else if(a === b && b === c) {
    alert("Equilateral triangle");
} else if(a === b || b === c || c === a) {
    alert("Isosceles triangle");
} else {
    alert("Scalene triangle");
}