"use strict";
//* Void
//* Tipo explicito
var user = {
    id: 4,
    name: 'Kaylee Henriquez',
    email: 'kaylee@gmail.com'
};
var showInfo = function (user) {
    console.log("User info:\n\tid: " + user.id + "\n\tuser: " + user.name + "\n\temail: " + user.email + "\n");
};
showInfo(user);
//* Tipo inferido
var showFormattedInfo = function (user) {
    console.log("User info:\n\t\tid: " + user.id + "\n\t\tuser: " + user.name + "\n\t\temail: " + user.email + "\n\t");
};
showFormattedInfo(user);
//* Void
var unusable;
/* unusable = null; */
unusable = undefined;
//* Never
var handleError = function (code, message) {
    throw new Error(message + ", Code: " + code);
};
try {
    handleError(400, 'Not Found');
}
catch (error) {
}
var sumNumber = function (limit) {
    var sum = 0;
    while (true) {
        sum++;
    }
};
sumNumber(10);
