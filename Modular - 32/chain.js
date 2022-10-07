const [best, Falto] = [ 12, 354];
console.log(best , Falto);

const company = {
    name : 'GP',
    CEO : { id : 165,
            name : 'Mohammad', 
            Empole : 22, 
            Salare : '22k'
        },
    skill : { ids : 3784, 
              names : 'julhas',
              tech : {
                works : 'Web development',
                time : 123
              }
            }
};

const {id, name ,Empole} = company.CEO;
const { ids, names, time} = company.skill.tech;
console.log( name, Empole, ids, names, time, works);