"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var album = {
    id: 69,
    title: 'La pantera rosa',
    description: 'caricatura antigua',
};
var picture = {
    id: 77,
    title: 'Park',
    orientation: PhotoOrientation.landscape,
};
var newPicture = {};
newPicture.id = 2;
newPicture.title = 'Sun';
newPicture.orientation = PhotoOrientation.panorama;
console.log('album', album);
console.log('picture', picture);
console.log('new picture', newPicture);
