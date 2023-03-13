// Generic to build reusable components

function getArray(items:any[] ):any[]{
    return new Array().concat(items);
}

let numArr = getArray([1,2,3,4,5]);
let strArr = getArray(['Ablaye','Thiam','Diop']);

function getArrays<T>(items:T[] ):T[]{
    return new Array().concat(items);
}

let numArray = getArrays<number>([1,2,3,4,5]);
let strArray = getArrays<string>(['Ablaye','Thiam','Diop']);
numArray.push(6);
numArray.push(7);
strArray.push('Mamadou');
strArray.push('Ibrahima');
console.log(numArray)
console.log(strArray)
