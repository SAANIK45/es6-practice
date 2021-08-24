class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, 'start a support session');
    }
}

const aamir = new Support('Aamir Khan', 'BD');
const salman = new Support('Solaiman Khan', 'Dubai');
const sharuk = new Support('SRK Khan', 'Dubai');
const akshay = new Support('Akshay Kumar', 'Dubai');
aamir.startSession();
salman.startSession();
console.log(aamir, salman, sharuk, akshay);
// console.log(salman);

//create a class
class Student{
    name;
    rollNumber;
    address;
    team = 'bangladesh';
    //constructor for dynamic get value
    constructor(name,rollNumber,address){
        //access property in class using this
        this.name = name;
        this.rollNumber = rollNumber;
        this.address = address;
    }
    support(){
        console.log(this.name , 'start a support session');
    }
}
//making a student using class and constructor
const anik = new Student('Anik', 11 , 'Dhaka');
const anikFunc = anik.support();
const mahmud = new Student('mahmud', 1 , 'dinajpur');
console.log(anik,mahmud);
console.log(anikFunc);
