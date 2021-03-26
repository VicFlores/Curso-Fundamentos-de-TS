//* []

//* Tipo explicito

let users: string[];

users = ['Vic', 'Kaylee', 'Elizabeth'];

//* Inferido

let otherUsers = ['Vic', 'Kaylee', 'Elizabeth'];

//* Array

let pictureTitle: Array<string>;
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
