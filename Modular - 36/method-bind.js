const student = {
    id: 501,
    name:'Tonmoy Islam',
    money: 5000,
    job:'Web Development & Desinger',
    marjos :'Programing',
    treatDay: function(num) {        
        this.money = this.money - num;
        console.log(this);
        return this.money;
    }     
};


const number = {
    id:501,
    name:'Sultan',
    money: 7000
};
const numberBind = student.treatDay.bind(number);
numberBind(500);
numberBind(700);
numberBind(1200);
student.treatDay(500);
student.treatDay(900);
student.treatDay(1400);