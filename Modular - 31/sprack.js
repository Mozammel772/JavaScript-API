const numbers = [ 12, 13, 14, 160, 15, 16, 17, 99];
console.log(...numbers);

const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min);


const numbers2 = numbers;
numbers.push(55);
console.log(numbers)

const hubby = 'Akbar Ali';
const Hobby = 'Get Flower';
const sumes = `
      My People Name is the ${hubby}
      My Best Hobby id The ${Hobby}
`;
console.log(sumes);


function getSum(a, b=9){return a+b;}
 console.log(getSum(2, 7));

 const y = x => x*x;
const z = y(5); 
console.log(z)

const cars=['toyota', 'honda','mercedes']; 
const newCars= [...cars , 'ferrari']; 
console.log(newCars)