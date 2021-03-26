"use strict";
//* <> Angle bracket
Object.defineProperty(exports, "__esModule", { value: true });
var userName;
userName = 'VicFlores11';
//* tenemos una cadena
var message = userName.length > 5
    ? "Welcome " + userName
    : 'UserName too short';
console.log(message);
var userNameWithID = 'Kaylee 69';
//* Obtener solo userName
userName = userNameWithID.substring(0, 6);
console.log(userName);
//* Sintaxis "as"
message = userName.length > 5
    ? "\u1E80elcome " + message
    : 'Username too short';
var helloUser = 'Hello Vic Flores';
helloUser = helloUser.substring(0, 9);
console.log(helloUser);
