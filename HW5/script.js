//T1
function propsCount(currentObject){
    return Object.keys(currentObject).length; 
}

let mentor = { 
    course: "JS fundamental", 
    duration: 3,
    direction: "web-development" 
};

console.log(propsCount(mentor)); 

//T2

let student = { 
    group: "Lv-548.JS Core", 
    name: "Yuriy",
    surname: "Kharandyuk",
    age: 38,
    direction: "web-development",

};

function showProps(obj){
    return Object.keys(obj);
}
function showValues(obj){
    return Object.values(obj);
}
console.log(showProps(student)); 
console.log(showValues(student)); 


//T3
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    showFullName(){
        return this.name + " " + this.surname;
    }
}

class Student extends Person{
    constructor(name, surname, year) {
        super(name, surname);
        this.year = year;
    }

    showFullName(midleName){
        return this.name + " " + this.surname + " " + midleName;
    }

    showCourse(){
        return new Date().getFullYear() - this.year;
    }
}

let stud1 = new Student("Petro", "Petrenko", 2015);
console.log(stud1.showFullName("Petrovych")); // Petrenko Petro Petrovych
console.log("Current course: " + stud1.showCourse()); //Current course: 5

//T4
class Worker {
    #experience = 1.2;

    constructor(fullName, dayRate, workingDays) {
        this.fullName = fullName;
        this.dayRate = dayRate;
        this.workingDays = workingDays;
    }

    showSalary(){
        console.log(this.fullName + " salary: " + this.dayRate * this.workingDays);
        return this.dayRate * this.workingDays;
    }
    showSalaryWithExperience(){
        console.log(this.fullName + " salary: " + this.dayRate * this.workingDays * this.#experience);
        return this.dayRate * this.workingDays * this.#experience;
    }
    get  showExp(){
        return this.#experience;
    }
    set setExp(value){
        this.#experience = value;
    }
}


let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullName);                 
worker1.showSalary();
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
worker1.showSalaryWithExperience();

let worker2 = new Worker("Tom Tomson", 48, 22);
worker2.showSalaryWithExperience();
let worker3 = new Worker("Andy Ander", 29, 23);
worker3.showSalaryWithExperience();

let objArray = new Array();
objArray.push(worker1);
objArray.push(worker2);
objArray.push(worker3);

//ok let's sort it out and print

objArray.sort(function(a, b) {
    return a.showSalaryWithExperience() - b.showSalaryWithExperience();
});

console.log("Sorted salary:");

objArray.forEach(
    function(item) {
        item.showSalaryWithExperience();
      }
);

//T5
class GeometricFigure {
    getArea() {
        return 0;
    }

    toString() {
        return Object.getPrototypeOf(this).constructor.name;
    }
}

class Triangle extends GeometricFigure {
    constructor(sideA, sideB, sideC){
        super();
        this.sideA = sideA;
        this.sideB = sideB;
        this.sideC = sideC;
    }

    getArea() {
        let p = (this.sideA + this.sideB + this.sideC)/2;
        return (p*(p - this.sideA)*(p - this.sideB)*(p - this.sideC))** (1/2);
    }


}

class Square extends GeometricFigure{
    constructor(side){
        super();
        this.side = side;
    }

    getArea() {
        
        return this.side ** 2;
    }

}

class Circle extends GeometricFigure{
    constructor(r){
        super();
        this.r = r;
    }

    getArea() {
        
        return Math.PI * this.r ** 2;
    }
}

function handleFigures(figures){
    for (let i in figures){
        if (figures[i] instanceof GeometricFigure){
            console.log("Geometric figure: " + figures[i].constructor.name + " - area:" + figures[i].getArea());
        }else console.log("Geometric figure: " + figures[i].constructor.name + " is not an instance of class GeometricFigure");
    }
}

const figures = [new Triangle(3, 4, 5), new Square(7), new Circle(5), "444"];
handleFigures(figures);
