
//* Void

//* Tipo explicito

const user = {
	id: 4,
	name: 'Kaylee Henriquez',
	email: 'kaylee@gmail.com'
}

const showInfo = (user: any): any => {
	console.log(`User info:
	id: ${user.id}
	user: ${user.name}
	email: ${user.email}
`)
		
}

showInfo(user)

//* Tipo inferido

const showFormattedInfo = (user: any) => {
	console.log(`User info:
		id: ${user.id}
		user: ${user.name}
		email: ${user.email}
	`)
}

showFormattedInfo(user)


//* Void

let unusable: void;
/* unusable = null; */
unusable = undefined;

//* Never

const handleError= (code: number, message: string): never => {

	throw new Error(`${message}, Code: ${code}`)
}

try {
	handleError(400, 'Not Found')
} catch (error) {
	
}

const sumNumber = (limit: number): never => {

	let sum = 0

	while(true) {
		sum++
	}
}

sumNumber(10)