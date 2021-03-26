//* Explicita Null

let nullVariable: null;
nullVariable = null;

/* nullVariable = 1 error */

let otherVariable = null;
otherVariable = 'Vic'

console.log(nullVariable)
console.log(otherVariable)

//* Undefined

let undefinedVariable: undefined = undefined;

let otherVariableUndefined = 1;

console.log(undefinedVariable)
console.log(otherVariableUndefined)

//* Null and Undefined como subtipos
//* -strictNullChecks

let albumName: string;

/* albumName = null
albumName = undefined */