//the constructor method is a special method it has the exact name as constructor
// it is executed auto when new object is  create 
//it is used tp initialize the properties of an object 
// if we don't defined the constructor function , 
// js will add empty constructor function

//js class are the templates for js objects
// a js IS NOT AN OBJECT



// syntax 
// class ClassName{
//     constructor(){
//     }
// }


//This class has two initial properties
// class Student{
//     constructor(name,age){
//         this.name=name;
//         this.age=age;
//     }
// }

//we can use classes to create object
// const student_1 = new Student('sara',22);
// const student_2 = new Student('kim',25);

// console.log(student_2,student_1);

class Student{
    constructor(name,age){
        this.name=name;
        this.age=age;
    }
    dob(){
        let date = new Date();
        return date.getFullYear() - this.age;
    }
}

let student_1 =new Student('sara',1990);
document.body.innerHTML=`${student_1.name} is ${student_1.dob()}`;
