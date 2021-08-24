//common class
class Teacher{
    name;
    address;
    mobileNo;
    subject;
    constructor(name,address,mobileNo,subject){
        this.name = name;
        this.address = address;
        this.mobileNo = mobileNo;
        this.subject = subject;
    }
}

//class extends
class CseTeacher extends Teacher{
    //new property if needed
    codeEditor;
    //total parameter includes
    constructor(name, address , mobileNo , subject, codeEditor){
        //super for get the extended class value
        super(name,address,mobileNo,subject);
        this.codeEditor = codeEditor;
    }
    //using function in a class
    cseActivity(name){
        console.log(name + 'doing Programming')
    }
}

//class extends
class BbaTeacher extends Teacher{

    cseActivity(name){
        console.log(this.name ,'doing Programming')
    }
}
const reza = new CseTeacher('Reza','Dhaka',443555,'Phygics');
const megha = new BbaTeacher('Megha','Khulna',3434334,'Accounting');
const mahmud = new CseTeacher('Mahmud','Dinajpur',2342342,'C','Code-blocks');
const mahumdActivity = mahmud.cseActivity('Mahmud ');

console.log(reza,megha,mahmud,mahumdActivity);