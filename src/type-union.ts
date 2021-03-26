
/* //* 10 or '10'

let idUser: number | string;

idUser = 10
idUser = '10'

//* Buscar username by ID

const getUserName = (id: number | string) => {
	//* Logic
	return 'VicFlores11'
}

getUserName(45)
getUserName('45') */

//* Alias de tipos

//* 10 or '10'

type IdUser = number | string
type UserName = string


let idUser: IdUser;

idUser = 10
idUser = '10'

//* Buscar username by ID

const getUserName = (id: IdUser): UserName => {
	//* Logic
	return 'VicFlores11'
}

getUserName(45)
getUserName('45')


//* Tipos literales
//* 100x100, 500x500, 1000x1000

type SquareSize = '100x100' | '500x500' | '1000x1000'

let small: SquareSize = '100x100'
let medium: SquareSize = '500x500'
let big: SquareSize = '1000x1000'


export {}