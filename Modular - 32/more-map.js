const names = [ 'Tom Jerry', 'Tom Tomas', 'Tom Sultaniya'];
const name = names.map(num => num.length);
console.log(name);

const products = [
    { Name : 'Water-Botton', Price : 200 , color : 'Red'},
    { Name : 'phone', Price : 20000 , color : 'black'},
    { Name : 'laptop', Price : 80000 , color : 'silver'},
    { Name : 'Botton', Price : 20 , color : 'Yello'}
];
const pBotton = products.map(x => x.Name);
const nBotton = products.map(x => x.Price);
// products.map(x => console.log(x));
products.forEach(x => console.log(x));
console.log(pBotton, nBotton );