//* type object

let userDB: object;

userDB = {};

userDB = {
	id: 1,
	username: 'VicFlores11',
	firstName: 'Vic',
	isPremium: true
}

console.log(userDB)
/* console.log(userDB.firstName) */

//* Object vs object

let  myObject = {
	id: 1,
	username: 'VicFlores11',
	firstName: 'Vic',
	isPremium: true
}

console.log(myObject.username)

const isInstance = myObject instanceof Object;
console.log(isInstance)
