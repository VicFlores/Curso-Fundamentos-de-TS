
//* Tuple

let user:[number, string] ;

user = [1, 'VicFlores11']

console.log(`user ${user}`)

//* Tuples con multiples valores

let userInfo : [number, string, boolean]

userInfo = [1, 'VicFlores11', true]

console.log(userInfo)

//* Arreglo de tuples

let array: [number, string][] = [];

array.push([1, 'VicFLores11'])
array.push([2, 'Kaylee69'])
array.push([3, 'Andrea45'])


//* Funciones en arrays

array[2][1] = array[2][1].concat('69')

console.log(array)

export {}