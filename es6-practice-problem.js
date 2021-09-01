//let and const
let value = 100;
value = 200;
const myName = 'Samiul Ahmed Anik';
//template string
const student  = {
    name : 'Hero',
    rollNumber : 22,
    class : 10
}
const studentInfo = `The name of the student is ${myName} his roll number is ${student.rollNumber}`;
// console.log(studentInfo);

//arrow function one parameter
const number = (number) => number / 5;
// console.log(number(66));
//arrow function two parameter
const numSumMul = (x,y) =>{
    const m  = x+2;
    const n = y+2;
    const o = m*n;
    return o;
}
// console.log(numSumMul(3,2));
//arrow function three parameter
const multiply = (a,b,c) => a*b*c;
// console.log(multiply(3,4,2));

//Map using arrow
const values = [4,6,11,4,8,9];
const result = values.map(number => number * 5);
// console.log(result);
//Filter
const numbersTwo = [23,55,66,132,7,23,24,17];
const oddNum = numbersTwo.filter(number => number % 2 != 0 );
// console.log(oddNum);

//Find
const products = [
    {name : 'Monitor', price : 13000},
    {name : 'Mouse', price : 1300},
    {name : 'Ram', price : 4000},
    {name : 'Hdd', price : 7000},
    {name : 'keyboard', price : 5000}
]
const element = products.find(product => product.price == 5000)
// console.log(element);

const teacher  = {
    name:'AJK',
    phone : 23341235,
    designation : 'Lecturer'
}
//destructuring
const {name,phone} = teacher;
// console.log(name,phone);

const elements = [4,6,11,4,8,9];
const [,,third] = elements;
console.log(third);
