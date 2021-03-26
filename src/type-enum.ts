
//* Orientación para fotos

/* const landscape = 0
const portrait = 1;
const square = 2;
const panorama = 3; */

enum PhotoOrientation {
	landscape = 0, // 0
	portrait = 1, // 1
	square = 2, // 2
	panorama = 3 // 3
}

const landscape: PhotoOrientation = PhotoOrientation.landscape

console.log('landscape1', landscape)
console.log('landscape2', PhotoOrientation[landscape])

enum PictureOrientation {
	landscape2 = 69, 
	portrait2,
	square2,
	panorama2,
}

console.log('portrait2', PictureOrientation.portrait2 )

enum Country {
	ElSalvador = 'esa',
	Colombia = 'col',
	Mexico = 'mex',
}

const country: Country = Country.ElSalvador;

console.log(country)

export {}