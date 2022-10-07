const user = { id : 34, name : 'Goljer', job : 'actor'};
const strinfing = JSON.stringify(user);
console.log(user);
console.log(strinfing);

const shop = {
    name : 'Alisa Store',
    job : 'actor',
    address : 'Faridpur',
    peoduct : [ 'laptop', 'Mobile','Watch'],
    isExtrention : false
};
const shopString = JSON.stringify(shop);
console.log(shopString);
console.log(shop);
