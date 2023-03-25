let arry =[];

const evenNumber = (lastNumber) => {
for (let i = 1; i <= lastNumber; i++) {
    if (i % 2 === 0) {
        console.log(i)};
};
};
// evenNumber(10);
// console.log(arry);
let divBy3COunt = [];
const divBy3 = (start, end) => {
    for (let i = start; i <= end; i++) {
        if (i % 3 ==+ 0) {
            divBy3COunt.push(i);
            console.log(i)};
        };};
divBy3(1, 20);
console.log(`There are ${divBy3COunt.length} numbers that are divides by 3`);