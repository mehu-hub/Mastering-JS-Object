const player = {};
player.name = 'Mehedi Hasan';
player.age = 21;

player.bat = function () {
    console.log('I Am Bat')
}

// console.log(player)
// player.bat()
//----------------------
const player2 = {
    name: 'Hasan Mehedi',
    age: 21,
    ball: function () {
        console.log('Throw The Ball')
    },
    salary: 20000
}
// console.log(player)
//-----------------------
const person = new Object();
// console.log(person);
//-----------------------
const sName = Object.create(player2);
// console.log(sName.name)
//-----------------------
// Class
class Person {
    name = 'Abul';
    address = 'Sodor Ghat';
    constructor(age){
        this.age = age;
    }
}

const person2 = new Person(56)
console.log(person2);