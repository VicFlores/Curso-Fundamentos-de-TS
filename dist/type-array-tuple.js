"use strict";
//* []
//* Tipo explicito
var users;
users = ['Vic', 'Kaylee', 'Elizabeth'];
//* Inferido
var otherUsers = ['Vic', 'Kaylee', 'Elizabeth'];
//* Array
var pictureTitle;
pictureTitle = ['Cat', 'Dog', 'Parrot'];
//* Accediendo a los valores en un Array
console.log(users[0]);
console.log(pictureTitle[0]);
//* Propiedades en Array
console.log(users.length);
//* Functions en Array
users.push('PlatziUser');
users.sort();
console.log('Users', users);
