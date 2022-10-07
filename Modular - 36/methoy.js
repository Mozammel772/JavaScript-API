const students = {
    id: 501,
    name:'Tonmoy Islam',
    money: 5000,
    job:'Web Development & Desinger',
    marjos :'Programing',
    rich: false,
    subject: [ 'math', 'mathmatical','english'],
    friends:{
        id: 67,
        name:'Rodro Islam',
        job:'Javascript',
        marjos :'Programing Hero',
        rich: false,
        subject: [ 'React', 'HTML','PHP']
    },
    takeExam: function (){
        console.log(this.name , 'Is Best Programmer In The BD')
    },
    treatDay: function(num,boksis) {
        this.money = this.money - num - boksis;
        return this.money;
    }

};

students.takeExam();
const remaining = students.treatDay(900 , 100);
const remaining1 = students.treatDay(500 , 50);
console.log(remaining);
console.log(remaining1);