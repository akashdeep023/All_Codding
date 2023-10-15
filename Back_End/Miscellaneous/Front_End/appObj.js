
//in Miscellaneous\Front_End\index.html----
//Create Object to best method in all---------------------------------------------------------------------
//------------------------------------------Inheritance---------------------------------------
//Inheritance is a mechanism that allows us to create new classes on the basis of already existing classes.
//Create Student object----
// class Student {
//     constructor(name,age,marks){
//         this.name = name;       //comman Teacher
//         this.age = age;         //comman Teacher
//         this.marks = marks;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// let s1 = new Student("adam",24,98);
// //Create Teacher object----
// class Teacher {
//     constructor(name,age,subject){
//         this.name = name;       //comman Student
//         this.age = age;         //comman Student
//         this.subject = subject;
//     }
//     talk(){
//         console.log(`Hi, I am ${this.name}`);
//     }
// }
// let t1 = new Student("adam",24,98);

//Create Student & Teacher object in sort from--------------
class PersonTS{               //Student & Teacher property and function comman
    constructor(name,age){
        console.log("Person class constructor");
        this.name = name;
        this. age = age;
    }
    talk(){
        console.log(`Hi, I am ${this.name}`);
    }
}
class Student extends PersonTS {      //Student(child) inherite to Person(parent)
    constructor(name,age,marks){
        console.log("Student class constructor");
        super(name,age);            //parent class constructor is being called
        this.marks = marks;
    }    
}
class Teacher extends PersonTS {      //Student(child) inherite to Person(parent)
    constructor(name,age,object){
        console.log("Teacher class constructor");
        super(name,age);            //parent class constructor is being called
        this.object = object;
    }    
}
let std1 = new Student("jack",22,99);
console.log(std1);
console.log(std1.name);
console.log(std1.age);
console.log(std1.marks);
std1.talk();
let tea1 = new Teacher("ashu",32,"english");
console.log(tea1);
console.log(tea1.name);
console.log(tea1.age);
console.log(tea1.marks);
tea1.talk();

//Create other object-----
class Mammal{
    //parent
    constructor(name){
        this.name= name;
        this.type = "warm-blooded";
    }
    eat(){
        console.log("I am eating");
    }
}
class Dog extends Mammal{
    //child
    constructor(name){
        super(name);
    }
    bark(){
        console.log("wooff..");
    }
    //child class me parent class ka fnx over ride kar diya jaye to child class ka value hoga
    eat(){
        console.log("Dog is eating");
    }
}
class Cat extends Mammal{
    //child
    constructor(name){
        super(name);
    }
    meow(){
        console.log("meow..");
    }
}
let dog1 = new Dog("tuffie");
console.log(dog1);
console.log(dog1.name);
console.log(dog1.type);
dog1.eat();     //over ride
dog1.bark();
let cat1 = new Cat("tuffie");
console.log(cat1);
console.log(cat1.name);
console.log(cat1.type);
cat1.eat();
cat1.meow();
