"use strict";
// class is used to create object - have property
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        return `${this.name} is now registered.`;
    }
}
const brad = new Person(123, 'Brad', 30);
const ablaye = new Person(124, 'Ablaye', 39);
const moussa = new Person(125, 'Moussa', 45);
const REGISTERNAME = moussa.register();
console.log(REGISTERNAME);
console.log(brad);
console.log(ablaye);
console.log(moussa);
//brad.id = 200; not allowed because of the private access modifier
//Access modifier = public,  private
//extend class
class Employees extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
}
const emp = new Employees(3, 'Shanws', 38, 'Developper');
console.log(emp.register);
console.log(emp);
// console.log(regist);
