//* Funciones en TS

type SquareSize = '100x100' | '500x500' | '1000x1000';

const createPhoto = (title: string, date: string, size: SquareSize) => {
  console.log('Create picture using', title, date, size);
};

createPhoto('Deadpool', '12-02-2021', '100x100');

//* Parámetros opcionales "?"

const createMovie = (title?: string, date?: string, size?: SquareSize) => {
  console.log('Create movie using', title, date, size);
};

createMovie('Wanda Vision');

//* Flat array function

let createPic = (title: string, date: string, size: SquareSize): object => {
  return { title, date, size };
};

const picture = createPic('Platzi Session', '12-7-2021', '1000x1000');

console.log(picture);

//* Tipo de retornos

const handleError = (code: number, message: string): never | string => {
  if (message === 'error') {
    throw new Error(`${message}. Code error ${code}`);
  } else {
    return 'Server error';
  }
};

try {
  let result = handleError(400, 'ok'); //* string
  console.log(result);

  result = handleError(404, 'error'); //* Never
  console.log(result);
} catch (error) {
  console.log(error);
}

export {};
