const arry = [12, 23, 23, 21, 99, 45, 54, 54, 67, 88, 87, 97];

let largeNumber = 0;
let smallNumber = 100;

for (let item of arry) {
    if (item > largeNumber) {
        largeNumber = item;
    }
}

for (let i of arry) {
    if (i < smallNumber) {
        smallNumber = i;
    }
}

let even = [];

for (let item of arry) {
    if (item % 2 === 0) {
        even.push(item);}
}

let oddNum = [];
for (let item of arry) {
    if (item % 2 === 1) {
        oddNum.push(item);}
}

console.log(`The Large number of array is ${largeNumber} & small Number is ${smallNumber} and even number is ${even} & odd number is ${oddNum}`);

