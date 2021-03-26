"use strict";
//* Explicita Null
var nullVariable;
nullVariable = null;
/* nullVariable = 1 error */
var otherVariable = null;
otherVariable = 'Vic';
console.log(nullVariable);
console.log(otherVariable);
//* Undefined
var undefinedVariable = undefined;
var otherVariableUndefined = 1;
console.log(undefinedVariable);
console.log(otherVariableUndefined);
//* Null and Undefined como subtipos
//* -strictNullChecks
var albumName;
/* albumName = null
albumName = undefined */ 
