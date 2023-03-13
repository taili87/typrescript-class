"use strict";
let id = 100;
let company = 'Ablaye Thiam LLC';
let isPublished = true;
let isPaid = false;
let myArrays = [1, 2, 3, 4, 6];
let arr = [12, "Ablaye", true];
//Tuple
let person = [12, 'ABLAYE', true];
//Tuple arrays
let employee;
employee = [
    [1, 'Ablaye'],
    [2, 'Jog'],
    [3, 'Johnson']
];
//UNION more than 1 type:
let idNumber;
idNumber = 2000;
idNumber = 'Ablaye Tiiam';
//Enum: Numeratic type - set of name constance that did not change
var Direction1;
(function (Direction1) {
    Direction1[Direction1["UP"] = 0] = "UP";
    Direction1[Direction1["DOWN"] = 1] = "DOWN";
    Direction1[Direction1["LEFT"] = 2] = "LEFT";
    Direction1[Direction1["RIGHT"] = 3] = "RIGHT";
})(Direction1 || (Direction1 = {}));
console.log(Direction1.UP);
var Direction2;
(function (Direction2) {
    Direction2["UP"] = "up";
    Direction2["DOWN"] = "Down";
    Direction2["LEFT"] = "left";
    Direction2["RIGHT"] = "right";
})(Direction2 || (Direction2 = {}));
console.log(Direction2.LEFT);
const users = { id: 1, name: 'Ablaye' };
const user = { id: 123, name: 'John' };
// Type Assertion: tell the compile to treat in different type
// Method1
let cid = 100;
let customerId = cid;
// Method2
let cids = 200;
let customerIds = cids;
// Functions
function addNumber(x, y) {
    return x + y;
}
console.log(addNumber(100, 200));
// VOID 
function log(message) {
    console.log(message);
}
log('Maman');
