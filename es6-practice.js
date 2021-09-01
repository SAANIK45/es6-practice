const mySelf = {
    name : 'Samiul Ahmed',
    age : 24,
    isGraduate : true,
    balance: 8000,
    fav : {
        games : ['NFS','DMC','GTA'],
        foods :['cold-drinks','chips','burger']
    },
    friends:['Mahmud','Mahfuz','Hasib','Pial'],
    isTreat : function(amount){
        const remaining  = this.balance - amount;
        return remaining;
    }
}

const favourite = `My name is ${mySelf.name} and my Age is ${mySelf.age}.Most fav Game ${mySelf.fav.games[0]} . 
after treat remainig ${mySelf.isTreat(500)};
`
const treat = mySelf.isTreat(500);

const numberOne = (number) => number / 7 ;
const result1  = numberOne(69);

const numberTwo = (n1,n2) => (n1 + n2)/2;
const result2 = numberTwo(5,7);

const number3 = (num1,num2)=>{
    const add1 = num1 + 7;
    const add2 = num2 + 7;
    const add3 = add1 + add2 ;
    return add3;
}

const result3 = number3(10,5);
//array
const numbers = [2,4,6,7,9,5];

const result4 = numbers.map(number => number*7);
//foreach
const result5 = numbers.forEach(number => console.log(number+2))
//filter
const result6 = numbers.filter(number => number > 6);
//find
const result7 = numbers.find(number => number > 6);

console.log(result7);