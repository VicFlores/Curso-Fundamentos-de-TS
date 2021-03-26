"use strict";
//* Function para mostrar una foto
Object.defineProperty(exports, "__esModule", { value: true });
var PhotoOrientation;
(function (PhotoOrientation) {
    PhotoOrientation[PhotoOrientation["landscape"] = 0] = "landscape";
    PhotoOrientation[PhotoOrientation["portrait"] = 1] = "portrait";
    PhotoOrientation[PhotoOrientation["square"] = 2] = "square";
    PhotoOrientation[PhotoOrientation["panorama"] = 3] = "panorama";
})(PhotoOrientation || (PhotoOrientation = {}));
var showPicture = function (picture) {
    console.log("[title: " + picture.title + ", date: " + picture.date + ", orientation: " + picture.orientation + "]");
};
var myPic = {
    title: 'Test Title',
    date: '20-07-2021',
    orientation: PhotoOrientation.landscape,
};
showPicture(myPic);
showPicture({
    title: 'Title',
    date: '08-06-2021',
    orientation: PhotoOrientation.panorama,
});
var generatePicture = function (config) {
    var picture = {
        title: 'Default',
        date: '12-12-2020',
    };
    if (config.title) {
        picture.title = config.title;
    }
    if (config.date) {
        picture.date = config.date;
    }
    return picture;
};
var picture = generatePicture({ title: 'Zootopia', date: '14-02-2021' });
console.log(picture);
var user;
user = {
    id: '10',
    name: 'Kaylee Maria',
    username: 'Kaylee69',
    isPro: true,
};
console.log(user);
user.username = 'KayleeMaria69';
/* user.id = '056' error */
console.log(user);
