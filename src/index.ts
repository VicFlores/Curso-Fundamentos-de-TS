
//! Tipo: Number

//* Explicito

let phone: number;

phone = 75527785;

//* Inferido

let phoneNumber  = 75527785;

phoneNumber = 78954585;

//* Hexadecimal

let hex: number = 0xf00d;
 
//* Binario

let binary: number = 0b1001;

//* Octal

let octal: number = 0o744;


//! Tipo: Boolean

let isPremium: boolean;

//* Explicito

isPremium = true;

//* Inferido

let isUserPremium = false;

isUserPremium = true;


//! Tipo: String

let userName: string = 'Vic Flores'

userName = 'Madeleyne Melissa';

//* Template String

let userInfo: string;

userInfo = `
	user: ${userName}
	premium: ${isUserPremium}
	phone: ${phoneNumber}
`;

console.log(`User info ${userInfo}`)