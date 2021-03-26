
//! Any

//* Tipo explicito

let idUser: any;

idUser = 1 // number
idUser = '1' // string

console.log(`idUser ${idUser}`)

//* Tipo inferido

let otherID;

otherID = 1;
otherID = '1';

console.log(`otherID ${otherID}`)

let surprise: any = 'Hola Typescript'

const res = surprise.substring(5);

console.log(`surprise ${res}`)