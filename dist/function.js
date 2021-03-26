"use strict";
//* Funciones en TS
Object.defineProperty(exports, "__esModule", { value: true });
var createPhoto = function (title, date, size) {
    console.log('Create picture using', title, date, size);
};
createPhoto('Deadpool', '12-02-2021', '100x100');
//* Parámetros opcionales "?"
var createMovie = function (title, date, size) {
    console.log('Create movie using', title, date, size);
};
createMovie('Wanda Vision');
//* Flat array function
var createPic = function (title, date, size) {
    return { title: title, date: date, size: size };
};
var picture = createPic('Platzi Session', '12-7-2021', '1000x1000');
console.log(picture);
//* Tipo de retornos
var handleError = function (code, message) {
    if (message === 'error') {
        throw new Error(message + ". Code error " + code);
    }
    else {
        return 'Server error';
    }
};
try {
    var result = handleError(400, 'ok'); //* string
    console.log(result);
    result = handleError(404, 'error'); //* Never
    console.log(result);
}
catch (error) {
    console.log(error);
}
