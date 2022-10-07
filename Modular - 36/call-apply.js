const student = {
    id: 501,
    name:'Tonmoy Islam',
    money: 5000,
    job:'Web Development & Desinger',
    marjos :'Programing',
    treatDay: function(num, boksis) {        
        this.money = this.money - num - boksis;
        console.log(this);
        return this.money;
    }     
};
const number = {
    id:501,
    name:'Sultan',
    money: 7000
};
const golamMostofa = {
    id:500,
    name:'Golam Miya',
    money: 7000
};
// apply to call Function:

student.treatDay.call(number, 500 , 100);
student.treatDay.call(golamMostofa, 6000, 50);

// apply to apply Function:
student.treatDay.apply(number, [500, 200, 30]);
student.treatDay.apply(golamMostofa, [2500, 500, 30]);


const obj ={a:1, b:7, c:3, length:2};
console.log(Object.keys(obj).length);

const obj1= {module: 35, video:2}; const obj2= {module: 35, video:2};
console.log(obj1 === obj2);

const getGirlFriend= (name = "chokina")=>"name"; console.log(getGirlFriend()); 