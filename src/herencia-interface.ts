enum PhotoOrientation {
  landscape,
  portrait,
  square,
  panorama,
}

interface Entity {
  id: number;
  title: string;
}

interface Album extends Entity {
  description: string;
}

interface Picture extends Entity {
  orientation: PhotoOrientation;
}

const album: Album = {
  id: 69,
  title: 'La pantera rosa',
  description: 'caricatura antigua',
};

const picture: Picture = {
  id: 77,
  title: 'Park',
  orientation: PhotoOrientation.landscape,
};

let newPicture = {} as Picture;

newPicture.id = 2;
newPicture.title = 'Sun';
newPicture.orientation = PhotoOrientation.panorama;

console.log('album', album);
console.log('picture', picture);
console.log('new picture', newPicture);

export {};
