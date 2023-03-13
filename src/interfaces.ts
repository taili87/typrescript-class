interface User {
    readonly id:number,
    name: string,
    age?:number // Optional with questions mark ??
}

const user1: User = {id: 100, name: 'Ablaye'};

// Customer Type

type Point  = number | string
const p1 : Point = 100;


interface MathFunc {
    (x:number, y:number): number
}

const add: MathFunc = (x:number, y:number): number =>x + y;
const subs: MathFunc = (x:number, y:number): number =>x - y;
const multiple: MathFunc = (x:number, y:number): number =>x * y;


interface PersonInterface{
    id:number
    name:string
    age:number
    registration():string
  
}

class Persons implements PersonInterface {
    id:number
    name:string
    age:number
    constructor(id:number, name:string, age:number) {
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

    positions:String

    constructor(id:number, name: string, age:number, positions:string){
        super(id, name, age)
        this.positions = positions
    }
}

const emp1 = new Employe (3,'Ablaye Thiam', 39,  'Developper');
console.log(emp1);

console.log(emp1.registration());

