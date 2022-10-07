const fish = { id : 56, name : 'Biggest Hilsa', address : 'Borisal', phone : '017098238923', dress : 'sliver' };
// const phone = fish.phone;
// const id = fish.id;
// console.log(phone, id);


const company = {
    name : 'GP',
    CEO : { id : 165, name : 'Mohammad', Empole : 22, Salare : '22k'},
    skill : { ids : 3784, names : 'julhas',}
};

const {id, name ,Empole} = company.CEO;
const { ids, names} = company.skill;
console.log( id, name, Empole, ids, names);