"use strict";
//* Orientación para fotos
Object.defineProperty(exports, "__esModule", { value: true });
/* const landscape = 0
const portrait = 1;
const square = 2;
const panorama = 3; */
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama"; // 3
})(PhotoOrientation || (PhotoOrientation = {}));
var landscape = PhotoOrientation.landscape;
console.log('landscape1', landscape);
console.log('landscape2', PhotoOrientation[landscape]);
var PictureOrientation;
(function (PictureOrientation) {
    PictureOrientation[PictureOrientation["landscape2"] = 69] = "landscape2";
    PictureOrientation[PictureOrientation["portrait2"] = 70] = "portrait2";
    PictureOrientation[PictureOrientation["square2"] = 71] = "square2";
    PictureOrientation[PictureOrientation["panorama2"] = 72] = "panorama2";
})(PictureOrientation || (PictureOrientation = {}));
console.log('portrait2', PictureOrientation.portrait2);
var Country;
(function (Country) {
    Country["ElSalvador"] = "esa";
    Country["Colombia"] = "col";
    Country["Mexico"] = "mex";
})(Country || (Country = {}));
var country = Country.ElSalvador;
console.log(country);
