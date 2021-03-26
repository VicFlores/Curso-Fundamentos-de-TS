enum PhotoOrientation {
  landscape,
  portrait,
  square,
  panorama,
}

class Picture {
  id: number;
  title: string;
  orientation: PhotoOrientation;

  constructor(id: number, title: string, orientation: PhotoOrientation) {
    this.id = id;
    this.title = title;
    this.orientation = orientation;
  }

  toString() {
    return `[id: ${this.id}, title: ${this.title}, orientation: ${this.orientation}]`;
  }
}

class Album {
  id: number;
  title: string;
  pictures: Picture[];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
    this.pictures = [];
  }

  addPicture(picture: Picture) {
    this.pictures.push(picture);
  }
}

const album: Album = new Album(1, 'La casa blanca');
const picture: Picture = new Picture(69, 'Vanessa', PhotoOrientation.panorama);

album.addPicture(picture);

console.log('album', album);

export {};
