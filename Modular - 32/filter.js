// filter
const numbers = [ 12, 15, 50, 30, 32, 54, 36];
const number = numbers.filter(x => x > 30);
const number1 = numbers.filter(x => x < 20);
// console.log(number, number1);

const products = [
    { Name : 'Water-Botton', Price : 200 , color : 'Red'},
    { Name : 'phone', Price : 20000 , color : 'black'},
    { Name : 'laptop', Price : 80000 , color : 'silver'},
    { Name : 'Botton', Price : 20 , color : 'Yello'},
    { Name : 'Water-Botton2', Price : 100 , color : 'Red'},
    { Name : 'phone2', Price : 2000 , color : 'black'},
    { Name : 'laptop2', Price : 40000 , color : 'silver'},
    { Name : 'Botton2', Price : 60 , color : 'Yello'}
];
const product = products.filter(x => x .Price > 1000);
const producting = products.filter(x => x .color == 'black');
// product.filter(x => console.log(x));
// producting.filter(x => console.log(x));

//fine
const whiteItam = products.find(x => x.color == 'silver');
// whiteItam.find(x => console.log(x));
console.log(whiteItam);