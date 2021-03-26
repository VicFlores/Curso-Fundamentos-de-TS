//* Function para mostrar una foto

enum PhotoOrientation {
  landscape,
  portrait,
  square,
  panorama,
}

interface Picture {
  title: string;
  date: string;
  orientation: PhotoOrientation;
}

const showPicture = (picture: Picture) => {
  console.log(
    `[title: ${picture.title}, date: ${picture.date}, orientation: ${picture.orientation}]`
  );
};

let myPic = {
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

//* Parámetros opcionales "?"

interface PictureConfig {
  title?: string;
  date?: string;
  orientation?: PhotoOrientation;
}

const generatePicture = (config: PictureConfig) => {
  const picture = {
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

let picture = generatePicture({ title: 'Zootopia', date: '14-02-2021' });

console.log(picture);

//* Atributos no modificables

interface User {
  readonly id: string;
  name: string;
  username: string;
  isPro: boolean;
}

let user: User;

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

export {};
