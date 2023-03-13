let id:number = 100;
let company: string ='Ablaye Thiam LLC';
let isPublished:boolean = true;
let isPaid:any = false;

let myArrays: number[] = [1,2,3,4,6];
let arr: any[] = [12,"Ablaye", true];

//Tuple

let person: [number, string , boolean] = [12,'ABLAYE', true];

//Tuple arrays

let employee:[number, string][]
employee =[
           [1,'Ablaye'], 
           [2,'Jog'],
           [3,'Johnson']
] 

//UNION more than 1 type:

let idNumber: string | number;
idNumber = 2000;
idNumber = 'Ablaye Tiiam';

//Enum: Numeratic type - set of name constance that did not change
enum Direction1 {
    UP,
    DOWN,
    LEFT,
    RIGHT
}
console.log(Direction1.UP);


enum Direction2 {
    UP ='up',
    DOWN='Down',
    LEFT= 'left',
    RIGHT = 'right'
}

console.log(Direction2.LEFT);

// Objects

type Users = {id:number, name:string}; const users:Users = { id:1, name:'Ablaye'};
const user: {id:number, name: string } = {id:123, name: 'John'};

// Type Assertion: tell the compile to treat in different type

// Method1
let cid: any =100;
let customerId = <number>cid;

// Method2
let cids:any =200;
let customerIds =cids as number

// Functions

function addNumber(x:number, y:number): number {
    return x + y
}
console.log(addNumber(100,200));


// VOID 
function log(message: string | number){
    console.log(message);
}
log('Maman')

