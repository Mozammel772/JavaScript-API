console.log('Hello');

function add(num1 , num2 = 0){
    const sum = num1 + num2;
    return sum;
}
const result = add(16);
// console.log(result);

const sum = num => num * 10;
const results = sum(10);
console.log(results);


const multipul = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4);
const multipulSum = multipul(77, 88 , 99, 55);
console.log(multipulSum);


const multipuls = (num1, num2, num3, num4) => (num1 * num2 * num3 * num4);
const multipulSums = multipuls(77, 88 , 99, 55);
console.log(multipulSums);


const doMath = (x , y) => {
    const num5 = x + y;
    const num6 = x - y;
    const num7 =num5 * num6;
    const num8 = num7 * 10;
    return num8;
}
const resul = doMath(99, 33);
console.log(resul);

const getName = () => 'Badhon Miya';
const name = getName()
console.log(name);