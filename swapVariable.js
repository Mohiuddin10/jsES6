let a = 5;
let b = 10;
let temp;

//old style
// temp = a;
// a = b;
// b = temp;
// console.log(`The first veriable: ${a}`);
// console.log(`The scound veriable: ${b}`);

// ES6 Style

[a,b] = [b,a];
console.log(`The first veriable: ${a}`);
console.log(`The Secound veriable: ${b}`);