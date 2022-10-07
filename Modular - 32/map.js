const numbers = [ 12, 13, 15, 54, 454];
const output = [];

const inpurNew = number => number * 2;
for(const number of numbers) {
    const result = inpurNew(number) ;
    output.push(result);
}
// console.log(output);


const output2 = numbers.map(number => number * 5);
const output3 = numbers.map(inpurNew);
const output4 = numbers.map(x => x * 10);
console.log(output2);
console.log(output3);
console.log(output4);