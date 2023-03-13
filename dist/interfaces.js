"use strict";
const user1 = { id: 100, name: 'Ablaye' };
const p1 = 100;
const add = (x, y) => x + y;
const subs = (x, y) => x - y;
const multiple = (x, y) => x * y;
class Persons {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    registration() {
        return `${this.name} is now registered.`;
    }
}
// Subs-class
class Employe extends Persons {
    constructor(id, name, age, positions) {
        super(id, name, age);
        this.positions = positions;
    }
}
const emp1 = new Employe(3, 'Ablaye Thiam', 39, 'Developper');
console.log(emp1);
console.log(emp1.registration());
