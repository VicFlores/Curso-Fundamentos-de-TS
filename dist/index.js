"use strict";
//! Tipo: Number
//* Explicito
var phone;
phone = 75527785;
//* Inferido
var phoneNumber = 75527785;
phoneNumber = 78954585;
//* Hexadecimal
var hex = 0xf00d;
//* Binario
var binary = 9;
//* Octal
var octal = 484;
//! Tipo: Boolean
var isPremium;
//* Explicito
isPremium = true;
//* Inferido
var isUserPremium = false;
isUserPremium = true;
//! Tipo: String
var userName = 'Vic Flores';
userName = 'Madeleyne Melissa';
//* Template String
var userInfo;
userInfo = "\n\tuser: " + userName + "\n\tpremium: " + isUserPremium + "\n\tphone: " + phoneNumber + "\n";
console.log("User info " + userInfo);
