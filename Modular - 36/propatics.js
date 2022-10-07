const phone = {
        color: 'black', 
        price: 40000, 
        model: 'htc100', 
        ram: '4GB', 
        incluren: true
            };
const keys = Object.keys(phone);
console.log(keys);
const values = Object.values(phone);
console.log(values);
const entries = Object.entries(phone);
console.log(entries);

Object.seal(phone);
phone.price = 2500;

Object.freeze(phone);


delete phone.incluren;
console.log(phone);

delete phone.color;
console.log(phone);