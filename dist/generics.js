"use strict";
// Generic to build reusable components
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4, 5]);
let strArr = getArray(['Ablaye', 'Thiam', 'Diop']);
function getArrays(items) {
    return new Array().concat(items);
}
let numArray = getArrays([1, 2, 3, 4, 5]);
let strArray = getArrays(['Ablaye', 'Thiam', 'Diop']);
numArray.push(6);
numArray.push(7);
strArray.push('Mamadou');
strArray.push('Ibrahima');
console.log(numArray);
console.log(strArray);
