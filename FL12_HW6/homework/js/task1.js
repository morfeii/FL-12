let a = parseFloat(prompt("Insert the number 'a' of quadratic equation ax^2+bx+c=0","")),
    b = parseFloat(prompt("Insert the number 'b' of quadratic equation ax^2+bx+c=0","")),
    c = parseFloat(prompt("Insert the number 'c' of quadratic equation ax^2+bx+c=0","")),
    x1 = 0,
    x2 = 0; 
const four = 4,
      two = 2;

if(isNaN(a) || isNaN(b) || isNaN(c)) {
  alert("Invalid input data");
} else {
    let d = b * b - four * a * c;
    x1 = (-b + Math.sqrt(d)) / (two * a); 
    x2 = (-b - Math.sqrt(d)) / (two * a);
  if(d < 0) {
    alert("No solution");
  } else if(d > 0) {
      alert(`x1 = ${x1}, x2 = ${x2}`);
  } else {
      alert(`x = ${x1}`);
  }
}  
