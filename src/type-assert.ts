
//* <> Angle bracket

let userName: any;

userName = 'VicFlores11'

//* tenemos una cadena

let message: string = (<string>userName).length > 5 
	? `Welcome ${userName}`
	: 'UserName too short'

console.log(message)

let userNameWithID: any = 'Kaylee 69'

//* Obtener solo userName

userName = (<string>userNameWithID).substring(0,6)

console.log(userName)

//* Sintaxis "as"

message = (userName as string).length > 5 
	? `Ẁelcome ${message}`
	: 'Username too short'

let helloUser: any = 'Hello Vic Flores'

helloUser = (helloUser as string).substring(0,9)

console.log(helloUser)

export {}