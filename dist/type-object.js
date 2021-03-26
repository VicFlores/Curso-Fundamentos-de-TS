"use strict";
//* type object
var userDB;
userDB = {};
userDB = {
    id: 1,
    username: 'VicFlores11',
    firstName: 'Vic',
    isPremium: true
};
console.log(userDB);
/* console.log(userDB.firstName) */
//* Object vs object
var myObject = {
    id: 1,
    username: 'VicFlores11',
    firstName: 'Vic',
    isPremium: true
};
console.log(myObject.username);
var isInstance = myObject instanceof Object;
console.log(isInstance);
